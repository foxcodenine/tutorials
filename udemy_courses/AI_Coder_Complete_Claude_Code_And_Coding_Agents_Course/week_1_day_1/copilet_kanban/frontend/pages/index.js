import { useState } from 'react'

const initial = [
  { id: 'col-1', title: 'Backlog', cards: [{ id: 'c-1', title: 'Welcome card', details: 'This is a demo card.' }] },
  { id: 'col-2', title: 'To Do', cards: [] },
  { id: 'col-3', title: 'In Progress', cards: [] },
  { id: 'col-4', title: 'Review', cards: [] },
  { id: 'col-5', title: 'Done', cards: [] }
]

export default function Home() {
  const [cols, setCols] = useState(initial)
  const [dragging, setDragging] = useState(null)

  function addCard(colId) {
    openModal({ mode: 'add', colId })
  }

  function deleteCard(colId, cardId) {
    setCols(cols.map(c => c.id === colId ? { ...c, cards: c.cards.filter(card => card.id !== cardId) } : c))
  }

  function editCard(colId, cardId) {
    const col = cols.find(c => c.id === colId)
    if (!col) return
    const card = col.cards.find(cd => cd.id === cardId)
    if (!card) return
    openModal({ mode: 'edit', colId, cardId, title: card.title, details: card.details || '' })
  }

  // Modal state and helpers
  const [modal, setModal] = useState({ open: false, mode: null, colId: null, cardId: null, title: '', details: '' })

  function openModal({ mode, colId, cardId = null, title = '', details = '' }) {
    setModal({ open: true, mode, colId, cardId, title, details })
  }

  function closeModal() {
    setModal({ open: false, mode: null, colId: null, cardId: null, title: '', details: '' })
  }

  function saveModal() {
    const { mode, colId, cardId, title, details } = modal
    if (!title || !colId) return
    if (mode === 'add') {
      setCols(cols.map(c => c.id === colId ? { ...c, cards: [...c.cards, { id: Date.now().toString(), title, details }] } : c))
    } else if (mode === 'edit') {
      setCols(cols.map(c => c.id === colId ? { ...c, cards: c.cards.map(cd => cd.id === cardId ? { ...cd, title, details } : cd) } : c))
    }
    closeModal()
  }

  function renameColumn(colId) {
    const title = prompt('Column name')
    if (!title) return
    setCols(cols.map(c => c.id === colId ? { ...c, title } : c))
  }

  function onDragStart(e, colId, card) {
    setDragging({ from: colId, card })
    e.dataTransfer.effectAllowed = 'move'
  }

  function onDrop(e, toColId) {
    e.preventDefault()
    if (!dragging) return
    const { from, card } = dragging
    if (from === toColId) return setDragging(null)
    setCols(cols => {
      const src = cols.find(c => c.id === from)
      const dst = cols.find(c => c.id === toColId)
      if (!src || !dst) return cols
      const newSrcCards = src.cards.filter(cc => cc.id !== card.id)
      const newDstCards = [...dst.cards, card]
      return cols.map(c => c.id === from ? { ...c, cards: newSrcCards } : c.id === toColId ? { ...c, cards: newDstCards } : c)
    })
    setDragging(null)
  }

  // handle dropping onto a specific card to reorder within a column
  function onDropOnCard(e, toColId, targetCardId) {
    e.preventDefault()
    if (!dragging) return
    const { from, card } = dragging
    // same column: reorder
    if (from === toColId) {
      setCols(cols => {
        const col = cols.find(c => c.id === toColId)
        if (!col) return cols
        const items = col.cards.filter(ca => ca.id !== card.id)
        const targetIndex = items.findIndex(ca => ca.id === targetCardId)
        if (targetIndex === -1) return cols
        // determine drop position (before/after) using cursor Y vs target midpoint
        const el = document.getElementById(`card-${targetCardId}`)
        let insertIndex = targetIndex
        if (el && e && e.clientY) {
          const rect = el.getBoundingClientRect()
          const mid = rect.top + rect.height / 2
          if (e.clientY > mid) insertIndex = targetIndex + 1
        }
        const newCards = [...items.slice(0, insertIndex), card, ...items.slice(insertIndex)]
        return cols.map(c => c.id === toColId ? { ...c, cards: newCards } : c)
      })
    } else {
      // moving from another column: remove from source and insert before target
      setCols(cols => {
        const src = cols.find(c => c.id === from)
        const dst = cols.find(c => c.id === toColId)
        if (!src || !dst) return cols
        const moving = src.cards.find(cd => cd.id === card.id)
        if (!moving) return cols
        const newSrcCards = src.cards.filter(cd => cd.id !== card.id)
        const dstItems = dst.cards
        const targetIndex = dstItems.findIndex(ca => ca.id === targetCardId)
        if (targetIndex === -1) return cols
        // determine before/after using cursor position
        const el = document.getElementById(`card-${targetCardId}`)
        let insertIndex = targetIndex
        if (el && e && e.clientY) {
          const rect = el.getBoundingClientRect()
          const mid = rect.top + rect.height / 2
          if (e.clientY > mid) insertIndex = targetIndex + 1
        }
        const newDstCards = [...dstItems.slice(0, insertIndex), moving, ...dstItems.slice(insertIndex)]
        return cols.map(c => c.id === from ? { ...c, cards: newSrcCards } : c.id === toColId ? { ...c, cards: newDstCards } : c)
      })
    }
    setDragging(null)
  }

  return (
    <div className="page">
      <header className="header p-6 border-b bg-white">
        <h1 className="text-2xl font-bold">Kanban — Single Board (Demo)</h1>
      </header>
      <main className="board p-6 flex gap-4 overflow-auto">
        {cols.map(col => (
          <section key={col.id} className="column bg-gray-50 rounded p-3 min-w-[220px] max-w-[320px]" onDragOver={e => e.preventDefault()} onDrop={e => onDrop(e, col.id)}>
            <div className="col-header flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-800">{col.title}</h2>
                <div className="col-actions flex gap-2">
                  <button className="text-xs text-gray-600" onClick={() => renameColumn(col.id)}>Rename</button>
                  <button className="text-xs text-blue-600" onClick={() => addCard(col.id)}>+ Card</button>
                </div>
            </div>
            <div className="cards flex flex-col gap-2">
                {col.cards.map(card => (
                <article id={`card-${card.id}`} key={card.id} className="card bg-white rounded p-3 shadow-sm flex flex-col" draggable onDragStart={e => onDragStart(e, col.id, card)} onDragOver={e => e.preventDefault()} onDrop={e => onDropOnCard(e, col.id, card.id)}>
                  <div>
                    <div className="card-title font-medium">{card.title}</div>
                    {card.details ? <div className="text-xs text-gray-500 mt-1">{card.details}</div> : null}
                  </div>
                  <div className="card-actions mt-3 flex gap-2 self-start">
                    <button className="text-xs text-gray-600" onClick={() => editCard(col.id, card.id)}>Edit</button>
                    <button className="text-xs text-red-500" onClick={() => deleteCard(col.id, card.id)}>Delete</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Modal modal={modal} setModal={setModal} save={saveModal} close={closeModal} />
    </div>
  )
}

// Modal JSX rendered at root of page
function Modal({ modal, setModal, save, close }) {
  if (!modal.open) return null
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[480px]">
        <h3 className="text-lg font-semibold mb-4">{modal.mode === 'add' ? 'Add Card' : 'Edit Card'}</h3>
        <label className="block text-sm text-gray-600">Card title</label>
        <input name="cardTitle" value={modal.title} onChange={e => setModal(s => ({ ...s, title: e.target.value }))} className="w-full border rounded px-3 py-2 mt-1 mb-3" />
        <label className="block text-sm text-gray-600">Details</label>
        <textarea name="cardDetails" value={modal.details} onChange={e => setModal(s => ({ ...s, details: e.target.value }))} className="w-full border rounded px-3 py-2 mt-1 mb-4" />
        <div className="flex justify-end gap-3">
          <button onClick={close} className="px-4 py-2 rounded border">Cancel</button>
          <button onClick={save} className="px-4 py-2 rounded bg-blue-600 text-white">Save</button>
        </div>
      </div>
    </div>
  )
}

// attach modal component to page via default export wrapper
// (we place it here to keep single-file scaffold simple)
