(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/board.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCard",
    ()=>addCard,
    "deleteCard",
    ()=>deleteCard,
    "findColumnByCardId",
    ()=>findColumnByCardId,
    "moveCard",
    ()=>moveCard,
    "renameColumn",
    ()=>renameColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
;
function findColumnByCardId(board, cardId) {
    return board.columns.find((column)=>column.cardIds.includes(cardId));
}
function addCard(board, columnId, title, details, id = crypto.randomUUID()) {
    const card = {
        id,
        title,
        details
    };
    return {
        cards: {
            ...board.cards,
            [id]: card
        },
        columns: board.columns.map((column)=>column.id === columnId ? {
                ...column,
                cardIds: [
                    ...column.cardIds,
                    id
                ]
            } : column)
    };
}
function deleteCard(board, cardId) {
    const { [cardId]: removed, ...cards } = board.cards;
    void removed;
    return {
        cards,
        columns: board.columns.map((column)=>({
                ...column,
                cardIds: column.cardIds.filter((id)=>id !== cardId)
            }))
    };
}
function renameColumn(board, columnId, title) {
    return {
        ...board,
        columns: board.columns.map((column)=>column.id === columnId ? {
                ...column,
                title
            } : column)
    };
}
function moveCard(board, cardId, toColumnId, toIndex) {
    const fromColumn = findColumnByCardId(board, cardId);
    if (!fromColumn) return board;
    const fromIndex = fromColumn.cardIds.indexOf(cardId);
    if (fromColumn.id === toColumnId) {
        if (fromIndex === toIndex) return board;
        return {
            ...board,
            columns: board.columns.map((column)=>column.id === toColumnId ? {
                    ...column,
                    cardIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayMove"])(column.cardIds, fromIndex, toIndex)
                } : column)
        };
    }
    const columnsWithoutCard = board.columns.map((column)=>column.id === fromColumn.id ? {
            ...column,
            cardIds: column.cardIds.filter((id)=>id !== cardId)
        } : column);
    const targetColumn = columnsWithoutCard.find((column)=>column.id === toColumnId);
    if (!targetColumn) return board;
    const insertIndex = Math.max(0, Math.min(toIndex, targetColumn.cardIds.length));
    return {
        ...board,
        columns: columnsWithoutCard.map((column)=>{
            if (column.id !== toColumnId) return column;
            const cardIds = [
                ...column.cardIds
            ];
            cardIds.splice(insertIndex, 0, cardId);
            return {
                ...column,
                cardIds
            };
        })
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedBoard",
    ()=>seedBoard
]);
const seedBoard = {
    columns: [
        {
            id: "col-backlog",
            title: "Backlog",
            cardIds: [
                "card-1",
                "card-2",
                "card-3"
            ]
        },
        {
            id: "col-progress",
            title: "In Progress",
            cardIds: [
                "card-4",
                "card-5"
            ]
        },
        {
            id: "col-review",
            title: "Review",
            cardIds: [
                "card-6"
            ]
        },
        {
            id: "col-testing",
            title: "Testing",
            cardIds: [
                "card-7",
                "card-8"
            ]
        },
        {
            id: "col-done",
            title: "Done",
            cardIds: [
                "card-9",
                "card-10"
            ]
        }
    ],
    cards: {
        "card-1": {
            id: "card-1",
            title: "Research competitors",
            details: "Review top three Kanban tools and note UX patterns worth adopting."
        },
        "card-2": {
            id: "card-2",
            title: "Define color tokens",
            details: "Map brand palette to CSS variables and Tailwind theme extensions."
        },
        "card-3": {
            id: "card-3",
            title: "Draft wireframes",
            details: "Sketch board layout with five fixed columns and card anatomy."
        },
        "card-4": {
            id: "card-4",
            title: "Build board shell",
            details: "Implement responsive column grid with seed data on first load."
        },
        "card-5": {
            id: "card-5",
            title: "Add card form",
            details: "Inline form with title and details fields per column."
        },
        "card-6": {
            id: "card-6",
            title: "Column rename UX",
            details: "Allow inline editing of column titles without page reload."
        },
        "card-7": {
            id: "card-7",
            title: "Drag and drop",
            details: "Move cards within and across columns with smooth feedback."
        },
        "card-8": {
            id: "card-8",
            title: "Unit test board logic",
            details: "Cover add, delete, rename, and move helpers with Vitest."
        },
        "card-9": {
            id: "card-9",
            title: "Playwright smoke tests",
            details: "Verify core flows end to end in Chromium."
        },
        "card-10": {
            id: "card-10",
            title: "Polish UI",
            details: "Refine spacing, shadows, and hover states for a premium feel."
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AddCardForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddCardForm",
    ()=>AddCardForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AddCardForm({ onAdd, onCancel }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [details, setDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function handleSubmit(event) {
        event.preventDefault();
        const trimmedTitle = title.trim();
        const trimmedDetails = details.trim();
        if (!trimmedTitle || !trimmedDetails) return;
        onAdd(trimmedTitle, trimmedDetails);
        setTitle("");
        setDetails("");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "mt-3 space-y-2 rounded-lg border border-accent-yellow/40 bg-white p-3 shadow-sm",
        onSubmit: handleSubmit,
        "data-testid": "add-card-form",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: title,
                onChange: (event)=>setTitle(event.target.value),
                placeholder: "Card title",
                "aria-label": "Card title",
                className: "w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark-navy outline-none focus:border-blue-primary",
                autoFocus: true
            }, void 0, false, {
                fileName: "[project]/components/AddCardForm.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: details,
                onChange: (event)=>setDetails(event.target.value),
                placeholder: "Card details",
                "aria-label": "Card details",
                rows: 3,
                className: "w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-sm text-dark-navy outline-none focus:border-blue-primary"
            }, void 0, false, {
                fileName: "[project]/components/AddCardForm.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "rounded-md bg-purple-secondary px-3 py-1.5 text-sm font-medium text-white transition hover:opacity-90",
                        children: "Add card"
                    }, void 0, false, {
                        fileName: "[project]/components/AddCardForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "rounded-md px-3 py-1.5 text-sm text-gray-text transition hover:text-dark-navy",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/AddCardForm.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AddCardForm.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AddCardForm.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(AddCardForm, "lFNvhHU2607BSJcYCwHn9i+AlyE=");
_c = AddCardForm;
var _c;
__turbopack_context__.k.register(_c, "AddCardForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/KanbanCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KanbanCard",
    ()=>KanbanCard,
    "KanbanCardOverlay",
    ()=>KanbanCardOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function KanbanCard({ card, onDelete }) {
    _s();
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"])({
        id: card.id
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        ref: setNodeRef,
        style: style,
        "data-testid": `card-${card.id}`,
        className: `group rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition ${isDragging ? "opacity-40 shadow-md ring-2 ring-accent-yellow" : "hover:shadow-md"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "flex-1 cursor-grab text-left active:cursor-grabbing",
                        "aria-label": `Drag card ${card.title}`,
                        ...attributes,
                        ...listeners,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-dark-navy",
                            children: card.title
                        }, void 0, false, {
                            fileName: "[project]/components/KanbanCard.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/KanbanCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onDelete(card.id),
                        "aria-label": `Delete card ${card.title}`,
                        className: "rounded px-1.5 py-0.5 text-xs text-gray-text opacity-0 transition hover:bg-red-50 hover:text-red-600 group-hover:opacity-100",
                        children: "Delete"
                    }, void 0, false, {
                        fileName: "[project]/components/KanbanCard.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/KanbanCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm leading-relaxed text-gray-text",
                children: card.details
            }, void 0, false, {
                fileName: "[project]/components/KanbanCard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/KanbanCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(KanbanCard, "wZ9LrlAdu45h+k5IBlwhyTPFbVs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"]
    ];
});
_c = KanbanCard;
function KanbanCardOverlay({ card }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-lg border-2 border-accent-yellow bg-white p-3 shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-dark-navy",
                children: card.title
            }, void 0, false, {
                fileName: "[project]/components/KanbanCard.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm leading-relaxed text-gray-text",
                children: card.details
            }, void 0, false, {
                fileName: "[project]/components/KanbanCard.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/KanbanCard.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c1 = KanbanCardOverlay;
var _c, _c1;
__turbopack_context__.k.register(_c, "KanbanCard");
__turbopack_context__.k.register(_c1, "KanbanCardOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Column.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Column",
    ()=>Column
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddCardForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AddCardForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KanbanCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/KanbanCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Column({ column, board, onRename, onAddCard, onDeleteCard }) {
    _s();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftTitle, setDraftTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(column.title);
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setNodeRef, isOver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: column.id
    });
    const cards = column.cardIds.map((cardId)=>board.cards[cardId]).filter(Boolean);
    function commitRename() {
        const trimmed = draftTitle.trim();
        if (trimmed) onRename(column.id, trimmed);
        else setDraftTitle(column.title);
        setIsEditing(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex w-72 shrink-0 flex-col rounded-xl border border-blue-primary/20 bg-[#f4f8fb]",
        "data-testid": `column-${column.id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b-2 border-accent-yellow px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-1 flex items-center justify-between gap-2",
                    children: [
                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: draftTitle,
                            onChange: (event)=>setDraftTitle(event.target.value),
                            onBlur: commitRename,
                            onKeyDown: (event)=>{
                                if (event.key === "Enter") commitRename();
                                if (event.key === "Escape") {
                                    setDraftTitle(column.title);
                                    setIsEditing(false);
                                }
                            },
                            "aria-label": "Column title",
                            className: "w-full rounded border border-blue-primary/40 bg-white px-2 py-1 text-sm font-semibold text-dark-navy outline-none",
                            autoFocus: true,
                            "data-testid": `column-title-input-${column.id}`
                        }, void 0, false, {
                            fileName: "[project]/components/Column.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsEditing(true),
                            className: "text-left text-sm font-semibold text-dark-navy transition hover:text-blue-primary",
                            "data-testid": `column-title-${column.id}`,
                            children: column.title
                        }, void 0, false, {
                            fileName: "[project]/components/Column.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full bg-blue-primary/10 px-2 py-0.5 text-xs font-medium text-blue-primary",
                            children: cards.length
                        }, void 0, false, {
                            fileName: "[project]/components/Column.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Column.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Column.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: setNodeRef,
                className: `flex min-h-48 flex-1 flex-col gap-3 p-3 transition ${isOver ? "rounded-lg bg-blue-primary/5 ring-2 ring-blue-primary/30" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortableContext"], {
                        items: column.cardIds,
                        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                        children: cards.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-8 text-center text-sm text-gray-text",
                            children: "No cards yet"
                        }, void 0, false, {
                            fileName: "[project]/components/Column.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this) : cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KanbanCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KanbanCard"], {
                                card: card,
                                onDelete: onDeleteCard
                            }, card.id, false, {
                                fileName: "[project]/components/Column.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    showAddForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddCardForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddCardForm"], {
                        onAdd: (title, details)=>{
                            onAddCard(column.id, title, details);
                            setShowAddForm(false);
                        },
                        onCancel: ()=>setShowAddForm(false)
                    }, void 0, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowAddForm(true),
                        className: "mt-auto rounded-md border border-dashed border-purple-secondary/40 px-3 py-2 text-sm font-medium text-purple-secondary transition hover:border-purple-secondary hover:bg-purple-secondary/5",
                        "data-testid": `add-card-button-${column.id}`,
                        children: "Add card"
                    }, void 0, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Column.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Column.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Column, "gDk/OfWDKixUvLO5yx5o+xRUslM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"]
    ];
});
_c = Column;
var _c;
__turbopack_context__.k.register(_c, "Column");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Board.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Board",
    ()=>Board
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/board.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Column$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Column.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KanbanCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/KanbanCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Board() {
    _s();
    const [board, setBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Board.useState": ()=>structuredClone(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedBoard"])
    }["Board.useState"]);
    const [activeCardId, setActiveCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 8
        }
    }));
    function handleDragStart(event) {
        setActiveCardId(String(event.active.id));
    }
    function handleDragEnd(event) {
        setActiveCardId(null);
        const { active, over } = event;
        if (!over) return;
        const cardId = String(active.id);
        const overId = String(over.id);
        const activeColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findColumnByCardId"])(board, cardId);
        if (!activeColumn) return;
        const overColumn = board.columns.find((column)=>column.id === overId) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findColumnByCardId"])(board, overId);
        if (!overColumn) return;
        const toIndex = overId === overColumn.id ? overColumn.cardIds.length : overColumn.cardIds.indexOf(overId);
        if (toIndex === -1) return;
        setBoard((current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveCard"])(current, cardId, overColumn.id, toIndex));
    }
    const activeCard = activeCardId ? board.cards[activeCardId] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-[#eef3f8]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-accent-yellow/30 bg-white px-6 py-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-medium uppercase tracking-[0.2em] text-blue-primary",
                        children: "Project Board"
                    }, void 0, false, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-1 text-2xl font-bold text-dark-navy",
                        children: "Kanban MVP"
                    }, void 0, false, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-gray-text",
                        children: "Drag cards between columns, rename columns, and manage tasks in one place."
                    }, void 0, false, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Board.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"], {
                sensors: sensors,
                collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestCorners"],
                onDragStart: handleDragStart,
                onDragEnd: handleDragEnd,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-x-auto p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-h-full gap-4",
                            "data-testid": "kanban-board",
                            children: board.columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Column$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
                                    column: column,
                                    board: board,
                                    onRename: (columnId, title)=>setBoard((current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameColumn"])(current, columnId, title)),
                                    onAddCard: (columnId, title, details)=>setBoard((current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addCard"])(current, columnId, title, details)),
                                    onDeleteCard: (cardId)=>setBoard((current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$board$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCard"])(current, cardId))
                                }, column.id, false, {
                                    fileName: "[project]/components/Board.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Board.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragOverlay"], {
                        children: activeCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KanbanCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KanbanCardOverlay"], {
                            card: activeCard
                        }, void 0, false, {
                            fileName: "[project]/components/Board.tsx",
                            lineNumber: 110,
                            columnNumber: 25
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Board.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Board.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Board, "sDAs9pBeSsCtZ9BUsAbio7c1Vz8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"]
    ];
});
_c = Board;
var _c;
__turbopack_context__.k.register(_c, "Board");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Board.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Board.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_1h5wxdp._.js.map