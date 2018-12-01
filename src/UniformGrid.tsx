import * as React from 'react';
import styled from 'styled-components';

import { WrapperProps } from './types';

export interface UniformGridProps extends WrapperProps {
  readonly rows: number;
  readonly columns: number;
}

interface UniformGridDivProps {
  readonly gridProps: UniformGridProps;
}

const generateGridTemplateUnit = (field: keyof UniformGridProps) => (
  props: UniformGridDivProps
) =>
  Array(props.gridProps[field])
    .fill(0)
    .map(() => '1fr')
    .join(' ');

const UniformGridDiv = styled.div`
  display: grid;
  grid-template-rows: ${generateGridTemplateUnit('rows')};
  grid-template-columns: ${generateGridTemplateUnit('columns')};
`;

/**
 * A container that slots its children into cells, defined by rows and columns.
 */
export const UniformGrid = ({ children, ...props }: UniformGridProps) => (
  <UniformGridDiv gridProps={props}>{children}</UniformGridDiv>
);
