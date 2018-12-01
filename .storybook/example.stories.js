import './story.css';
import { storiesOf, module } from '@storybook/react';
import React from 'react';

import StackDefault from '../examples/stack/StackDefault';
const StackDefaultCode = require('!raw-loader!../examples/stack/StackDefault');

import StackHorizontal from '../examples/stack/StackHorizontal';
const StackHorizontalCode = require('!raw-loader!../examples/stack/StackHorizontal');

import StackDirection from '../examples/stack/StackDirection';
const StackDirectionCode = require('!raw-loader!../examples/stack/StackDirection');

import WrapDefault from '../examples/wrap/WrapDefault';
const WrapDefaultCode = require('!raw-loader!../examples/wrap/WrapDefault');

import WrapDirection from '../examples/wrap/WrapDirection';
const WrapDirectionCode = require('!raw-loader!../examples/wrap/WrapDirection');

import WrapVertical from '../examples/wrap/WrapVertical';
const WrapVerticalCode = require('!raw-loader!../examples/wrap/WrapVertical');

import DockDefault from '../examples/dock/DockDefault';
const DockDefaultCode = require('!raw-loader!../examples/dock/DockDefault');

import GridDefault from '../examples/grid/GridDefault';
const GridDefaultCode = require('!raw-loader!../examples/grid/GridDefault');

import CanvasDefault from '../examples/canvas/CanvasDefault';
const CanvasDefaultCode = require('!raw-loader!../examples/canvas/CanvasDefault');

import UniformGridDefault from '../examples/uniform-grid/UniformGridDefault';
const UniformGridDefaultCode = require('!raw-loader!../examples/uniform-grid/UniformGridDefault');

function cleanExample(str) {
  return str
    .replace(`import { Debug } from './Debug';`, '')
    .replace(`<Debug />`, '');
}

const Code = props => (
  <div
    style={{
      margin: '0 12px',
      borderRadius: 4,
      background: '#f6f8fa',
      boxShadow: '0 0 1px  #eee inset',
    }}
  >
    <div
      style={{
        textTransform: 'uppercase',
        fontSize: 11,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        fontWeight: 500,
        padding: '.5rem',
        background: '#555',
        color: '#fff',
        letterSpacing: '1px',
      }}
    >
      Example Code
    </div>
    <pre
      style={{
        overflowX: 'scroll',
        fontSize: 11,
        padding: '.5rem',
        boxSizing: 'border-box',
      }}
      {...props}
    />
  </div>
);

storiesOf('Stack', module)
  .add('Default', () => (
    <div className="react-layout-example">
      <main>
        <StackDefault />
      </main>
      <Code>{cleanExample(StackDefaultCode)}</Code>
    </div>
  ))
  .add('Horizontal', () => (
    <div className="react-layout-example">
      <main>
        <StackHorizontal />
      </main>
      <Code>{cleanExample(StackHorizontalCode)}</Code>
    </div>
  ))
  .add('Direction', () => (
    <div className="react-layout-example">
      <main>
        <StackDirection />
      </main>
      <Code>{cleanExample(StackDirectionCode)}</Code>
    </div>
  ));
  
storiesOf('Wrap', module)
  .add('Default', () => (
    <div className="react-layout-example">
      <main>
        <WrapDefault />
      </main>
      <Code>{cleanExample(WrapDefaultCode)}</Code>
    </div>
  ))
  .add('Direction', () => (
    <div className="react-layout-example">
      <main>
        <WrapDirection />
      </main>
      <Code>{cleanExample(WrapDirectionCode)}</Code>
    </div>
  ))
  .add('Vertical', () => (
    <div className="react-layout-example">
      <main>
        <WrapVertical />
      </main>
      <Code>{cleanExample(WrapVerticalCode)}</Code>
    </div>
  ));
    
storiesOf('Dock', module)
  .add('Default', () => (
    <div className="react-layout-example">
      <main>
        <DockDefault />
      </main>
      <Code>{cleanExample(DockDefaultCode)}</Code>
    </div>
  ));
    
storiesOf('Grid', module)
  .add('Default', () => (
    <div className="react-layout-example">
      <main>
        <GridDefault />
      </main>
      <Code>{cleanExample(GridDefaultCode)}</Code>
    </div>
  ));
    
storiesOf('Canvas', module)
  .add('Default', () => (
    <div className="react-layout-example">
      <main>
        <CanvasDefault />
      </main>
      <Code>{cleanExample(CanvasDefaultCode)}</Code>
    </div>
  ));
    
storiesOf('UniformGrid', module)
  .add('Default', () => (
    <div className="react-layout-example">
      <main>
        <UniformGridDefault />
      </main>
      <Code>{cleanExample(UniformGridDefaultCode)}</Code>
    </div>
  ));
