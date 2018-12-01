import * as React from 'react';
import styled from 'styled-components';

import { SequenceWrapperProps, WrapperProps } from './types';
import { createFlexDirectionCalculator } from './utils';

export interface StackProps extends WrapperProps, SequenceWrapperProps {}

const calculateFlexDirection = createFlexDirectionCalculator({
  orientation: 'vertical',
  direction: 'left-to-right',
});

const StackDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${calculateFlexDirection};
`;

/**
 * A container that stacks its children next to each other, one after another.
 */
export const Stack = ({ children, ...props }: StackProps) => (
  <StackDiv {...props}>{children}</StackDiv>
);
