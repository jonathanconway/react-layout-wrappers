import React from 'react';
import { Wrap } from 'react-layout';

const style = {
  'border': 'solid 1px black',
  'width': '30px'
};

const WrapDefault = () => (
  <Wrap>
    {Array(100).fill(0).map((_, index) =>
      <span key={`wrap-${index}`} style={style}>{index}</span>
    )}
  </Wrap>
);

export default WrapDefault;
