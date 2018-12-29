import * as React from 'react';
import styled from 'styled-components';

import { WrapperProps, SequenceWrapperProps, WrapperChildProps } from './types';
import { createFlexDirectionCalculator } from './utils';

export interface WrapProps
  extends WrapperProps<WrapChildProps>,
    SequenceWrapperProps {}

export interface WrapChildProps extends WrapperChildProps {}

const calculateFlexDirection = createFlexDirectionCalculator({
  orientation: 'horizontal',
  direction: 'left-to-right',
});

const calculateFlexWrap = (props: WrapProps) => {
  if (props.orientation === 'vertical') {
    return {
      'left-to-right': 'wrap',
      'right-to-left': 'wrap-reverse',
    }[props.direction || 'left-to-right'];
  }
  return 'wrap';
};

const StyledWrapDiv = styled.div`
  display: flex;
  flex-direction: ${calculateFlexDirection};
  flex-wrap: ${calculateFlexWrap};
`;

export const WrapChild = (props: WrapChildProps) => <>{props.children}</>;

/**
 * A container in which children appear next to each other, one after another.
 * When they get to the end, it starts a new row or column.
 */
export const Wrap = (props: WrapProps) => (
  <StyledWrapDiv {...props}>{props.children}</StyledWrapDiv>
);
