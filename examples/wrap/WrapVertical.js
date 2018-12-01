import React from 'react';
import { Wrap } from 'react-layout';

const styles = {
  container: {
    'height': '90px'
  },
  item: {
    'border': 'solid 1px black',
    'width': '30px'
  }
};

const WrapVertical = () => (
  <div>
    <Wrap style={styles.container} orientation="vertical">
      {[...Array(50).keys()].map(i =>
        <span key={i} style={styles.item}>{i}</span>
      )}
    </Wrap>

    <Wrap style={styles.container} orientation="vertical" direction="right-to-left">
      {[...Array(50).keys()].map(i =>
        <span key={i} style={styles.item}>{i}</span>
      )}
    </Wrap>
  </div>
);

export default WrapVertical;
