import * as React from 'react';
import styled from 'styled-components';

import { formatSpacingValue, valueOrDefault } from './utils';
import { WrapperProps, WrapperChildProps } from './types';

export interface CanvasProps extends WrapperProps<CanvasChildProps> {}

export interface CanvasChildProps extends WrapperChildProps {
  readonly canvasTop?: number | string;
  readonly canvasRight?: number | string;
  readonly canvasBottom?: number | string;
  readonly canvasLeft?: number | string;
  readonly canvasZIndex?: number;
}

const StyledCanvasDiv = styled.div`
  position: relative;

  ${(props: CanvasProps) => {
    const valueOrInitial = valueOrDefault('initial');

    const formatPositionValue = (value?: number | string) =>
      valueOrInitial(formatSpacingValue(value!));

    return props.children
      .map(
        (child, index) => `
        & > *:nth-child(${index + 1}) {
          position: absolute;
          top: ${formatPositionValue(child.props.canvasTop)};
          right: ${formatPositionValue(child.props.canvasRight)};
          bottom: ${formatPositionValue(child.props.canvasBottom)};
          left: ${formatPositionValue(child.props.canvasLeft)};
          z-index: ${valueOrInitial(child.props.canvasZIndex)};
        }`
      )
      .join('');
  }};
`;

export const CanvasChild = (props: CanvasChildProps) => <>{props.children}</>;

/**
 * A container that lets you place its children at co-ordinates on a 2D plane.
 */
export const Canvas = (props: CanvasProps) => (
  <StyledCanvasDiv {...props}>{props.children}</StyledCanvasDiv>
);
