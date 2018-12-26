import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Stack, Wrap, Dock, Grid, Canvas } from '../src';
import { WrapperProps, WrapperChildProps } from '../src/types';

const allComponents: ReadonlyArray<
  (props: WrapperProps<WrapperChildProps>) => JSX.Element
> = [Stack, Wrap, Dock, Grid, Canvas];

describe('all layout components', () => {
  it('supports pass-through HTML props like className, id', () => {
    const FakeWrapChild = (props: WrapperChildProps) => <>{props.children}</>;
    allComponents.map(Component => {
      const root = mount(
        <Component className="abc" id="def">
          <FakeWrapChild>
            <></>
          </FakeWrapChild>
          <FakeWrapChild>
            <></>
          </FakeWrapChild>
        </Component>
      );
      expect(root.hasClass('abc')).toBeTruthy();
      expect(root.prop('id')).toEqual('def');
    });
  });
});
