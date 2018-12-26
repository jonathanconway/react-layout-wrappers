import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Grid, GridChild } from '../src';

describe('A <Grid />', () => {
  describe('with 3 rows and 3 columns defined', () => {
    const props = {
      rowDefinitions: [{}, {}, {}, {}],
      columnDefinitions: [{}, {}, {}, {}],
    };

    it('renders grid with correct styles', () => {
      const tree = mount(
        <Grid {...props}>
          <GridChild key={1} gridRow={1} gridColumn={1}>
            <button>Btn 1</button>
          </GridChild>
          <GridChild key={2} gridRow={2} gridColumn={2}>
            <button>Btn 2</button>
          </GridChild>
        </Grid>
      );

      expect(tree).toHaveStyleRule('grid-template-rows', '1fr 1fr 1fr 1fr');
      expect(tree).toHaveStyleRule('grid-template-columns', '1fr 1fr 1fr 1fr');
    });

    const createModifier = (index: number) => `& > *:nth-child(${index + 1})`;

    describe('with children assigned to some of the cells', () => {
      const tree = mount(
        <Grid {...props}>
          <GridChild key={1} gridRow={1} gridColumn={1}>
            <button>Btn 1</button>
          </GridChild>
          <GridChild key={2} gridRow={2} gridColumn={2}>
            <button>Btn 2</button>
          </GridChild>
          <GridChild key={3} gridRow={3} gridColumn={3}>
            <button>Btn 3</button>
          </GridChild>
          <GridChild key={4} gridRow={4} gridColumn={4}>
            <button>Btn 4</button>
          </GridChild>
        </Grid>
      );

      it('renders the children with correct styles', () => {
        expect(tree).toHaveStyleRule('grid-row-start', '1', {
          modifier: createModifier(0),
        });
        expect(tree).toHaveStyleRule('grid-column-start', '1', {
          modifier: createModifier(0),
        });

        expect(tree).toHaveStyleRule('grid-row-start', '2', {
          modifier: createModifier(1),
        });
        expect(tree).toHaveStyleRule('grid-column-start', '2', {
          modifier: createModifier(1),
        });

        expect(tree).toHaveStyleRule('grid-row-start', '3', {
          modifier: createModifier(2),
        });
        expect(tree).toHaveStyleRule('grid-column-start', '3', {
          modifier: createModifier(2),
        });

        expect(tree).toHaveStyleRule('grid-row-start', '4', {
          modifier: createModifier(3),
        });
        expect(tree).toHaveStyleRule('grid-column-start', '4', {
          modifier: createModifier(3),
        });
      });
    });

    describe('with a child that spans more than one column and/or row', () => {
      const tree = mount(
        <Grid {...props}>
          <GridChild key={1} gridRow={1} gridColumn={1} gridColumnSpan={3}>
            <button>Btn 1</button>
          </GridChild>
          <GridChild key={2} gridRow={2} gridColumn={3} gridRowSpan={3}>
            <button>Btn 2</button>
          </GridChild>
          <GridChild
            key={3}
            gridRow={3}
            gridColumn={1}
            gridColumnSpan={3}
            gridRowSpan={3}
          >
            <button>Btn 3</button>
          </GridChild>
        </Grid>
      );

      it('renders the children with correct styles', () => {
        expect(tree).toHaveStyleRule('grid-row-start', '1', {
          modifier: createModifier(0),
        });
        expect(tree).toHaveStyleRule('grid-row-end', '1', {
          modifier: createModifier(0),
        });
        expect(tree).toHaveStyleRule('grid-column-start', '1', {
          modifier: createModifier(0),
        });
        expect(tree).toHaveStyleRule('grid-column-end', '4', {
          modifier: createModifier(0),
        });

        expect(tree).toHaveStyleRule('grid-row-start', '2', {
          modifier: createModifier(1),
        });
        expect(tree).toHaveStyleRule('grid-row-end', '5', {
          modifier: createModifier(1),
        });
        expect(tree).toHaveStyleRule('grid-column-start', '3', {
          modifier: createModifier(1),
        });
        expect(tree).toHaveStyleRule('grid-column-end', '3', {
          modifier: createModifier(1),
        });

        expect(tree).toHaveStyleRule('grid-row-start', '3', {
          modifier: createModifier(2),
        });
        expect(tree).toHaveStyleRule('grid-row-end', '6', {
          modifier: createModifier(2),
        });
        expect(tree).toHaveStyleRule('grid-column-start', '1', {
          modifier: createModifier(2),
        });
        expect(tree).toHaveStyleRule('grid-column-end', '4', {
          modifier: createModifier(2),
        });
      });
    });
  });

  describe('with 3 rows and 3 columns with widths and heights defined', () => {
    const props = {
      rowDefinitions: [
        { height: 20 },
        { height: 30 },
        { height: 40 },
        { height: 50 },
      ],
      columnDefinitions: [
        { width: 20 },
        { width: 30 },
        { width: 40 },
        { width: 50 },
      ],
    };
    const tree = mount(
      <Grid {...props}>
        <GridChild key={1} gridRow={1} gridColumn={1}>
          <button>Btn 1</button>
        </GridChild>
        <GridChild key={2} gridRow={2} gridColumn={2}>
          <button>Btn 2</button>
        </GridChild>
        <GridChild key={3} gridRow={3} gridColumn={3}>
          <button>Btn 3</button>
        </GridChild>
        <GridChild key={4} gridRow={4} gridColumn={4}>
          <button>Btn 4</button>
        </GridChild>
      </Grid>
    );
    it('renders the grid with correct styles', () => {
      expect(tree).toHaveStyleRule('grid-template-rows', '20px 30px 40px 50px');
      expect(tree).toHaveStyleRule(
        'grid-template-columns',
        '20px 30px 40px 50px'
      );
    });
  });
});
