import React from 'react';
import { Grid, GridChild } from 'react-layout';

const GridDefault = () => (
  <div>
    <Grid
      rowDefinitions={[{}, {}, {}, {}]}
      columnDefinitions={[{}, {}, {}, {}]}
    >
      <GridChild gridRow={1} gridColumn={1}>
        <button>Btn 1</button>
      </GridChild>
      <GridChild gridRow={2} gridColumn={2}>
        <button>Btn 2</button>
      </GridChild>
      <GridChild gridRow={3} gridColumn={3}>
        <button>Btn 3</button>
      </GridChild>
      <GridChild gridRow={4} gridColumn={4}>
        <button>Btn 4</button>
      </GridChild>
    </Grid>

    <Grid
      rowDefinitions={[{}, {}, {}, {}]}
      columnDefinitions={[{}, {}, {}, {}]}
    >
      <GridChild gridRow={1} gridColumn={1} gridColumnSpan={2}>
        <button>Btn 1</button>
      </GridChild>
      <GridChild gridRow={2} gridColumn={2} gridRowSpan={2}>
        <button>Btn 2</button>
      </GridChild>
      <GridChild gridRow={3} gridColumn={3} gridRowSpan={2} gridColumnSpan={2}>
        <button>Btn 3</button>
      </GridChild>
    </Grid>

    <Grid
      rowDefinitions={[{ height: 40 }, { height: 60 }, { height: 80 }, { height: 100 }]}
      columnDefinitions={[{ width: 60 }, { width: 80 }, { width: 100 }, { width: 120 }]}
    >
      <GridChild gridRow={1} gridColumn={1}>
        <button>Btn 1</button>
      </GridChild>
      <GridChild gridRow={2} gridColumn={2}>
        <button>Btn 2</button>
      </GridChild>
      <GridChild gridRow={3} gridColumn={3}>
        <button>Btn 3</button>
      </GridChild>
      <GridChild gridRow={4} gridColumn={4}>
        <button>Btn 4</button>
      </GridChild>
    </Grid>
  </div>
);

export default GridDefault;
