import React from 'react';
import { Wrap } from 'react-layout';

const WrapDirection = () => (
  <Wrap direction="right-to-left">
    {[...Array(100).keys()].map(i =>
      <span key={i}>{i}</span>
    )}
  </Wrap>
);

export default WrapDirection;
