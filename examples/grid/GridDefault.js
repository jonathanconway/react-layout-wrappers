import React from 'react';
import { Grid } from 'react-layout';

const GridDefault = () => (
  <div>
    <Grid
      rowDefinitions={[{}, {}, {}, {}]}
      columnDefinitions={[{}, {}, {}, {}]}
    >
      <button gridRow={0} gridColumn={0}>Btn 1</button>
      <button gridRow={1} gridColumn={1}>Btn 2</button>
      <button gridRow={2} gridColumn={2}>Btn 3</button>
      <button gridRow={3} gridColumn={3}>Btn 4</button>
    </Grid>

    <Grid
      rowDefinitions={[{}, {}, {}, {}]}
      columnDefinitions={[{}, {}, {}, {}]}
    >
      <button gridRow={0} gridColumn={0} gridColumnSpan={2}>Btn 1</button>
      <button gridRow={1} gridColumn={1} gridRowSpan={2}>Btn 2</button>
      <button gridRow={2} gridColumn={2} gridRowSpan={2} gridColumnSpan={2}>Btn 3</button>
    </Grid>

    <Grid
      rowDefinitions={[{ height: 20 }, { height: 30 }, { height: 40 }, { height: 50 }]}
      columnDefinitions={[{ width: 20 }, { width: 30 }, { width: 40 }, { width: 50 }]}
    >
      <button gridRow={0} gridColumn={0}>Btn 1</button>
      <button gridRow={1} gridColumn={1}>Btn 2</button>
      <button gridRow={2} gridColumn={2}>Btn 3</button>
      <button gridRow={3} gridColumn={3}>Btn 4</button>
    </Grid>
  </div>
);

export default GridDefault;
