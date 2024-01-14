import React from 'react';
import { act } from 'react-dom/test-utils';
import { getLatestNotification, getFooterCopy, getFullYear }from './utils';


/* test getLatestNotification */

test('getLatestNotification', () => {
    expect(getLatestNotification().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD');
})

/* test getFooterCopy */

test('getFooterCopy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
})

test('getFooterCopy', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
})

/* test getFullYear */

test('getFullYear', () => {
    expect(getFullYear().toBe(new Date().toDateString()));
})