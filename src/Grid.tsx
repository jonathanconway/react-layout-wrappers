import * as React from 'react';
import { ReactChild, ReactElement, HTMLProps } from 'react';
import styled from 'styled-components';

import { WrapperProps } from './types';
import {
  addKeysAndIdsWithPrefixToElements,
  formatSpacingValue,
  valueOrDefault,
} from './utils';

export interface GridProps extends WrapperProps {
  readonly rowDefinitions: ReadonlyArray<GridRowDefinition>;
  readonly columnDefinitions: ReadonlyArray<GridColumnDefinition>;
}

export interface GridRowDefinition {
  readonly height?: number | string;
}

export interface GridColumnDefinition {
  readonly width?: number | string;
}

export interface GridChildProps extends HTMLProps<HTMLElement> {
  readonly gridRow?: number;
  readonly gridColumn?: number;
  readonly gridRowSpan?: number;
  readonly gridColumnSpan?: number;
}

type GridChild = ReactElement<GridChildProps>;

interface GridDivProps {
  readonly gridProps: GridProps;
  readonly elements: ReadonlyArray<GridChild>;
}

const valueOr1Fr = valueOrDefault('1fr');

const mapDefinitionSize = (size?: number | string) =>
  valueOr1Fr(formatSpacingValue(size));

const getDefinitionSize = (dimension: 'row' | 'column', props: GridDivProps) =>
  dimension === 'row'
    ? (props.gridProps.rowDefinitions || []).map(d => d.height)
    : dimension === 'column'
      ? (props.gridProps.columnDefinitions || []).map(d => d.width)
      : [];

const generateGridTemplateUnit = (dimension: 'row' | 'column') => (
  props: GridDivProps
) =>
  getDefinitionSize(dimension, props)
    .map(mapDefinitionSize)
    .join(' ');

const childPrefix = 'grid-child';

/**
 * Generate styles needed to implement gridRowSpan and gridColumnSpan.
 */
const generateRowColumnSpanStyles = (props: GridDivProps) =>
  props.elements
    .filter(
      element =>
        element.props.gridRow !== undefined &&
        element.props.gridColumn !== undefined
    )
    .map(
      (element, index) => `
      #${childPrefix}-${index} {
        grid-row-start: ${element.props.gridRow!};
        grid-row-end: ${element.props.gridRow! +
          (element.props.gridRowSpan || 0)};
        grid-column-start: ${element.props.gridColumn!};
        grid-column-end: ${element.props.gridColumn! +
          (element.props.gridColumnSpan || 0)};
      }
    `
    )
    .join('');

const GridDiv = styled.div`
  display: grid;
  grid-template-rows: ${generateGridTemplateUnit('row')};
  grid-template-columns: ${generateGridTemplateUnit('column')};

  ${generateRowColumnSpanStyles};
`;

/**
 * Put keys and ids on all the elements
 */
const addKeysAndIdsToElements = addKeysAndIdsWithPrefixToElements(childPrefix);

/**
 * From all the children, return only GridChildElement elements.
 */
const getGridChildElements = (children: ReadonlyArray<ReactChild>) =>
  children
    .map(gridChild => gridChild as GridChild)
    .filter(x => !!x)
    .map(gridChild => gridChild);

/**
 * A container that slots its children into cells, defined by rows and columns.
 */
export const Grid = ({ children, ...props }: GridProps) => {
  const elementsToRender = addKeysAndIdsToElements(
    getGridChildElements(React.Children.toArray(children) as ReadonlyArray<
      ReactChild
    >)
  );

  return (
    <GridDiv gridProps={props} elements={elementsToRender}>
      {elementsToRender}
    </GridDiv>
  );
};
