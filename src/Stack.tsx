import * as React from 'react';
import styled from 'styled-components';

import { SequenceWrapperProps, WrapperProps } from './types';
import { createFlexDirectionCalculator } from './utils';

export interface StackProps extends WrapperProps, SequenceWrapperProps {}

const defaultProps: StackProps = {
  orientation: 'vertical',
  direction: 'left-to-right',
};

const calculateFlexDirection = createFlexDirectionCalculator(defaultProps);

const calculateWidthOrHeightSetting = (props: StackProps) =>
  ({
    horizontal: 'height: 100%;',
    vertical: 'width: 100%;',
  }[props.orientation || defaultProps.orientation!]);

const StackDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${calculateFlexDirection};
  vertical-align: top;

  & > * {
    ${calculateWidthOrHeightSetting};
  }
`;

/**
 * A container that stacks its children next to each other, one after another.
 */
export const Stack = ({ children, ...props }: StackProps) => (
  <StackDiv {...props}>{children}</StackDiv>
);
