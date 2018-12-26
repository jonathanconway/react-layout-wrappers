import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Wrap, WrapChild } from '../src';

describe('A <Wrap />', () => {
  describe('with children and no other props set', () => {
    it('renders all the children, one after another, with correct container styles', () => {
      const tree = mount(
        <Wrap>
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <WrapChild key={i}>
                <span id={`span-${i}`} />
              </WrapChild>
            ))}
        </Wrap>
      );
      const spans = tree.find('span');
      expect(spans.length).toBe(3);
      for (let spanIndex = 0; spanIndex < 3; spanIndex++) {
        expect(
          spans.slice(spanIndex, spanIndex + 1).instance().attributes.id.value
        ).toBe(`span-${spanIndex}`);
      }
      expect(tree).toHaveStyleRule('display', 'flex');
      expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
    });
  });
});
