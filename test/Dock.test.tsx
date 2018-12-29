import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Dock, DockChild } from '../src';

describe('A <Dock />', () => {
  describe('with 4 differently docked children', () => {
    const tree = mount(
      <Dock id="dock">
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

    it('renders the children in nested containers', () => {
      expect(tree.find('#dock div #child-1')).not.toBeUndefined();
      expect(tree.find('#dock div div #child-2')).not.toBeUndefined();
      expect(tree.find('#dock div div div #child-3')).not.toBeUndefined();
      expect(tree.find('#dock div div div div #child-4')).not.toBeUndefined();
    });

    it('renders the child wrappers with appropriate styles', () => {
      expect(tree.find('#dock div').at(0)).toHaveStyleRule(
        'flex-direction',
        'column'
      );
      expect(tree.find('#dock div div').at(1)).toHaveStyleRule(
        'flex-direction',
        'row-reverse'
      );
      expect(tree.find('#dock div div div').at(1)).toHaveStyleRule(
        'flex-direction',
        'column-reverse'
      );
      expect(tree.find('#dock div div div div').at(1)).toHaveStyleRule(
        'flex-direction',
        'row'
      );
    });
  });
});
