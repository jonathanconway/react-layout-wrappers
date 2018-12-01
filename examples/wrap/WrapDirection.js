import React from 'react';
import { Wrap } from 'react-layout';

const style = {
  'border': 'solid 1px black',
  'width': '30px'
};

const WrapDirection = () => (
  <Wrap direction="right-to-left">
    {[...Array(100).keys()].map(i =>
      <span key={i} style={style}>{i}</span>
    )}
  </Wrap>
);

export default WrapDirection;
