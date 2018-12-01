import * as React from 'react';
import { ReactChild, ReactElement, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { WrapperProps } from './types';

export interface DockProps extends WrapperProps {
  readonly lastChildFill?: boolean;
}

export type DockDirection = 'top' | 'right' | 'bottom' | 'left';

interface DockChildContainerProps extends HTMLAttributes<HTMLDivElement> {
  readonly dock?: DockDirection;
}

type DockChildContainer = ReactElement<DockChildContainerProps>;

interface DockChildWrappingInfo {
  readonly dockProps: DockProps;
  readonly children: ReactChild[];
}

const dockChildDirectionsToFlexDirections = {
  top: 'column',
  right: 'row-reverse',
  bottom: 'column-reverse',
  left: 'row',
};

const calculateDockChildFlexDirection = ({
  dock = 'left',
}: DockChildContainerProps) => dockChildDirectionsToFlexDirections[dock];

const DockChildContainerDiv = styled.div`
  display: flex;
  flex-direction: ${calculateDockChildFlexDirection};
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  &.should-fill {
    > * {
      flex: 1;
    }
  }
`;

/**
 * Determine what props to pass the Dock child container, in order to style it
 * correctly.
 */
const calculateDockChildContainerProps = ({
  dockProps,
  children,
}: DockChildWrappingInfo): DockChildContainerProps => {
  const child = children[0] as DockChildContainer;
  const dock = ((child || {}).props || {}).dock;
  const isLastChild = children.length === 1;
  const shouldFill = !!dockProps.lastChildFill && isLastChild;
  return {
    dock,
    className: shouldFill ? 'should-fill' : '',
  };
};

/**
 * Wrap each child in a nested container, like so:
 *
 * + Child 0 container
 *   |
 *   +- Child 0
 *   |
 *   +- Child 1 container
 *      |
 *      +- Child 1
 *
 *         ...etc...
 */
const wrapChildrenInNestedContainers = ({
  dockProps,
  children,
}: DockChildWrappingInfo) => {
  const dockChildContainerProps = calculateDockChildContainerProps({
    dockProps,
    children,
  });
  return (
    <DockChildContainerDiv {...dockChildContainerProps}>
      {children[0]}
      {children.length > 1
        ? wrapChildrenInNestedContainers({
            dockProps,
            children: children.slice(1),
          })
        : undefined}
    </DockChildContainerDiv>
  );
};

/**
 * A container in which each child gravitates to one of its four edges.
 */
export const Dock = (props: DockProps) => {
  const { children, lastChildFill, ...dockProps } = props;
  return (
    <div {...dockProps}>
      {wrapChildrenInNestedContainers({
        dockProps: { lastChildFill, ...dockProps },
        children: React.Children.toArray(children),
      })}
    </div>
  );
};
