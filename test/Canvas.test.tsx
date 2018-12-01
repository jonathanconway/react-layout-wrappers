import * as React from 'react';
import { HTMLProps } from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Canvas, CanvasChildProps } from '../src';

const Button = (_: HTMLProps<HTMLSpanElement> & CanvasChildProps) => (
  <span>.</span>
);

describe('A <Canvas />', () => {
  describe('with child elements at various positions and one with a z-index', () => {
    const tree = mount(
      <Canvas>
        <Button canvasTop={20} canvasLeft={20}>
          Btn 1
        </Button>
        <Button canvasTop={20} canvasRight={20}>
          Btn 2
        </Button>
        <Button canvasBottom={20} canvasRight={20}>
          Btn 3
        </Button>
        <Button canvasBottom={20} canvasLeft={20}>
          Btn 4
        </Button>
        <Button canvasTop={80} canvasLeft={80} canvasZIndex={1}>
          Btn 5
        </Button>
        <Button canvasTop={90} canvasLeft={90}>
          Btn 6
        </Button>
      </Canvas>
    );

    it('renders the canvas with correct styles', () => {
      expect(tree).toHaveStyleRule('position', 'relative');
    });

    it('renders the children with correct styles', () => {
      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: '#canvas-child-0',
      });
      expect(tree).toHaveStyleRule('left', '20px', {
        modifier: '#canvas-child-0',
      });
      expect(tree).toHaveStyleRule('top', '20px', {
        modifier: '#canvas-child-0',
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: '#canvas-child-1',
      });
      expect(tree).toHaveStyleRule('right', '20px', {
        modifier: '#canvas-child-1',
      });
      expect(tree).toHaveStyleRule('top', '20px', {
        modifier: '#canvas-child-1',
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: '#canvas-child-2',
      });
      expect(tree).toHaveStyleRule('right', '20px', {
        modifier: '#canvas-child-2',
      });
      expect(tree).toHaveStyleRule('bottom', '20px', {
        modifier: '#canvas-child-2',
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: '#canvas-child-3',
      });
      expect(tree).toHaveStyleRule('left', '20px', {
        modifier: '#canvas-child-3',
      });
      expect(tree).toHaveStyleRule('bottom', '20px', {
        modifier: '#canvas-child-3',
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: '#canvas-child-4',
      });
      expect(tree).toHaveStyleRule('left', '80px', {
        modifier: '#canvas-child-4',
      });
      expect(tree).toHaveStyleRule('top', '80px', {
        modifier: '#canvas-child-4',
      });
      expect(tree).toHaveStyleRule('z-index', '1', {
        modifier: '#canvas-child-4',
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: '#canvas-child-5',
      });
      expect(tree).toHaveStyleRule('left', '90px', {
        modifier: '#canvas-child-5',
      });
      expect(tree).toHaveStyleRule('top', '90px', {
        modifier: '#canvas-child-5',
      });
    });
  });
});
