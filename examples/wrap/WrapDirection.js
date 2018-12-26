import React from 'react';
import { Wrap, WrapChild } from 'react-layout';

const WrapDirection = () => (
  <Wrap direction="right-to-left">
    {Array(100).fill().map((_, i) =>
      <WrapChild>
        <span key={i}>{i}</span>
      </WrapChild>
    )}
  </Wrap>
);

export default WrapDirection;
