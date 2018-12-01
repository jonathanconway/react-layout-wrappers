import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { UniformGrid } from '../src';

describe('A <UniformGrid />', () => {
  describe('with children and no other props set', () => {
    it('renders all the children, one after another', () => {
      const tree = mount(
        <UniformGrid rows={2} columns={4}>
          <button>Btn1</button>
          <button>Btn2</button>
          <button>Btn3</button>
          <button>Btn4</button>
          <button>Btn5</button>
          <button>Btn6</button>
          <button>Btn7</button>
          <button>Btn8</button>
        </UniformGrid>
      );
      expect(tree).toHaveStyleRule('display', 'grid');
      expect(tree).toHaveStyleRule('grid-template-rows', '1fr 1fr');
      expect(tree).toHaveStyleRule('grid-template-columns', '1fr 1fr 1fr 1fr');
    });
  });
});
