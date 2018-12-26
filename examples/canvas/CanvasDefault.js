import React from 'react';
import { Canvas, CanvasChild } from 'react-layout';

const CanvasDefault = () => (
  <Canvas style={{ height: '200px' }}>
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

export default CanvasDefault;
