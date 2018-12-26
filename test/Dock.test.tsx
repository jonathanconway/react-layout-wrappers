import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Dock, DockChild } from '../src';

describe('A <Dock />', () => {
  describe('with 4 differently docked children', () => {
    const tree = mount(
      <Dock>
        <DockChild dock="top">
          <span id="child-1">.</span>
        </DockChild>
        <DockChild dock="right">
          <span id="child-2">.</span>
        </DockChild>
        <DockChild dock="bottom">
          <span id="child-3">.</span>
        </DockChild>
        <DockChild dock="left">
          <span id="child-4">.</span>
        </DockChild>
      </Dock>
    );
    const wrappers = [
      tree.find('div'),
      tree.find('div div'),
      tree.find('div div div'),
      tree.find('div div div div'),
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
    const tree = mount(
      <Dock lastChildFill={true}>
        <DockChild>
          <span />
        </DockChild>
        <DockChild>
          <span />
        </DockChild>
      </Dock>
    );

    it('styles the last child to fill', () => {
      expect(tree.find('div div')).toHaveStyleRule('flex', '1', {
        modifier: '> *',
      });
    });
  });
});
