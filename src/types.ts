import { HTMLAttributes, ReactElement } from 'react';

export type Orientation = 'horizontal' | 'vertical';

export type Direction = 'left-to-right' | 'right-to-left';

/**
 * Props for wrappers whose children are in an ordered sequence.
 * These props concern the direction of the flow, and whether the
 * flow is horizontal or vertical.
 */

//  TODO: come up with a more self-describing name for this
export interface SequenceWrapperProps {
  readonly orientation?: Orientation;
  readonly direction?: Direction;
}

export interface WrapperChildProps extends HTMLAttributes<HTMLDivElement> {}

export type WrapperChildNode<T extends WrapperChildProps> = ReactElement<T>;

type HTMLAttributesOfDivElementExceptChildren = Pick<
  HTMLAttributes<HTMLDivElement>,
  Exclude<keyof HTMLAttributes<HTMLDivElement>, 'children'>
>;

export interface WrapperProps<TChild extends WrapperChildProps>
  extends HTMLAttributesOfDivElementExceptChildren {
  // todo: make it support single child MAYBE
  readonly children: ReadonlyArray<WrapperChildNode<TChild>>;
}

export type WrapperNode = ReactElement<WrapperProps<WrapperChildProps>>;
