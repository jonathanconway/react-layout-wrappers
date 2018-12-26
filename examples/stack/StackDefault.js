import React from 'react';
import { Stack, StackChild } from 'react-layout';

const StackVertical = () => (
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

export default StackVertical;
