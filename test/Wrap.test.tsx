import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Wrap } from '../src';

describe('A <Wrap />', () => {
  describe('with children and no other props set', () => {
    it('renders all the children, one after another', () => {
      const tree = mount(
        <Wrap>
          <span id="one" />
          <span id="two" />
          <span id="three" />
        </Wrap>
      );
      const spans = tree.find('span');
      expect(spans.length).toBe(3);
      expect(spans.slice(0, 1).instance().attributes.id.value).toBe('one');
      expect(spans.slice(1, 2).instance().attributes.id.value).toBe('two');
      expect(spans.slice(2, 3).instance().attributes.id.value).toBe('three');
      expect(tree).toHaveStyleRule('display', 'flex');
      expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
    });
  });
});
