import React from 'react';
import { Wrap, WrapChild } from 'react-layout';

const WrapDefault = () => (
  <Wrap style={{ width: '200px' }}>
    {Array(7).fill(null).map((_, i) =>
      <WrapChild>
        <span>Tag {i + 1}</span>
      </WrapChild>
    )}
  </Wrap>
);

export default WrapDefault;
