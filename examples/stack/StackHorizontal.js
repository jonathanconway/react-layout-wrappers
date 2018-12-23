import React from 'react';
import { Stack } from 'react-layout';

const StackHorizontal = () => (
  <Stack orientation="horizontal" style={{ height: '50px' }}>
    <span>Text</span>
    <button>Button 1</button>
    <button>Button 2</button>
  </Stack>
);

export default StackHorizontal;
