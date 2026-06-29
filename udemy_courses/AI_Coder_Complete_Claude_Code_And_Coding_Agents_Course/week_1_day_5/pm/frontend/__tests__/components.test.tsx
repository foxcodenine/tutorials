import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// --- AddCardForm ---
import AddCardForm from '@/components/AddCardForm';

describe('AddCardForm', () => {
  it('renders title input and submit button', () => {
    render(<AddCardForm onSubmit={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByPlaceholderText('Card title')).toBeTruthy();
    expect(screen.getByRole('button', { name: /add card/i })).toBeTruthy();
  });

  it('submit button is disabled when title is empty', () => {
    render(<AddCardForm onSubmit={vi.fn()} onCancel={vi.fn()} />);
    const btn = screen.getByRole('button', { name: /add card/i }) as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
  });

  it('calls onSubmit with title and details when submitted', async () => {
    const onSubmit = vi.fn();
    render(<AddCardForm onSubmit={onSubmit} onCancel={vi.fn()} />);
    await userEvent.type(screen.getByPlaceholderText('Card title'), 'My Card');
    await userEvent.type(screen.getByPlaceholderText('Details (optional)'), 'Some details');
    fireEvent.submit(screen.getByRole('button', { name: /add card/i }).closest('form')!);
    expect(onSubmit).toHaveBeenCalledWith({ title: 'My Card', details: 'Some details' });
  });

  it('calls onCancel when Escape is pressed in title input', async () => {
    const onCancel = vi.fn();
    render(<AddCardForm onSubmit={vi.fn()} onCancel={onCancel} />);
    await userEvent.type(screen.getByPlaceholderText('Card title'), '{Escape}');
    expect(onCancel).toHaveBeenCalled();
  });

  it('trims whitespace-only title and does not submit', async () => {
    const onSubmit = vi.fn();
    render(<AddCardForm onSubmit={onSubmit} onCancel={vi.fn()} />);
    await userEvent.type(screen.getByPlaceholderText('Card title'), '   ');
    fireEvent.submit(screen.getByRole('button', { name: /add card/i }).closest('form')!);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});

// --- Column ---
import Column from '@/components/Column';
import type { Column as ColumnType } from '@/lib/types';

const sampleColumn: ColumnType = {
  id: 'col-1',
  name: 'Backlog',
  cards: [
    { id: 'c1', title: 'Task A', details: 'Details A' },
    { id: 'c2', title: 'Task B', details: '' },
  ],
};

describe('Column', () => {
  it('renders the column name', () => {
    render(
      <Column
        column={sampleColumn}
        onRename={vi.fn()}
        onAddCard={vi.fn()}
        onDeleteCard={vi.fn()}
        moveCard={vi.fn()}
      />
    );
    expect(screen.getByText('Backlog')).toBeTruthy();
  });

  it('renders all cards', () => {
    render(
      <Column
        column={sampleColumn}
        onRename={vi.fn()}
        onAddCard={vi.fn()}
        onDeleteCard={vi.fn()}
        moveCard={vi.fn()}
      />
    );
    expect(screen.getByText('Task A')).toBeTruthy();
    expect(screen.getByText('Task B')).toBeTruthy();
  });

  it('shows card count badge', () => {
    render(
      <Column
        column={sampleColumn}
        onRename={vi.fn()}
        onAddCard={vi.fn()}
        onDeleteCard={vi.fn()}
        moveCard={vi.fn()}
      />
    );
    expect(screen.getByText('2')).toBeTruthy();
  });

  it('shows rename input on column name click', async () => {
    render(
      <Column
        column={sampleColumn}
        onRename={vi.fn()}
        onAddCard={vi.fn()}
        onDeleteCard={vi.fn()}
        moveCard={vi.fn()}
      />
    );
    await userEvent.click(screen.getByText('Backlog'));
    expect(screen.getByDisplayValue('Backlog')).toBeTruthy();
  });

  it('calls onRename with new name on blur', async () => {
    const onRename = vi.fn();
    render(
      <Column
        column={sampleColumn}
        onRename={onRename}
        onAddCard={vi.fn()}
        onDeleteCard={vi.fn()}
        moveCard={vi.fn()}
      />
    );
    await userEvent.click(screen.getByText('Backlog'));
    const input = screen.getByDisplayValue('Backlog');
    await userEvent.clear(input);
    await userEvent.type(input, 'Sprint 1');
    fireEvent.blur(input);
    expect(onRename).toHaveBeenCalledWith('Sprint 1');
  });

  it('shows add card form when "+ Add card" is clicked', async () => {
    render(
      <Column
        column={sampleColumn}
        onRename={vi.fn()}
        onAddCard={vi.fn()}
        onDeleteCard={vi.fn()}
        moveCard={vi.fn()}
      />
    );
    await userEvent.click(screen.getByText(/add card/i));
    expect(screen.getByPlaceholderText('Card title')).toBeTruthy();
  });

  it('has correct data-testid', () => {
    const { container } = render(
      <Column
        column={sampleColumn}
        onRename={vi.fn()}
        onAddCard={vi.fn()}
        onDeleteCard={vi.fn()}
        moveCard={vi.fn()}
      />
    );
    expect(container.querySelector('[data-testid="column-col-1"]')).toBeTruthy();
  });
});

// --- Board (mocked useKanban) ---
import Board from '@/components/Board';

vi.mock('@/hooks/useKanban', () => ({
  useKanban: () => ({
    columns: [
      { id: 'col-1', name: 'Backlog', cards: [{ id: 'c1', title: 'Task A', details: '' }] },
      { id: 'col-2', name: 'In Progress', cards: [] },
    ],
    loading: false,
    error: null,
    renameColumn: vi.fn(),
    addCard: vi.fn(),
    deleteCard: vi.fn(),
    moveCard: vi.fn(),
    refreshBoard: vi.fn(),
  }),
}));

describe('Board', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders all columns', () => {
    render(<Board token="tok" onLogout={vi.fn()} />);
    expect(screen.getByText('Backlog')).toBeTruthy();
    expect(screen.getByText('In Progress')).toBeTruthy();
  });

  it('renders cards inside their column', () => {
    render(<Board token="tok" onLogout={vi.fn()} />);
    expect(screen.getByText('Task A')).toBeTruthy();
  });

  it('renders the Open AI toggle button', () => {
    render(<Board token="tok" onLogout={vi.fn()} />);
    expect(screen.getByRole('button', { name: /open ai/i })).toBeTruthy();
  });

  it('toggles ChatSidebar open on AI button click', async () => {
    render(<Board token="tok" onLogout={vi.fn()} />);
    const btn = screen.getByRole('button', { name: /open ai/i });
    await userEvent.click(btn);
    expect(screen.getByTestId('chat-sidebar')).toBeTruthy();
    expect(screen.getByRole('button', { name: /close ai/i })).toBeTruthy();
  });

  it('closes ChatSidebar when Close AI is clicked', async () => {
    render(<Board token="tok" onLogout={vi.fn()} />);
    await userEvent.click(screen.getByRole('button', { name: /open ai/i }));
    await userEvent.click(screen.getByRole('button', { name: /close ai/i }));
    expect(screen.queryByTestId('chat-sidebar')).toBeNull();
  });
});
