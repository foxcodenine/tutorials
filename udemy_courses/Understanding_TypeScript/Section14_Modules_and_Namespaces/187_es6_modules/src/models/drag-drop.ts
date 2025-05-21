
// ============================================================
// SECTION – Drag & Drop Interfaces
// ============================================================

// Interface to be implemented by draggable elements (like <li> items)
export interface Draggable {
    // Called when drag operation starts
    dragStartHandler(event: DragEvent): void;

    // Called when drag operation ends (drop or cancel)
    dragEndHandler(event: DragEvent): void;
}

// Interface to be implemented by valid drop targets (like <ul> containers)
export interface DragTarget {
    // Signals to the browser that the item can be dropped here
    // (must call preventDefault on the event to allow dropping)
    dragOverHandler(event: DragEvent): void;

    // Reacts when the draggable item is actually dropped
    dropHandler(event: DragEvent): void;

    // Called when a dragged item leaves the target area (used for visual feedback)
    dragLeaveHandler(event: DragEvent): void;
}
