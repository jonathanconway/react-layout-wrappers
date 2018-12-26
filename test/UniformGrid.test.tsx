import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { UniformGrid, UniformGridChild } from '../src';

describe('A <UniformGrid />', () => {
  describe('with children and no other props set', () => {
    it('renders all the children, one after another', () => {
      const tree = mount(
        <UniformGrid rows={2} columns={4}>
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <UniformGridChild key={i}>
                <button>Btn {i + 1}</button>
              </UniformGridChild>
            ))}
        </UniformGrid>
      );
      expect(tree).toHaveStyleRule('display', 'grid');
      expect(tree).toHaveStyleRule('grid-template-rows', '1fr 1fr');
      expect(tree).toHaveStyleRule('grid-template-columns', '1fr 1fr 1fr 1fr');
    });
  });
});
