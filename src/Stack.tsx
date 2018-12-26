import * as React from 'react';
import styled from 'styled-components';

import { WrapperProps, WrapperChildProps, SequenceWrapperProps } from './types';
import { createFlexDirectionCalculator } from './utils';

export interface StackProps
  extends WrapperProps<StackChildProps>,
    SequenceWrapperProps {}

export interface StackChildProps extends WrapperChildProps {}

const defaultSequenceProps: SequenceWrapperProps = {
  orientation: 'vertical',
  direction: 'left-to-right',
};

const calculateFlexDirection = createFlexDirectionCalculator(
  defaultSequenceProps
);

const calculateWidthOrHeightSetting = (props: SequenceWrapperProps) =>
  ({
    horizontal: 'height: 100%;',
    vertical: 'width: 100%;',
  }[props.orientation || defaultSequenceProps.orientation!]);

const StyledStackDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${calculateFlexDirection};
  vertical-align: top;

  & > * {
    ${calculateWidthOrHeightSetting};
  }
`;

export const StackChild = (props: StackChildProps) => <>{props.children}</>;

/**
 * A container that stacks its children next to each other, one after another.
 */
export const Stack = (props: StackProps) => (
  <StyledStackDiv {...props}>{props.children}</StyledStackDiv>
);
