import * as React from 'react';
import styled from 'styled-components';

import { WrapperProps, SequenceWrapperProps } from './types';
import { createFlexDirectionCalculator } from './utils';

export interface WrapProps extends WrapperProps, SequenceWrapperProps {}

const calculateFlexDirection = createFlexDirectionCalculator({
  orientation: 'horizontal',
  direction: 'left-to-right',
});

const calculateFlexWrap = (props: WrapProps) =>
  ({
    'left-to-right': 'wrap',
    'right-to-left': 'wrap-reverse',
  }[props.direction || 'left-to-right']);

const WrapDiv = styled.div`
  display: flex;
  flex-direction: ${calculateFlexDirection};
  flex-wrap: ${calculateFlexWrap};
`;

/**
 * A container in which children appear next to each other, one after another.
 * When they get to the end, it starts a new row or column.
 */
export const Wrap = ({ children, ...props }: WrapProps) => (
  <WrapDiv {...props}>{children}</WrapDiv>
);
