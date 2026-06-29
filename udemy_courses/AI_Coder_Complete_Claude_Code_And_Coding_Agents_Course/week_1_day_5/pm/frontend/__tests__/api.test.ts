import { describe, it, expect } from 'vitest';
import { apiToColumns, columnsToApi } from '@/lib/api';

const apiBoard = {
  columns: [
    { id: 'col-1', title: 'Backlog', cardIds: ['c1', 'c2'] },
    { id: 'col-2', title: 'In Progress', cardIds: ['c3'] },
    { id: 'col-3', title: 'Done', cardIds: [] },
  ],
  cards: {
    c1: { id: 'c1', title: 'Task A', details: 'Details A' },
    c2: { id: 'c2', title: 'Task B', details: '' },
    c3: { id: 'c3', title: 'Task C', details: 'Details C' },
  },
};

describe('apiToColumns', () => {
  it('maps title to name', () => {
    const cols = apiToColumns(apiBoard);
    expect(cols[0].name).toBe('Backlog');
    expect(cols[1].name).toBe('In Progress');
  });

  it('resolves cardIds into embedded Card[]', () => {
    const cols = apiToColumns(apiBoard);
    expect(cols[0].cards).toHaveLength(2);
    expect(cols[0].cards[0]).toEqual({ id: 'c1', title: 'Task A', details: 'Details A' });
    expect(cols[0].cards[1]).toEqual({ id: 'c2', title: 'Task B', details: '' });
  });

  it('preserves column order', () => {
    const cols = apiToColumns(apiBoard);
    expect(cols.map(c => c.id)).toEqual(['col-1', 'col-2', 'col-3']);
  });

  it('handles empty cardIds', () => {
    const cols = apiToColumns(apiBoard);
    expect(cols[2].cards).toHaveLength(0);
  });

  it('filters out missing card references', () => {
    const broken = {
      columns: [{ id: 'col-1', title: 'Backlog', cardIds: ['c1', 'missing'] }],
      cards: { c1: { id: 'c1', title: 'Task A', details: '' } },
    };
    const cols = apiToColumns(broken);
    expect(cols[0].cards).toHaveLength(1);
  });
});

describe('columnsToApi', () => {
  it('maps name to title', () => {
    const cols = apiToColumns(apiBoard);
    const result = columnsToApi(cols);
    expect(result.columns[0].title).toBe('Backlog');
    expect(result.columns[1].title).toBe('In Progress');
  });

  it('splits cards into flat cards dict', () => {
    const cols = apiToColumns(apiBoard);
    const result = columnsToApi(cols);
    expect(result.cards['c1']).toEqual({ id: 'c1', title: 'Task A', details: 'Details A' });
    expect(result.cards['c3']).toEqual({ id: 'c3', title: 'Task C', details: 'Details C' });
  });

  it('builds cardIds array in order', () => {
    const cols = apiToColumns(apiBoard);
    const result = columnsToApi(cols);
    expect(result.columns[0].cardIds).toEqual(['c1', 'c2']);
    expect(result.columns[1].cardIds).toEqual(['c3']);
  });

  it('round-trips back to the same structure', () => {
    const cols = apiToColumns(apiBoard);
    const result = columnsToApi(cols);
    expect(result.columns.map(c => c.id)).toEqual(['col-1', 'col-2', 'col-3']);
    expect(Object.keys(result.cards).sort()).toEqual(['c1', 'c2', 'c3']);
  });
});
