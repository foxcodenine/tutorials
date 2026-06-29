import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useKanban } from '@/hooks/useKanban';

const mockApiBoard = {
  columns: [
    { id: '1', title: 'Backlog', cardIds: ['c1'] },
    { id: '2', title: 'In Progress', cardIds: [] },
  ],
  cards: { c1: { id: 'c1', title: 'Task A', details: '' } },
};

function makeFetch(...responses: { ok: boolean; data: unknown }[]) {
  const mocks = responses.map(({ ok, data }) =>
    Promise.resolve({ ok, status: ok ? 200 : 500, json: () => Promise.resolve(data) })
  );
  return vi.fn().mockImplementation(() => mocks.shift() ?? Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(mockApiBoard) }));
}

beforeEach(() => {
  vi.stubGlobal('fetch', makeFetch({ ok: true, data: mockApiBoard }));
});
afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useKanban', () => {
  it('loads board on mount and clears loading', async () => {
    const { result } = renderHook(() => useKanban('tok'));
    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.columns).toHaveLength(2);
    expect(result.current.columns[0].name).toBe('Backlog');
    expect(result.current.columns[0].cards[0].title).toBe('Task A');
    expect(result.current.error).toBeNull();
  });

  it('addCard optimistically adds card and calls PUT', async () => {
    const fetchMock = makeFetch(
      { ok: true, data: mockApiBoard },
      { ok: true, data: mockApiBoard },
    );
    vi.stubGlobal('fetch', fetchMock);

    const { result } = renderHook(() => useKanban('tok'));
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      result.current.addCard('1', { title: 'New Card', details: '' });
    });

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
    const [putUrl, putOpts] = fetchMock.mock.calls[1];
    expect(putUrl).toBe('/api/board');
    expect(putOpts.method).toBe('PUT');
  });

  it('moveCard sends c1 in destination column to PUT', async () => {
    const fetchMock = makeFetch(
      { ok: true, data: mockApiBoard },
      { ok: true, data: mockApiBoard },
    );
    vi.stubGlobal('fetch', fetchMock);

    const { result } = renderHook(() => useKanban('tok'));
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      result.current.moveCard('c1', '1', '2', 0);
    });

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));

    // Verify the PUT body sent c1 into column 2 (not column 1)
    const putBody = JSON.parse(fetchMock.mock.calls[1][1].body);
    const col1 = putBody.columns.find((c: { id: string }) => c.id === '1');
    const col2 = putBody.columns.find((c: { id: string }) => c.id === '2');
    expect(col1.cardIds).not.toContain('c1');
    expect(col2.cardIds).toContain('c1');
  });

  it('save failure sets error and rolls back columns', async () => {
    const fetchMock = makeFetch(
      { ok: true, data: mockApiBoard },
      { ok: false, data: {} },
    );
    vi.stubGlobal('fetch', fetchMock);

    const { result } = renderHook(() => useKanban('tok'));
    await waitFor(() => expect(result.current.loading).toBe(false));

    const colsBefore = result.current.columns;

    await act(async () => {
      result.current.addCard('1', { title: 'Fail Card', details: '' });
    });

    await waitFor(() => expect(result.current.error).not.toBeNull());
    expect(result.current.error).toContain('500');
    // Columns rolled back to pre-mutation state
    expect(result.current.columns).toEqual(colsBefore);
  });

  it('error is cleared on next successful save', async () => {
    const fetchMock = makeFetch(
      { ok: true, data: mockApiBoard },  // initial load
      { ok: false, data: {} },            // first save fails
      { ok: true, data: mockApiBoard },  // second save succeeds
    );
    vi.stubGlobal('fetch', fetchMock);

    const { result } = renderHook(() => useKanban('tok'));
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => { result.current.addCard('1', { title: 'Fail', details: '' }); });
    await waitFor(() => expect(result.current.error).not.toBeNull());

    await act(async () => { result.current.addCard('1', { title: 'Ok', details: '' }); });
    await waitFor(() => expect(result.current.error).toBeNull());
  });
});
