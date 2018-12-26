import React from 'react';
import { Stack, StackChild } from 'react-layout';

const StackHorizontal = () => (
  <Stack orientation="horizontal" style={{ height: '50px' }}>
    <StackChild>
      <span>Text</span>
    </StackChild>
    <StackChild>
      <button>Button 1</button>
    </StackChild>
    <StackChild>
      <button>Button 2</button>
    </StackChild>
  </Stack>
);

export default StackHorizontal;
