import React from 'react';
import { UniformGrid, UniformGridChild } from 'react-layout';

const UniformGridDefault = () => (
  <UniformGrid rows={2} columns={4}>
    {Array(8).fill(null).map((_, i) =>
      <UniformGridChild>
        <span>Item {i + 1}</span>
      </UniformGridChild>
    )}
  </UniformGrid>
);

export default UniformGridDefault;
