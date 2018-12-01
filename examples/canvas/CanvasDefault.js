import React from 'react';
import { Canvas } from 'react-layout';

const style = {
  height: '200px'
};

const CanvasDefault = () => (
  <Canvas style={style}>
    <button canvasTop={20} canvasLeft={20}>Btn 1</button>
    <button canvasTop={20} canvasRight={20}>Btn 2</button>
    <button canvasBottom={20} canvasRight={20}>Btn 3</button>
    <button canvasBottom={20} canvasLeft={20}>Btn 4</button>
    <button canvasTop={80} canvasLeft={80} canvasZIndex={1}>Btn 5</button>
    <button canvasTop={90} canvasLeft={90}>Btn 6</button>
  </Canvas>
);

export default CanvasDefault;
