import { describe, expect, it } from 'vitest';
import { isLeapYear } from '../src/leap-year.js';

describe('isLeapYear', () => {
	it('returns true for a year divisible by 4', () => {
		expect(isLeapYear(1996)).toBe(true);
	});
});

describe('isNotLeapYear', () => {
	it('returns false if a year is not divisible by 4', () => {
		expect(isLeapYear(1997)).toBe(false);
	});
});

describe('isCenturyYearNotLeapYear', () => {
	it('return false if it is century year', () => {
		expect(isLeapYear(1900)).toBe(false);
	});
});
