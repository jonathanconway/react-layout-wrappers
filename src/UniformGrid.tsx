import * as React from 'react';
import styled from 'styled-components';

import { WrapperProps, WrapperChildProps } from './types';

export interface UniformGridProps extends WrapperProps<UniformGridChildProps> {
  readonly rows: number;
  readonly columns: number;
}

export interface UniformGridChildProps extends WrapperChildProps {}

const generateGridTemplateUnit = (field: keyof UniformGridProps) => (
  props: UniformGridProps
) =>
  Array(props[field])
    .fill(0)
    .map(() => '1fr')
    .join(' ');

const StyledUniformGridDiv = styled.div`
  display: grid;
  grid-template-rows: ${generateGridTemplateUnit('rows')};
  grid-template-columns: ${generateGridTemplateUnit('columns')};
`;

export const UniformGridChild = (props: UniformGridChildProps) => (
  <>{props.children}</>
);

/**
 * A container that slots its children into cells, defined by rows and columns.
 */
export const UniformGrid = (props: UniformGridProps) => (
  <StyledUniformGridDiv {...props}>{props.children}</StyledUniformGridDiv>
);
