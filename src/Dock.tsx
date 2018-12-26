import * as React from 'react';
import styled from 'styled-components';

import { WrapperProps, WrapperChildProps } from './types';
import { ReactElement } from 'react';

export interface DockProps extends WrapperProps<DockChildProps> {
  readonly lastChildFill?: boolean;
}

export type DockDirection = 'top' | 'right' | 'bottom' | 'left';

export interface DockChildProps extends WrapperChildProps {
  readonly dock?: DockDirection;
}

const defaultDockChildProps: DockChildProps = { dock: 'left' };

interface StyledDockChildDivProps {
  readonly dockProps: DockProps;
  readonly dockChildren: ReadonlyArray<ReactElement<DockChildProps>>;
}

const StyledDockChildDiv =
  styled.div <
  StyledDockChildDivProps >
  `
  display: flex;
  flex-direction: ${props =>
    ({
      top: 'column',
      right: 'row-reverse',
      bottom: 'column-reverse',
      left: 'row',
    }[props.dockChildren[0].props.dock || defaultDockChildProps.dock!])};
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ${props =>
    !!props.dockProps.lastChildFill && props.dockChildren.length === 1
      ? `
        > * {
            flex: 1;
        }
      `
      : undefined}
`;

/**
 * Wrap each child in a container in its parent, nested recursively.
 *
 * + Child 0 container
 *   |
 *   + - Child 0
 *   |
 *   + - Child 1 container
 *      |
 *      + - Child 1
 *
 *          ...etc...
 */
const wrapChildrenInNestedContainers = (props: DockProps) => (
  <StyledDockChildDiv dockProps={props} dockChildren={props.children}>
    {props.children[0]}
    {props.children.length > 1
      ? wrapChildrenInNestedContainers({
          ...props,
          children: props.children.slice(1),
        })
      : undefined}
  </StyledDockChildDiv>
);

export const DockChild = (props: DockChildProps) => <>{props.children}</>;

/**
 * A container in which each child gravitates to one of its four edges.
 */
export const Dock = (props: DockProps) => wrapChildrenInNestedContainers(props);
