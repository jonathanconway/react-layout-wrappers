import * as React from 'react';
import styled from 'styled-components';

import { WrapperProps, WrapperChildProps } from './types';
import { formatSpacingValue, valueOrDefault } from './utils';

export interface GridProps extends WrapperProps<GridChildProps> {
  readonly rowDefinitions?: ReadonlyArray<GridRowDefinition>;
  readonly columnDefinitions?: ReadonlyArray<GridColumnDefinition>;
}

export interface GridRowDefinition {
  readonly height?: number | string;
}

export interface GridColumnDefinition {
  readonly width?: number | string;
}

export interface GridChildProps extends WrapperChildProps {
  readonly gridRow?: number;
  readonly gridColumn?: number;
  readonly gridRowSpan?: number;
  readonly gridColumnSpan?: number;
}

const getDefinitionSize = (dimension: 'row' | 'column', props: GridProps) =>
  dimension === 'row'
    ? (props.rowDefinitions || []).map(d => d.height)
    : dimension === 'column'
      ? (props.columnDefinitions || []).map(d => d.width)
      : [];

const mapDefinitionSize = (size?: number | string) =>
  valueOrDefault('1fr')(formatSpacingValue(size));

const generateGridTemplateUnit = (dimension: 'row' | 'column') => (
  props: GridProps
) =>
  getDefinitionSize(dimension, props)
    .map(mapDefinitionSize)
    .join(' ');

const StyledGridDiv = styled.div`
  display: grid;
  grid-template-rows: ${generateGridTemplateUnit('row')};
  grid-template-columns: ${generateGridTemplateUnit('column')};

  ${(props: GridProps) =>
    props.children
      .map(
        (child, index) => `
        & > *:nth-child(${index + 1}) {
          grid-row-start: ${child.props.gridRow!};
          grid-row-end: ${child.props.gridRow! +
            (child.props.gridRowSpan || 0)};
          grid-column-start: ${child.props.gridColumn!};
          grid-column-end: ${child.props.gridColumn! +
            (child.props.gridColumnSpan || 0)};
        }`
      )
      .join('')};
`;

export const GridChild = (props: GridChildProps) => <>{props.children}</>;

/**
 * A container that slots its children into cells, defined by rows and columns.
 */
export const Grid = (props: GridProps) => (
  <StyledGridDiv {...props}>{props.children}</StyledGridDiv>
);
