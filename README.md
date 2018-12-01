# React Layout

<img src="https://i.imgur.com/rg2jv9n.png" alt="React Layout logo" style="width:80px;"/>

[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

A small collection of wrappers for implementing layout in your React application. Inspired by Microsoft's WPF layout components.

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

# Components

## <a name="stack"></a>Stack
<br />
<img src="https://i.imgur.com/Rb8COhW.png" alt="Stack icon" />

### Overview

Stack is a container that stacks its children next to each other, one after another.

### Props

#### `orientation: 'horizontal' | 'vertical'`

* `horizontal` (default) Lays out the children horizontally / length-wise.
* `vertical` Lays out the children vertically / height-wise.

#### `direction: 'left-to-right' | 'right-to-left'`

* `left-to-right` Lays out the components in order, from left to right (if horizontal) or from top to bottom (if vertical)
* `right-to-left` Reverse of the above; right to left (if horizontal) or bottom to top (if vertical)

#### `children: []`

The children to be rendered inside the stack component.


### Example

```jsx
import React from 'react';
import { Stack } from 'react-layout';

const StackExample = () => (
  <Stack>
    <h1>Heading</h1>
    <p>Paragraph</p>
    <button>Button</button>
  </Stack>
);
```


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
 
#### `children: []`

The children to be rendered inside the wrap component.


### Example

```jsx
import React from 'react';
import { Wrap } from 'react-layout';

const WrapExample = () => (
  <Wrap>
    <span>Tag 1</span>
    <span>Tag 2</span>
    <span>Tag 3</span>
    <span>Tag 4</span>
    <span>Tag 5</span>
    <span>Tag 6</span>
    <span>Tag 7</span>
  </Wrap>
);
```


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

#### `children: []`

The children to be rendered inside the dock component.


### Example

```jsx
import React from 'react';
import { Wrap } from 'react-layout';

const HorizontalWrap = () => (
  <Wrap>
    <span>Tag 1</span>
    <span>Tag 2</span>
    <span>Tag 3</span>
    <span>Tag 4</span>
    <span>Tag 5</span>
    <span>Tag 6</span>
    <span>Tag 7</span>
  </Wrap>
);
```


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

#### `children: [{ gridRow, gridColumn, gridRowSpan, gridColumnSpan }]`

Child elements can be given props, to define where and how they sit in the grid.

* `gridRow: number` (optional) Which row to position the element in  (1-based).
* `gridColumn: number` (optional) Which column to position the element in  (1-based).
* `gridRowSpan: number` (optional) How many rows the element takes up (defaults to 1).
* `gridColumnSpan: number` (optional) How many columns the element takes up (defaults to 1).

#### `children: []`

The children to be rendered inside the grid.


### Example

```jsx
import React from 'react';
import { Grid } from 'react-layout';

const GridExample = () => (
  <Grid>
    <span style={{ 'background-color': 'black' }} gridRow={1} gridColumn={1}>Btn 1</span>
    <span style={{ 'background-color': 'white' }} gridRow={1} gridColumn={2}>Btn 2</span>
    <span style={{ 'background-color': 'black' }} gridRow={1} gridColumn={3}>Btn 3</span>
    <span style={{ 'background-color': 'white' }} gridRow={2} gridColumn={1}>Btn 4</span>
    <span style={{ 'background-color': 'black' }} gridRow={2} gridColumn={2}>Btn 5</span>
    <span style={{ 'background-color': 'white' }} gridRow={2} gridColumn={3}>Btn 6</span>
    <span style={{ 'background-color': 'black' }} gridRow={3} gridColumn={1}>Btn 7</span>
    <span style={{ 'background-color': 'white' }} gridRow={3} gridColumn={2}>Btn 8</span>
    <span style={{ 'background-color': 'black' }} gridRow={3} gridColumn={3}>Btn 9</span>
  </Grid>
);
```


## <a name="canvas"></a>Canvas

<br />
<img src="https://i.imgur.com/p7sBUHZ.png" alt="Canvas icon" />

### Overview

Canvas is a container that lets you place its children at co-ordinates on a 2D plane.

### Props

#### `children: [{ canvasTop, canvasRight, canvasBottom, canvasLeft, canvasZIndex }]`

Child elements can be given props, to define where and how they sit on the canvas.

* `canvasTop: number | string` (optional) Top position of the element. 0 means the very top, greater means farther from the top and closer to the bottom.

* `canvasRight: number | string` (optional) Right position of the element. 0 means the very right, greater means farther from the right and closer to the left.

* `canvasBottom: number | string` (optional) Bottom position of the element. 0 means the very bottom, greater means farther from the bottom and closer to the top.

* `canvasLeft: number | string` (optional) Left position of the element. 0 means the very left, greater means farther from the left and closer to the right.

* `canvasZIndex: number` (optional) Position of the element on the Z-Index (that is, order of overlapping, where part or all of the element overlaps with other elements). Greater means closer to the front, relative to the Z-Index of other elements. Lesser means farther to the back.

#### `children: []`

The children to be rendered on the canvas.


### Example

```jsx
import React from 'react';
import { Canvas } from 'react-layout';

const CanvasExample = () => (
  <Canvas style={style}>
    <button canvasTop={20} canvasLeft={20}>Btn 1</button>
    <button canvasTop={20} canvasRight={20}>Btn 2</button>
    <button canvasBottom={20} canvasRight={20}>Btn 3</button>
    <button canvasBottom={20} canvasLeft={20}>Btn 4</button>
    <button canvasTop={80} canvasLeft={80} canvasZIndex={1}>Btn 5</button>
    <button canvasTop={90} canvasLeft={90}>Btn 6</button>
  </Canvas>
);
```


## <a name="uniform-grid"></a>UniformGrid

<br />
<img src="https://i.imgur.com/R1X4BEf.png" alt="UniformGrid icon" />

### Overview

UniformGrid is a container that slots its children into cells, defined by rows and columns. It is like [Grid](#grid), except that it just renders its children onto the grid in the order they are passed, rather than allowing you to set each individual's location independently.

#### `rows: number`

(optional) Defines how many rows are in the grid.

#### `columnDefinitions: number`

(optional) Defines how many columns are in the grid.

#### `children: []`

The children to be rendered inside the grid.


# Resources

## Books

* [Illustrated WPF (Daniel Solis, 2009)](https://www.amazon.com/Illustrated-WPF-Experts-Voice-NET/dp/1430219106)


---

Copyright &copy; 2018

Jonathan Conway

MIT License.

---
