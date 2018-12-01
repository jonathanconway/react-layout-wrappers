import * as React from 'react';
import { HTMLProps } from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Grid, GridChildProps } from '../src';

const Button = (_: HTMLProps<HTMLSpanElement> & GridChildProps) => (
  <span>.</span>
);

describe('A <Grid />', () => {
  describe('with 3 rows and 3 columns defined', () => {
    const props = {
      rowDefinitions: [{}, {}, {}, {}],
      columnDefinitions: [{}, {}, {}, {}],
    };

    it('renders grid with correct styles', () => {
      const tree = mount(<Grid {...props} />);

      expect(tree).toHaveStyleRule('grid-template-rows', '1fr 1fr 1fr 1fr');
      expect(tree).toHaveStyleRule('grid-template-columns', '1fr 1fr 1fr 1fr');
    });

    describe('with children assigned to some of the cells', () => {
      const children = [
        <Button key={0} gridRow={0} gridColumn={0}>
          Btn 1
        </Button>,
        <Button key={1} gridRow={1} gridColumn={1}>
          Btn 2
        </Button>,
        <Button key={2} gridRow={2} gridColumn={2}>
          Btn 3
        </Button>,
        <Button key={3} gridRow={3} gridColumn={3}>
          Btn 4
        </Button>,
      ];
      const tree = mount(<Grid {...props}>{children}</Grid>);

      it('renders the children with correct styles', () => {
        expect(tree).toHaveStyleRule('grid-row-start', '1', {
          modifier: '#grid-child-0',
        });
        expect(tree).toHaveStyleRule('grid-column-start', '1', {
          modifier: '#grid-child-0',
        });

        expect(tree).toHaveStyleRule('grid-row-start', '2', {
          modifier: '#grid-child-1',
        });
        expect(tree).toHaveStyleRule('grid-column-start', '2', {
          modifier: '#grid-child-1',
        });

        expect(tree).toHaveStyleRule('grid-row-start', '3', {
          modifier: '#grid-child-2',
        });
        expect(tree).toHaveStyleRule('grid-column-start', '3', {
          modifier: '#grid-child-2',
        });

        expect(tree).toHaveStyleRule('grid-row-start', '4', {
          modifier: '#grid-child-3',
        });
        expect(tree).toHaveStyleRule('grid-column-start', '4', {
          modifier: '#grid-child-3',
        });
      });
    });

    describe('with a child that spans more than one column and/or row', () => {
      const children = [
        <Button key={0} gridRow={0} gridColumn={0} gridColumnSpan={2}>
          Btn 1
        </Button>,
        <Button key={1} gridRow={1} gridColumn={2} gridRowSpan={2}>
          Btn 2
        </Button>,
        <Button
          key={2}
          gridRow={2}
          gridColumn={0}
          gridColumnSpan={2}
          gridRowSpan={2}
        >
          Btn 3
        </Button>,
      ];
      const tree = mount(<Grid {...props}>{children}</Grid>);

      it('renders the children with correct styles', () => {
        expect(tree).toHaveStyleRule('grid-row-start', '1', {
          modifier: '#grid-child-0',
        });
        expect(tree).toHaveStyleRule('grid-row-end', '1', {
          modifier: '#grid-child-0',
        });
        expect(tree).toHaveStyleRule('grid-column-start', '1', {
          modifier: '#grid-child-0',
        });
        expect(tree).toHaveStyleRule('grid-column-end', '3', {
          modifier: '#grid-child-0',
        });

        expect(tree).toHaveStyleRule('grid-row-start', '2', {
          modifier: '#grid-child-1',
        });
        expect(tree).toHaveStyleRule('grid-row-end', '4', {
          modifier: '#grid-child-1',
        });
        expect(tree).toHaveStyleRule('grid-column-start', '3', {
          modifier: '#grid-child-1',
        });
        expect(tree).toHaveStyleRule('grid-column-end', '3', {
          modifier: '#grid-child-1',
        });

        expect(tree).toHaveStyleRule('grid-row-start', '3', {
          modifier: '#grid-child-2',
        });
        expect(tree).toHaveStyleRule('grid-row-end', '5', {
          modifier: '#grid-child-2',
        });
        expect(tree).toHaveStyleRule('grid-column-start', '1', {
          modifier: '#grid-child-2',
        });
        expect(tree).toHaveStyleRule('grid-column-end', '3', {
          modifier: '#grid-child-2',
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
        <Button key={0} gridRow={0} gridColumn={0}>
          Btn 1
        </Button>
        <Button key={1} gridRow={1} gridColumn={1}>
          Btn 2
        </Button>
        <Button key={2} gridRow={2} gridColumn={2}>
          Btn 3
        </Button>
        <Button key={3} gridRow={3} gridColumn={3}>
          Btn 4
        </Button>
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
