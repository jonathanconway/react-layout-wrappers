import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Stack, Wrap, Dock, Grid, Canvas } from '../src';

const allComponents = [Stack, Wrap, Dock, Grid, Canvas];

describe('all layout components', () => {
  it('support text nodes', () => {
    allComponents.map(Component =>
      mount(
        <Component>
          <button>1</button>
          <span>3</span>
        </Component>
      )
    );
  });
  it('supports pass-through HTML props like className, id', () => {
    allComponents.map(Component => {
      const root = mount(<Component className="abc" id="def" />);
      expect(root.hasClass('abc')).toBeTruthy();
      expect(root.prop('id')).toEqual('def');
    });
  });
});
