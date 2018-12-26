import React from 'react';
import { Dock, DockChild } from 'react-layout';

const style = {
  'height': '100px',
  'margin-bottom': '20px'
};

const DockDefault = () => (
  <Dock style={style} lastChildFill={true}>
    <DockChild dock="top">
      <button>One</button>
    </DockChild>
    <DockChild dock="left">
      <button>Two</button>
    </DockChild>
    <DockChild dock="right">
      <button>Three</button>
    </DockChild>
    <DockChild dock="right">
      <button>Four</button>
    </DockChild>
    <DockChild dock="bottom">
      <button>Five</button>
    </DockChild>
  </Dock>
);

export default DockDefault;
