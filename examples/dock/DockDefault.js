import React from 'react';
import { Dock } from 'react-layout';

const style = {
  'height': '100px',
  'margin-bottom': '20px'
};

const DockDefault = () => (
  <div>
    <Dock style={style}>
      <button dock="top">One</button>
      <button dock="left">Two</button>
      <button dock="right">Three</button>
      <button dock="right">Four</button>
      <button dock="bottom">Five</button>
    </Dock>
  </div>
);

export default DockDefault;
