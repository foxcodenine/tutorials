module.exports = [
"[project]/lib/initialData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/hooks/useKanban.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKanban",
    ()=>useKanban
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/initialData.ts [app-ssr] (ecmascript)");
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
    const [columns, setColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialColumns"]);
    const renameColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((columnId, name)=>{
        setColumns((cols)=>cols.map((c)=>c.id === columnId ? {
                    ...c,
                    name
                } : c));
    }, []);
    const addCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((columnId, card)=>{
        const newCard = {
            ...card,
            id: `card-${++nextId}`
        };
        setColumns((cols)=>cols.map((c)=>c.id === columnId ? {
                    ...c,
                    cards: [
                        ...c.cards,
                        newCard
                    ]
                } : c));
    }, []);
    const deleteCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((columnId, cardId)=>{
        setColumns((cols)=>cols.map((c)=>c.id === columnId ? {
                    ...c,
                    cards: c.cards.filter((card)=>card.id !== cardId)
                } : c));
    }, []);
    const moveCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cardId, fromColumnId, toColumnId, toIndex)=>{
        setColumns((cols)=>{
            const fromCol = cols.find((c)=>c.id === fromColumnId);
            const card = fromCol?.cards.find((c)=>c.id === cardId);
            if (!card) return cols;
            return cols.map((col)=>{
                if (col.id === fromColumnId && col.id === toColumnId) {
                    const activeIdx = col.cards.findIndex((c)=>c.id === cardId);
                    return {
                        ...col,
                        cards: arrayMove(col.cards, activeIdx, toIndex)
                    };
                }
                if (col.id === fromColumnId) {
                    return {
                        ...col,
                        cards: col.cards.filter((c)=>c.id !== cardId)
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
            });
        });
    }, []);
    return {
        columns,
        renameColumn,
        addCard,
        deleteCard,
        moveCard
    };
}
}),
"[project]/components/KanbanCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KanbanCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function KanbanCard({ card, colId, cardIndex, onDelete, onDrop }) {
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pr-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-[#032147] leading-tight",
                        children: card.title
                    }, void 0, false, {
                        fileName: "[project]/components/KanbanCard.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    card.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/components/AddCardForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddCardForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function AddCardForm({ onSubmit, onCancel }) {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [details, setDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    function handleSubmit(e) {
        e.preventDefault();
        const trimmed = title.trim();
        if (!trimmed) return;
        onSubmit({
            title: trimmed,
            details: details.trim()
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "bg-white rounded-lg border border-[#209dd7]/40 shadow-sm p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mt-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: !title.trim(),
                        className: "px-3 py-1.5 bg-[#753991] text-white text-xs font-semibold rounded hover:bg-[#5c2d72] disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
                        children: "Add card"
                    }, void 0, false, {
                        fileName: "[project]/components/AddCardForm.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/components/Column.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Column
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KanbanCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/KanbanCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddCardForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AddCardForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Column({ column, onRename, onAddCard, onDeleteCard, moveCard }) {
    const [isRenaming, setIsRenaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(column.name);
    const [isAddingCard, setIsAddingCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-72 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-3 px-1",
                children: [
                    isRenaming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    column.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KanbanCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pt-1",
                        children: isAddingCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddCardForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onSubmit: (card)=>{
                                onAddCard(card);
                                setIsAddingCard(false);
                            },
                            onCancel: ()=>setIsAddingCard(false)
                        }, void 0, false, {
                            fileName: "[project]/components/Column.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsAddingCard(true),
                            className: "w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs text-[#888888] hover:text-[#753991] hover:bg-white/80 transition-all duration-150 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/Board.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Board
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKanban$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useKanban.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Column.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Board() {
    const { columns, renameColumn, addCard, deleteCard, moveCard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKanban$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKanban"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-5 p-6 min-h-full items-start",
        children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_1ae9-_u._.js.map