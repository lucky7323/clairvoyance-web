import { format } from 'd3-format';

/**
 * automatically trim zero
 *
 * parseFixedDecimal(0.123) === 0.12
 * parseFixedDecimal(0.123, 1) === 0.1
 * parseFixedDecimal(0.123, 5) === 0.123
 */
export const parseFloat = (num: number, decimal = 2) => format(`.${decimal}~f`)(num);

/**
 * parsePercent(0.123) === 12%
 * parsePercent(0.128) === 13%
 */
export const parsePercent = (num: number, decimal?: number) =>
  format(`${decimal ? `.${decimal}` : '~'}%`)(num);

/**
 * parseNumberWithUnit(42e6) === 42M
 */
export const parseNumberWithUnit = (num: number) => format('~s')(num);

/**
 * parseNumberWithComma(10000) === 10,000
 */
export const parseNumberWithComma = (num: number) => format(',~')(num);
