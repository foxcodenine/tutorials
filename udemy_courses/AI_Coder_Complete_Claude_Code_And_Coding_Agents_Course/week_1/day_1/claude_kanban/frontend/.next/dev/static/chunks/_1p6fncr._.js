(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/initialData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialColumns",
    ()=>initialColumns
]);
const initialColumns = [
    {
        id: 'col-1',
        name: 'Backlog',
        cards: [
            {
                id: 'card-1',
                title: 'User authentication',
                details: 'Implement OAuth2 login with Google and GitHub providers.'
            },
            {
                id: 'card-2',
                title: 'Dark mode support',
                details: 'Add a theme toggle that respects system preferences.'
            },
            {
                id: 'card-3',
                title: 'Email notifications',
                details: 'Send digests when cards are moved or new ones are added.'
            }
        ]
    },
    {
        id: 'col-2',
        name: 'To Do',
        cards: [
            {
                id: 'card-4',
                title: 'Responsive layout',
                details: 'Ensure the board works seamlessly on tablets and mobile.'
            },
            {
                id: 'card-5',
                title: 'API rate limiting',
                details: 'Protect endpoints with per-user throttling.'
            }
        ]
    },
    {
        id: 'col-3',
        name: 'In Progress',
        cards: [
            {
                id: 'card-6',
                title: 'Drag and drop',
                details: 'Integrate dnd-kit for smooth card reordering across columns.'
            },
            {
                id: 'card-7',
                title: 'Design system',
                details: 'Establish typography scale, color tokens, and spacing rules.'
            }
        ]
    },
    {
        id: 'col-4',
        name: 'Review',
        cards: [
            {
                id: 'card-8',
                title: 'Unit test suite',
                details: 'Cover core business logic with Jest and Testing Library.'
            }
        ]
    },
    {
        id: 'col-5',
        name: 'Done',
        cards: [
            {
                id: 'card-9',
                title: 'Project scaffolding',
                details: 'Next.js app created with TypeScript, Tailwind, and linting.'
            },
            {
                id: 'card-10',
                title: 'Color palette',
                details: 'Brand colors defined and applied across all components.'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useKanban.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKanban",
    ()=>useKanban
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/initialData.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
let nextId = 100;
function arrayMove(arr, from, to) {
    const result = [
        ...arr
    ];
    result.splice(to, 0, result.splice(from, 1)[0]);
    return result;
}
function useKanban() {
    _s();
    const [columns, setColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialColumns"]);
    const renameColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKanban.useCallback[renameColumn]": (columnId, name)=>{
            setColumns({
                "useKanban.useCallback[renameColumn]": (cols)=>cols.map({
                        "useKanban.useCallback[renameColumn]": (c)=>c.id === columnId ? {
                                ...c,
                                name
                            } : c
                    }["useKanban.useCallback[renameColumn]"])
            }["useKanban.useCallback[renameColumn]"]);
        }
    }["useKanban.useCallback[renameColumn]"], []);
    const addCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKanban.useCallback[addCard]": (columnId, card)=>{
            const newCard = {
                ...card,
                id: `card-${++nextId}`
            };
            setColumns({
                "useKanban.useCallback[addCard]": (cols)=>cols.map({
                        "useKanban.useCallback[addCard]": (c)=>c.id === columnId ? {
                                ...c,
                                cards: [
                                    ...c.cards,
                                    newCard
                                ]
                            } : c
                    }["useKanban.useCallback[addCard]"])
            }["useKanban.useCallback[addCard]"]);
        }
    }["useKanban.useCallback[addCard]"], []);
    const deleteCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKanban.useCallback[deleteCard]": (columnId, cardId)=>{
            setColumns({
                "useKanban.useCallback[deleteCard]": (cols)=>cols.map({
                        "useKanban.useCallback[deleteCard]": (c)=>c.id === columnId ? {
                                ...c,
                                cards: c.cards.filter({
                                    "useKanban.useCallback[deleteCard]": (card)=>card.id !== cardId
                                }["useKanban.useCallback[deleteCard]"])
                            } : c
                    }["useKanban.useCallback[deleteCard]"])
            }["useKanban.useCallback[deleteCard]"]);
        }
    }["useKanban.useCallback[deleteCard]"], []);
    const moveCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKanban.useCallback[moveCard]": (cardId, fromColumnId, toColumnId, toIndex)=>{
            setColumns({
                "useKanban.useCallback[moveCard]": (cols)=>{
                    const fromCol = cols.find({
                        "useKanban.useCallback[moveCard].fromCol": (c)=>c.id === fromColumnId
                    }["useKanban.useCallback[moveCard].fromCol"]);
                    const card = fromCol?.cards.find({
                        "useKanban.useCallback[moveCard]": (c)=>c.id === cardId
                    }["useKanban.useCallback[moveCard]"]);
                    if (!card) return cols;
                    return cols.map({
                        "useKanban.useCallback[moveCard]": (col)=>{
                            if (col.id === fromColumnId && col.id === toColumnId) {
                                const activeIdx = col.cards.findIndex({
                                    "useKanban.useCallback[moveCard].activeIdx": (c)=>c.id === cardId
                                }["useKanban.useCallback[moveCard].activeIdx"]);
                                return {
                                    ...col,
                                    cards: arrayMove(col.cards, activeIdx, toIndex)
                                };
                            }
                            if (col.id === fromColumnId) {
                                return {
                                    ...col,
                                    cards: col.cards.filter({
                                        "useKanban.useCallback[moveCard]": (c)=>c.id !== cardId
                                    }["useKanban.useCallback[moveCard]"])
                                };
                            }
                            if (col.id === toColumnId) {
                                const next = [
                                    ...col.cards
                                ];
                                next.splice(toIndex, 0, card);
                                return {
                                    ...col,
                                    cards: next
                                };
                            }
                            return col;
                        }
                    }["useKanban.useCallback[moveCard]"]);
                }
            }["useKanban.useCallback[moveCard]"]);
        }
    }["useKanban.useCallback[moveCard]"], []);
    return {
        columns,
        renameColumn,
        addCard,
        deleteCard,
        moveCard
    };
}
_s(useKanban, "4eWJJsot53ekHivp+NGY875xJ4U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/KanbanCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KanbanCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function KanbanCard({ card, colId, cardIndex, onDelete, onDrop }) {
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        draggable: true,
        onDragStart: (e)=>{
            e.dataTransfer.setData('text/plain', `${card.id}:${colId}`);
            e.dataTransfer.effectAllowed = 'move';
            setIsDragging(true);
        },
        onDragEnd: ()=>setIsDragging(false),
        onDragOver: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'move';
        },
        onDrop: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            onDrop(e, cardIndex);
        },
        className: `bg-white rounded-lg border border-gray-100 p-3 cursor-grab active:cursor-grabbing group relative select-none transition-all duration-150 ${isDragging ? 'opacity-40 shadow-none' : 'shadow-sm hover:shadow-md hover:border-[#ecad0a]/40'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pr-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-[#032147] leading-tight",
                        children: card.title
                    }, void 0, false, {
                        fileName: "[project]/components/KanbanCard.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    card.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[#888888] mt-1 leading-relaxed line-clamp-2",
                        children: card.details
                    }, void 0, false, {
                        fileName: "[project]/components/KanbanCard.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/KanbanCard.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onDelete();
                },
                className: "absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all text-base leading-none",
                "aria-label": "Delete card",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/components/KanbanCard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/KanbanCard.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(KanbanCard, "VIDKbg2yfT0CLfTnlFHLO2Fjmb8=");
_c = KanbanCard;
var _c;
__turbopack_context__.k.register(_c, "KanbanCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AddCardForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddCardForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AddCardForm({ onSubmit, onCancel }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [details, setDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    function handleSubmit(e) {
        e.preventDefault();
        const trimmed = title.trim();
        if (!trimmed) return;
        onSubmit({
            title: trimmed,
            details: details.trim()
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "bg-white rounded-lg border border-[#209dd7]/40 shadow-sm p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                autoFocus: true,
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                onKeyDown: (e)=>e.key === 'Escape' && onCancel(),
                placeholder: "Card title",
                className: "w-full text-sm font-semibold text-[#032147] outline-none border-b border-gray-100 pb-1.5 mb-2 placeholder:text-gray-300"
            }, void 0, false, {
                fileName: "[project]/components/AddCardForm.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: details,
                onChange: (e)=>setDetails(e.target.value),
                placeholder: "Details (optional)",
                rows: 2,
                className: "w-full text-xs text-[#888888] outline-none resize-none placeholder:text-gray-300 leading-relaxed"
            }, void 0, false, {
                fileName: "[project]/components/AddCardForm.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mt-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: !title.trim(),
                        className: "px-3 py-1.5 bg-[#753991] text-white text-xs font-semibold rounded hover:bg-[#5c2d72] disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
                        children: "Add card"
                    }, void 0, false, {
                        fileName: "[project]/components/AddCardForm.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "px-2 py-1.5 text-[#888888] text-xs hover:text-[#032147] transition-colors",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/AddCardForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AddCardForm.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AddCardForm.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(AddCardForm, "aFpDzWUn78TKJAUOJzt3itR2fwY=");
_c = AddCardForm;
var _c;
__turbopack_context__.k.register(_c, "AddCardForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Column.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Column
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KanbanCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/KanbanCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddCardForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AddCardForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Column({ column, onRename, onAddCard, onDeleteCard, moveCard }) {
    _s();
    const [isRenaming, setIsRenaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(column.name);
    const [isAddingCard, setIsAddingCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function commitRename() {
        const trimmed = editName.trim();
        if (trimmed && trimmed !== column.name) onRename(trimmed);
        else setEditName(column.name);
        setIsRenaming(false);
    }
    function handleDrop(e, toIndex) {
        e.preventDefault();
        const raw = e.dataTransfer.getData('text/plain');
        if (!raw) return;
        const [cardId, fromColId] = raw.split(':');
        if (!cardId || !fromColId) return;
        moveCard(cardId, fromColId, column.id, toIndex);
        setIsDragOver(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-72 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-3 px-1",
                children: [
                    isRenaming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        autoFocus: true,
                        value: editName,
                        onChange: (e)=>setEditName(e.target.value),
                        onBlur: commitRename,
                        onKeyDown: (e)=>{
                            if (e.key === 'Enter') commitRename();
                            if (e.key === 'Escape') {
                                setEditName(column.name);
                                setIsRenaming(false);
                            }
                        },
                        className: "flex-1 text-sm font-bold text-[#032147] bg-white border border-[#209dd7] rounded px-2 py-1 outline-none"
                    }, void 0, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setEditName(column.name);
                            setIsRenaming(true);
                        },
                        className: "flex-1 text-sm font-bold text-[#032147] text-left hover:text-[#209dd7] transition-colors truncate",
                        title: "Click to rename",
                        children: column.name
                    }, void 0, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 text-xs text-[#888888] bg-white border border-gray-200 rounded-full px-2 py-0.5 font-medium tabular-nums",
                        children: column.cards.length
                    }, void 0, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Column.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragOver: (e)=>{
                    e.preventDefault();
                    setIsDragOver(true);
                },
                onDragLeave: (e)=>{
                    // only clear if leaving the column entirely (not entering a child)
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                        setIsDragOver(false);
                    }
                },
                onDrop: (e)=>handleDrop(e, column.cards.length),
                className: `flex flex-col gap-2 flex-1 rounded-xl p-2 min-h-24 transition-colors duration-150 ${isDragOver ? 'bg-[#209dd7]/10 ring-2 ring-[#209dd7]/30' : 'bg-gray-100/70'}`,
                children: [
                    column.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KanbanCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            card: card,
                            colId: column.id,
                            cardIndex: index,
                            onDelete: ()=>onDeleteCard(card.id),
                            onDrop: (e, toIndex)=>handleDrop(e, toIndex)
                        }, card.id, false, {
                            fileName: "[project]/components/Column.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pt-1",
                        children: isAddingCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddCardForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onSubmit: (card)=>{
                                onAddCard(card);
                                setIsAddingCard(false);
                            },
                            onCancel: ()=>setIsAddingCard(false)
                        }, void 0, false, {
                            fileName: "[project]/components/Column.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsAddingCard(true),
                            className: "w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs text-[#888888] hover:text-[#753991] hover:bg-white/80 transition-all duration-150 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base leading-none font-light",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/Column.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                " Add card"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Column.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Column.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Column.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Column, "O+EqMbmmvWJ2HmzwdOpYYb+WSR4=");
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
    "default",
    ()=>Board
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKanban$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useKanban.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Column$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Column.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Board() {
    _s();
    const { columns, renameColumn, addCard, deleteCard, moveCard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKanban$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKanban"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-5 p-6 min-h-full items-start",
        children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Column$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                column: col,
                onRename: (name)=>renameColumn(col.id, name),
                onAddCard: (card)=>addCard(col.id, card),
                onDeleteCard: (cardId)=>deleteCard(col.id, cardId),
                moveCard: moveCard
            }, col.id, false, {
                fileName: "[project]/components/Board.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Board.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Board, "e7OCNopPogXz9d0qtN8/qg4JFX4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKanban$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKanban"]
    ];
});
_c = Board;
var _c;
__turbopack_context__.k.register(_c, "Board");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_1p6fncr._.js.map