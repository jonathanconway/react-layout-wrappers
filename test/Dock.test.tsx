import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Dock, DockDirection } from '../src';
import { HTMLProps } from 'react';

const Span = (_: HTMLProps<HTMLSpanElement> & { dock: DockDirection }) => (
  <span>.</span>
);

describe('A <Dock />', () => {
  describe('with 4 differently docked children', () => {
    const tree = mount(
      <Dock>
        <Span id="child-1" dock="top" />
        <Span id="child-2" dock="right" />
        <Span id="child-3" dock="bottom" />
        <Span id="child-4" dock="left" />
      </Dock>
    );
    const wrappers = [
      tree.find('div div'),
      tree.find('div div div'),
      tree.find('div div div div'),
      tree.find('div div div div div'),
    ];

    it('renders the children in nested containers', () => {
      expect(wrappers[0].length).toBe(4);
      expect(wrappers[0].find('#child-1')).not.toBeUndefined();
      expect(wrappers[1].length).toBe(3);
      expect(wrappers[0].find('#child-2')).not.toBeUndefined();
      expect(wrappers[2].length).toBe(2);
      expect(wrappers[0].find('#child-3')).not.toBeUndefined();
      expect(wrappers[3].length).toBe(1);
      expect(wrappers[0].find('#child-4')).not.toBeUndefined();
    });

    it('renders the child wrappers with appropriate styles', () => {
      expect(wrappers[0]).toHaveStyleRule('flex-direction', 'column');
      expect(wrappers[1]).toHaveStyleRule('flex-direction', 'row-reverse');
      expect(wrappers[2]).toHaveStyleRule('flex-direction', 'column-reverse');
      expect(wrappers[3]).toHaveStyleRule('flex-direction', 'row');
    });
  });

  describe('with lastChildFill set to true', () => {
    const tree = mount(<Dock lastChildFill={true} />);
    it('styles the last child to fill', () => {
      expect(tree).toHaveStyleRule('flex', '1', {
        modifier: '&.should-fill > *',
      });
    });
  });
});
