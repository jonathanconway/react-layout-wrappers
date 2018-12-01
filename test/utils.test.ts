import { createFlexDirectionCalculator } from '../src/utils';

const calculateFlexDirection = createFlexDirectionCalculator({
  orientation: 'vertical',
  direction: 'left-to-right',
});

describe('createFlexDirectionCalculator', () => {
  describe('returned calculator', () => {
    describe('orientation = vertical', () => {
      describe('direction = left-to-right or right-to-left', () => {
        it('styles flex-direction as column', () => {
          expect(calculateFlexDirection({})).toBe('column');
          expect(calculateFlexDirection({ direction: 'right-to-left' })).toBe(
            'column'
          );
        });
      });
    });
    describe('orientation = horizontal', () => {
      describe('direction = left-to-right', () => {
        it('styles flex-direction as row', () => {
          expect(calculateFlexDirection({ orientation: 'horizontal' })).toBe(
            'row'
          );
        });
      });
      describe('direction = right-to-left', () => {
        it('styles flex-direction as row-reverse', () => {
          expect(
            calculateFlexDirection({
              orientation: 'horizontal',
              direction: 'right-to-left',
            })
          ).toBe('row-reverse');
        });
      });
    });
  });
});
