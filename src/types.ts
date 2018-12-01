import { ReactNode, HTMLAttributes, ReactChild, ReactChildren } from 'react';

export type Orientation = 'horizontal' | 'vertical';

export type Direction = 'left-to-right' | 'right-to-left';

/**
 * Props for wrappers whose children are in an ordered sequence.
 * These props concern the direction of the flow, and whether the
 * flow is horizontal or vertical.
 */
export interface SequenceWrapperProps {
  readonly orientation?: Orientation;
  readonly direction?: Direction;
}

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  readonly children?: ReactNode | ReadonlyArray<ReactChild> | ReactChildren;
}
