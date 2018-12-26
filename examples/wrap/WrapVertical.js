import React from 'react';
import { Wrap, WrapChild } from 'react-layout';

const styles = {
  container: {
    'height': '90px'
  },
};

const wrapFakeChildren =
  Array(50).fill(null).map((_, i) =>
    <WrapChild>
      <span key={i}>{i}</span>
    </WrapChild>
  );

const WrapVertical = () => (
  <div>
    <Wrap style={styles.container} orientation="vertical">
      {wrapFakeChildren}
    </Wrap>

    <Wrap style={styles.container} orientation="vertical" direction="right-to-left">
      {wrapFakeChildren}
    </Wrap>
  </div>
);

export default WrapVertical;
