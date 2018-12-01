import React from 'react';
import { Wrap } from 'react-layout';

const styles = {
  container: {
    'height': '90px'
  },
};

const WrapVertical = () => (
  <div>
    <Wrap style={styles.container} orientation="vertical">
      {[...Array(50).keys()].map(i =>
        <span key={i}>{i}</span>
      )}
    </Wrap>

    <Wrap style={styles.container} orientation="vertical" direction="right-to-left">
      {[...Array(50).keys()].map(i =>
        <span key={i}>{i}</span>
      )}
    </Wrap>
  </div>
);

export default WrapVertical;
