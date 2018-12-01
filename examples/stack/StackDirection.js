import React from 'react';
import { Stack } from 'react-layout';

const StackDirection = () => (
  <div>
    <Stack orientation="horizontal" flowDirection="left-to-right">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </Stack>

    <Stack orientation="horizontal" flowDirection="right-to-left">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </Stack>
  </div>
);

export default StackDirection;
