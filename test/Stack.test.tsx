import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Stack, StackChild } from '../src';

describe('A <Stack />', () => {
  describe('with children and no other props set', () => {
    it('renders all the children, one after another', () => {
      const tree = mount(
        <Stack>
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <StackChild key={i}>
                <span id={`span-${i}`} />
              </StackChild>
            ))}
        </Stack>
      );
      const spans = tree.find('span');
      expect(spans.length).toBe(3);
      for (let spanIndex = 0; spanIndex < 2; spanIndex++) {
        expect(
          spans.slice(spanIndex, spanIndex + 1).instance().attributes.id.value
        ).toBe(`span-${spanIndex}`);
      }
      expect(tree).toHaveStyleRule('display', 'flex');
      expect(tree).toHaveStyleRule('align-items', 'center');
    });
  });
});
