import React from 'react';
import { Dock, DockChild } from 'react-layout';

const DockDefault = () => (
  <Dock style={{ height: '100px', marginBottom: '20px' }}>
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
