import React from 'react';
import { Dock } from 'react-layout';

const style = {
  'height': '100px',
  'width': '200px',
  'margin-bottom': '20px'
};

const DockDefault = () => (
  <div>
    <Dock style={style}>
      <button>Btn 1</button>
      <button>Btn 2</button>
      <button>Btn 3</button>
    </Dock>

    <Dock style={style} lastChildFill={true}>
      <button>Btn 1</button>
      <button>Btn 2</button>
      <button>Btn 3</button>
    </Dock>

    <Dock style={style}>
      <button>Btn 1</button>
      <button>Btn 2</button>
      <input dock="top" type="text" value="Txt 3" />
      <label dock="right" style={{ 'margin': '0', 'border': 'solid 1px black' }}>Lbl 4</label>
      <button dock="bottom">Btn 5</button>
    </Dock>
  </div>
);

export default DockDefault;
