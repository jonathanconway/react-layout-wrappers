import * as React from 'react';
import { ReactElement, HTMLProps } from 'react';
import styled from 'styled-components';

import { WrapperProps } from './types';
import {
  addKeysAndIdsWithPrefixToElements,
  formatSpacingValue,
  valueOrDefault,
} from './utils';

export interface CanvasProps extends WrapperProps {}

export interface CanvasChildProps extends HTMLProps<HTMLElement> {
  readonly canvasTop?: number | string;
  readonly canvasRight?: number | string;
  readonly canvasBottom?: number | string;
  readonly canvasLeft?: number | string;
  readonly canvasZIndex?: number;
}

type CanvasChild = ReactElement<CanvasChildProps>;

interface CanvasDivProps {
  readonly elements: ReadonlyArray<CanvasChild>;
}

const childPrefix = 'canvas-child';

const valueOrInitial = valueOrDefault('initial');

const formatPositionValue = (value?: number | string) =>
  valueOrInitial(formatSpacingValue(value!));

/**
 * Generate styles needed to implement gridRowSpan and gridColumnSpan.
 */
const generateChildStyles = (props: CanvasDivProps) =>
  props.elements
    .filter(
      element =>
        !!element.props.canvasTop ||
        !!element.props.canvasRight ||
        !!element.props.canvasBottom ||
        !!element.props.canvasLeft
    )
    .map(
      (element, index) => `
      #${childPrefix}-${index} {
        position: absolute;
        top: ${formatPositionValue(element.props.canvasTop)};
        right: ${formatPositionValue(element.props.canvasRight)};
        bottom: ${formatPositionValue(element.props.canvasBottom)};
        left: ${formatPositionValue(element.props.canvasLeft)};
        z-index: ${valueOrInitial(element.props.canvasZIndex)};
      }
    `
    )
    .join('');

const CanvasDiv = styled.div`
  position: relative;

  ${generateChildStyles};
`;

/**
 * Put keys and ids on all the elements
 */
const addKeysAndIdsToElements = addKeysAndIdsWithPrefixToElements(childPrefix);

/**
 * A container that lets you place its children at co-ordinates on a 2D plane.
 */
export const Canvas = ({ children, ...props }: CanvasProps) => {
  const elements = addKeysAndIdsToElements((children || []) as ReadonlyArray<
    CanvasChild
  >);
  return (
    <CanvasDiv {...props} elements={elements}>
      {elements}
    </CanvasDiv>
  );
};
