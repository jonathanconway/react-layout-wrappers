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
      rowDefinitions={[{ height: 40 }, { height: 60 }, { height: 80 }, { height: 100 }]}
      columnDefinitions={[{ width: 60 }, { width: 80 }, { width: 100 }, { width: 120 }]}
    >
      <button gridRow={0} gridColumn={0}>Btn 1</button>
      <button gridRow={1} gridColumn={1}>Btn 2</button>
      <button gridRow={2} gridColumn={2}>Btn 3</button>
      <button gridRow={3} gridColumn={3}>Btn 4</button>
    </Grid>
  </div>
);

export default GridDefault;
