# React Layout Wrappers

<img src="https://i.imgur.com/rg2jv9n.png" alt="React Layout logo" style="width:80px;"/>

[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

A small collection of wrappers for implementing layout in your React application.

Inspired by Microsoft's WPF layout components.

The wrappers:

* [Stack](#stack)
* [Wrap](#wrap)
* [Dock](#dock)
* [Grid](#grid)
* [Canvas](#canvas)
* [UniformGrid](#uniform-grid)

# Overview

When you start putting together a user interface, in any language or framework, one of the first things you'll need to do is lay out the elements. You'll need to position, size and space them in various configurations, depending on what works best for the interface you're trying to develop.

React Layout aims to be your one-stop-shop for laying our your UI components in React. It does this by providing a small number of flexible and composable 'wrapper' components, in which you can place your components (including other wrapper components), in order to declaratively specify their layout.

This is (hopefully) simpler and less tedious and repetitive than writing custom CSS (e.g. FlexBox) or attempting to fit some other layout system (e.g. Bootstrap) into your React app. These methods were suitable for the contexts they were being used in (web pages styled with HTML and CSS), but are not so suitable for building component-based web apps in React.

In React Layout, all the layout components are simply React components, so you can easily fit them in alongside whatever other React components you're using (or just standard DOM elements in React). You can look at your hierarchy of components and easily determine how they will be laid out.

# Installation

NPM:

```
npm install --save react-layout-wrappers
```

Yarn:

```
yarn add react-layout-wrappers
```

# Components

## <a name="stack"></a>Stack
<br />
<img src="https://i.imgur.com/Rb8COhW.png" alt="Stack icon" />

### Overview

Stack is a container that stacks its children next to each other, one after another.

### Props

#### `orientation: 'horizontal' | 'vertical'`

* `vertical` (default) Lays out the children vertically
* `horizontal` Lays out the children horizontally

#### `direction: 'left-to-right' | 'right-to-left'`

* `left-to-right` Lays out the components in order, from left to right (if horizontal) or from top to bottom (if vertical)
* `right-to-left` Reverse of the above; right to left (if horizontal) or bottom to top (if vertical)

#### `children: StackChild[]`

An array of StackChild elements to be rendered inside the Stack.


### Example

```jsx
import React from 'react';
import { Stack } from 'react-layout-wrappers';

const StackExample = () => (
  <Stack>
    <StackChild>
      <h1>Heading</h1>
    </StackChild>
    <StackChild>
      <p>Paragraph</p>
    </StackChild>
    <StackChild>
      <button>Button</button>
    </StackChild>
  </Stack>
);
```

<img src="https://i.imgur.com/TBE3qOx.png" alt="Stack example screenshot" />


## <a name="wrap"></a>Wrap

<br />
<img src="https://i.imgur.com/WXrjA52.png" alt="Wrap icon" />

### Overview

Wrap is a container in which children appear next to each other, one after another. When they get to the end, it starts a new row or column.

### Props

#### `orientation: 'horizontal' | 'vertical'`

* `horizontal` (default) Lays out the children horizontally / length-wise.
* `vertical` Lays out the children vertically / height-wise.

#### `direction: 'left-to-right' | 'right-to-left'`

* `left-to-right` Lays out the components in order, from left to right (if horizontal) or from top to bottom (if vertical)
* `right-to-left` Reverse of the above; right to left (if horizontal) or bottom to top (if vertical)
 
#### `children: WrapChild[]`

An array of WrapChild elements to be rendered inside the Wrap.


### Example

```jsx
import React from 'react';
import { Wrap } from 'react-layout-wrappers';

const WrapExample = () => (
  <Wrap style={{ width: '200px' }}>
    {Array(7).fill(null).map((_, i) =>
      <WrapChild>
        <span>Tag {i + 1}</span>
      </WrapChild>
    )}
  </Wrap>
);
```

<img src="https://i.imgur.com/ZBmoK7N.png" alt="Wrap example screenshot" />


## <a name="dock"></a>Dock

<br />
<img src="https://i.imgur.com/OZB1Qf2.png" alt="Dock icon" />

### Overview

Dock is a container in which each child gravitates to one of its four edges.

### Props

#### `orientation: 'horizontal' | 'vertical'`

* `horizontal` (default) Lays out the children horizontally / length-wise.
* `vertical` Lays out the children vertically / height-wise.

#### `direction: 'left-to-right' | 'right-to-left'`

* `left-to-right` Lays out the components in order, from left to right (if horizontal) or from top to bottom (if vertical)
* `right-to-left` Reverse of the above; right to left (if horizontal) or bottom to top (if vertical)

#### `children: DockChild[]`

An array of DockChild elements to be rendered inside the Dock.


### Example

```jsx
import React from 'react';
import { Dock } from 'react-layout-wrappers';

const DockExample = () => (
  <Dock style={{ height: '100px' }} lastChildFill={true}>
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
```

<img src="https://i.imgur.com/Y9v73jk.png" alt="Dock example screenshot" />


## <a name="grid"></a>Grid

<br />
<img src="https://i.imgur.com/nNxRYj8.png" alt="Grid icon" />

### Overview

Grid is a container that slots its children into cells, defined by rows and columns.

### Props

#### `rowDefinitions: [{ height }]`

Defines how many rows are in the grid (the number of elements in the array) and settings for each individual row:

* `height: number` (optional) Defines the height of each row.

#### `columnDefinitions: [{ width }]`

Defines how many columns are in the grid (the number of elements in the array) and settings for each individual column:

* `width: number` (optional) Defines the width of each column.

#### `orientation: 'horizontal' | 'vertical'`

* `horizontal` (default) Lays out the children horizontally / length-wise.
* `vertical` Lays out the children vertically / height-wise.

#### `direction: 'left-to-right' | 'right-to-left'`

* `left-to-right` Lays out the components in order, from left to right (if horizontal) or from top to bottom (if vertical)
* `right-to-left` Reverse of the above; right to left (if horizontal) or bottom to top (if vertical)

#### `children: GridChild[]`

An array of GridChild elements to be rendered inside the Grid.

Each GridChild can be given props, to define where and how it sits in the Grid.

* `gridRow: number` (optional) Which row to position the element in  (1-based).
* `gridColumn: number` (optional) Which column to position the element in  (1-based).
* `gridRowSpan: number` (optional) How many rows the element takes up (defaults to 1).
* `gridColumnSpan: number` (optional) How many columns the element takes up (defaults to 1).


### Example

```jsx
import React from 'react';
import { Grid } from 'react-layout-wrappers';

const GridExamples = () => (
  <div>
    <Grid
      rowDefinitions={[{}, {}, {}, {}]}
      columnDefinitions={[{}, {}, {}, {}]}
    >
      <GridChild gridRow={1} gridColumn={1}>
        <button>Btn 1</button>
      </GridChild>
      <GridChild gridRow={2} gridColumn={2}>
        <button>Btn 2</button>
      </GridChild>
      <GridChild gridRow={3} gridColumn={3}>
        <button>Btn 3</button>
      </GridChild>
      <GridChild gridRow={4} gridColumn={4}>
        <button>Btn 4</button>
      </GridChild>
    </Grid>

    <Grid
      rowDefinitions={[{}, {}, {}, {}]}
      columnDefinitions={[{}, {}, {}, {}]}
    >
      <GridChild gridRow={1} gridColumn={1} gridColumnSpan={2}>
        <button>Btn 1</button>
      </GridChild>
      <GridChild gridRow={2} gridColumn={2} gridRowSpan={2}>
        <button>Btn 2</button>
      </GridChild>
      <GridChild gridRow={3} gridColumn={3} gridRowSpan={2} gridColumnSpan={2}>
        <button>Btn 3</button>
      </GridChild>
    </Grid>

    <Grid
      rowDefinitions={[{ height: 40 }, { height: 60 }, { height: 80 }, { height: 100 }]}
      columnDefinitions={[{ width: 60 }, { width: 80 }, { width: 100 }, { width: 120 }]}
    >
      <GridChild gridRow={1} gridColumn={1}>
        <button>Btn 1</button>
      </GridChild>
      <GridChild gridRow={2} gridColumn={2}>
        <button>Btn 2</button>
      </GridChild>
      <GridChild gridRow={3} gridColumn={3}>
        <button>Btn 3</button>
      </GridChild>
      <GridChild gridRow={4} gridColumn={4}>
        <button>Btn 4</button>
      </GridChild>
    </Grid>
  </div>
);
```

<img src="https://i.imgur.com/JIhHJth.png" alt="Grid example screenshot" />


## <a name="canvas"></a>Canvas

<br />
<img src="https://i.imgur.com/p7sBUHZ.png" alt="Canvas icon" />

### Overview

Canvas is a container that lets you place its children at co-ordinates on a 2D plane.

### Props

#### `children: CanvasChild[]`

An array of CanvasChild elements to be rendered inside the Canvas.

Each CanvasChild can be given props, to define where and how it sits on the Canvas.

* `canvasTop: number | string` (optional) Top position of the element. 0 means the very top, greater means farther from the top and closer to the bottom.
* `canvasRight: number | string` (optional) Right position of the element. 0 means the very right, greater means farther from the right and closer to the left.
* `canvasBottom: number | string` (optional) Bottom position of the element. 0 means the very bottom, greater means farther from the bottom and closer to the top.
* `canvasLeft: number | string` (optional) Left position of the element. 0 means the very left, greater means farther from the left and closer to the right.
* `canvasZIndex: number` (optional) Position of the element on the Z-Index (that is, order of overlapping, where part or all of the element overlaps with other elements). Greater means closer to the front, relative to the Z-Index of other elements. Lesser means farther to the back.


### Example

```jsx
import React from 'react';
import { Canvas } from 'react-layout-wrappers';

const CanvasExample = () => (
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
```

<img src="https://i.imgur.com/R0PbFqT.png" alt="Canvas example screenshot" />


## <a name="uniform-grid"></a>UniformGrid

<br />
<img src="https://i.imgur.com/R1X4BEf.png" alt="UniformGrid icon" />

### Overview

UniformGrid is a container that slots its children into cells, defined by rows and columns. It is like [Grid](#grid), except that it just renders its children onto the grid in the order they are passed, rather than allowing you to set each individual's location independently.

#### `rows: number`

(optional) Defines how many rows are in the grid.

#### `columnDefinitions: number`

(optional) Defines how many columns are in the grid.

#### `children: UniformGridChild[]`

An array of UniformGridChild elements to be rendered inside the UniformGrid.


### Example

```jsx
import React from 'react';
import { UniformGrid } from 'react-layout-wrappers';

const UniformGridExample = () => (
  <UniformGrid rows={2} columns={4}>
    {Array(8).fill(null).map((_, i) =>
      <UniformGridChild>
        <span>Item {i + 1}</span>
      </UniformGridChild>
    )}
  </UniformGrid>
);
```

<img src="https://i.imgur.com/pOb36Eu.png" alt="UniformGrid example screenshot" />


# Resources

## Books

* [Illustrated WPF (Daniel Solis, 2009)](https://www.amazon.com/Illustrated-WPF-Experts-Voice-NET/dp/1430219106)


---

Copyright &copy; 2018

Jonathan Conway

MIT License.

---
