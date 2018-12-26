import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Canvas, CanvasChild } from '../src';

describe('A <Canvas />', () => {
  describe('with child elements at various positions and one with a z-index', () => {
    const tree = mount(
      <Canvas>
        <CanvasChild canvasTop={20} canvasLeft={20}>
          <button>Btn 1</button>
        </CanvasChild>
        <CanvasChild canvasTop={20} canvasRight={20}>
          <button>Btn 2</button>
        </CanvasChild>
        <CanvasChild canvasBottom={20} canvasRight={20}>
          <button>Btn 3</button>
        </CanvasChild>
        <CanvasChild canvasBottom={20} canvasLeft={20}>
          <button>Btn 4</button>
        </CanvasChild>
        <CanvasChild canvasTop={80} canvasLeft={80} canvasZIndex={1}>
          <button>Btn 5</button>
        </CanvasChild>
        <CanvasChild canvasTop={90} canvasLeft={90}>
          <button>Btn 6</button>
        </CanvasChild>
      </Canvas>
    );

    it('renders the canvas with correct styles', () => {
      expect(tree).toHaveStyleRule('position', 'relative');
    });

    it('renders the children with correct styles', () => {
      const createModifier = (index: number) => `& > *:nth-child(${index + 1})`;

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: createModifier(0),
      });
      expect(tree).toHaveStyleRule('left', '20px', {
        modifier: createModifier(0),
      });
      expect(tree).toHaveStyleRule('top', '20px', {
        modifier: createModifier(0),
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: createModifier(1),
      });
      expect(tree).toHaveStyleRule('right', '20px', {
        modifier: createModifier(1),
      });
      expect(tree).toHaveStyleRule('top', '20px', {
        modifier: createModifier(1),
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: createModifier(2),
      });
      expect(tree).toHaveStyleRule('right', '20px', {
        modifier: createModifier(2),
      });
      expect(tree).toHaveStyleRule('bottom', '20px', {
        modifier: createModifier(2),
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: createModifier(3),
      });
      expect(tree).toHaveStyleRule('left', '20px', {
        modifier: createModifier(3),
      });
      expect(tree).toHaveStyleRule('bottom', '20px', {
        modifier: createModifier(3),
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: createModifier(4),
      });
      expect(tree).toHaveStyleRule('left', '80px', {
        modifier: createModifier(4),
      });
      expect(tree).toHaveStyleRule('top', '80px', {
        modifier: createModifier(4),
      });
      expect(tree).toHaveStyleRule('z-index', '1', {
        modifier: createModifier(4),
      });

      expect(tree).toHaveStyleRule('position', 'absolute', {
        modifier: createModifier(5),
      });
      expect(tree).toHaveStyleRule('left', '90px', {
        modifier: createModifier(5),
      });
      expect(tree).toHaveStyleRule('top', '90px', {
        modifier: createModifier(5),
      });
    });
  });
});
