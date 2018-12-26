import React from 'react';
import { Stack, StackChild } from 'react-layout';

const stackFakeChildren =
  Array(3).fill(null).map((_, i) =>
    <StackChild>
      <button>Button {i + 1}</button>
    </StackChild>
  );

const StackDirection = () => (
  <div>
    <Stack orientation="horizontal" direction="left-to-right">
      {stackFakeChildren}
    </Stack>

    <Stack orientation="horizontal" direction="right-to-left">
      {stackFakeChildren}
    </Stack>
  </div>
);

export default StackDirection;
