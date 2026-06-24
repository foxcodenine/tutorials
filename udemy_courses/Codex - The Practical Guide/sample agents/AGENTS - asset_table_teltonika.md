# AGENTS.md - Instructions for Codex / AI Agent

You are helping build a ThingsBoard **Assets Table** widget by adapting an existing Device/FOTA table component.

The user is under pressure and needs small, safe progress. Do not over-engineer. Do not rewrite the full widget unless required.

---

## Main objective

Create a new Assets table widget that follows the same standard as Steve's existing table.

For the current first step, implement only:

- Asset Name
- Device ID

Do not implement the full final requirement yet.

This phase is mainly a reduction of the copied Device/FOTA widget, not a redesign. Keep the proven generic table pattern, but remove the FOTA-specific behavior and extra columns that are out of scope.

---

## Context files

Use these files as reference only:

```text
CONTEXT/device_table.js
CONTEXT/thingsboard_widget_device_table.json
CONTEXT/device_table_screenshote.png
CONTEXT/device_table_data_screenshote.png
```

The existing component is a ThingsBoard Markdown/HTML Card `markdownTextFunction` that builds a complex Device/FOTA table.

---

## Prompt Log

Keep [PROMPT_LOG.md](/abs/path/C:/git/iot_solutions_ltd/thingsboard/assets/assets_lists_table/PROMPT_LOG.md:1) updated after each user prompt.

Rules:

- Append each new user prompt under the correct date section.
- If the date section does not exist yet, create it.
- Correct spelling only when needed, but keep the user's meaning unchanged.
- Log the user's prompt or direct instruction, not the assistant's reply.
- If multiple prompts were missed, backfill them before finishing the current task.

---

## Do not modify original FOTA behavior

Do not change the existing Device/FOTA widget unless explicitly requested.

The Assets table must be a separate adaptation.

Important: rename FOTA-specific state and globals so the two widgets do not clash on the same dashboard.

Use these replacements:

```text
fotaUi                  -> assetsUi
fota_                   -> assets_
fotaAllDevices          -> assetsAllRows
fotaDeviceIndexById     -> assetsRowIndexById
fotaWidgetRootId        -> assetsWidgetRootId
buildDeviceRows         -> buildAssetRows
devices                 -> assetRows
__fotaRegistry          -> __assetsTableRegistry
fota_table_columns_v1   -> assets_table_columns_v1
fotaCreateBtn           -> assetsCreateBtn, but do not implement create yet
```

---

## Current Phase 1 requirements

Build the smallest working table that displays:

```text
Asset Name | Device ID
```

Required behavior:

- render rows from ThingsBoard `data`
- dedupe by `entityId`
- show `—` for missing values
- search by Asset Name and Device ID
- sort by Asset Name and Device ID
- paginate results
- keep mobile-safe layout
- avoid JavaScript console errors

Phase 1 non-goals:

- no Create Task workflow
- no checkbox bulk-selection workflow unless strictly needed to preserve rendering while refactoring
- no queue, firmware, owner, or network columns
- no FOTA refresh/event plumbing
- no hidden-column persistence unless later required

---

## Minimal row model

Use this first:

```js
{
  entityId: string,
  asset_name: string,
  device_id: string
}
```

Do not add fields like groups/profile/registered until Phase 1 works.

Reasoning:

- `entityId` is the stable dedupe key
- `asset_name` should prefer the asset entity name because the row is now an Asset row
- `device_id` should come only from incoming widget data; if it is missing, show `—`

---

## Recommended `buildAssetRows()` logic

Use a minimal builder based on Steve's `buildDeviceRows()` pattern.

```js
function buildAssetRows(arr) {
  var out = [];
  var seen = {};
  if (!Array.isArray(arr)) arr = [];

  for (var i = 0; i < arr.length; i++) {
    var row = arr[i] || {};

    var entityId =
      row.entityId ||
      (row.entity && row.entity.id) ||
      (row.entityId && row.entityId.id) ||
      (row.$datasource && row.$datasource.entityId);

    if (!entityId) continue;
    entityId = String(entityId);
    if (seen[entityId]) continue;
    seen[entityId] = true;

    var assetName =
      row.entityName ||
      row.entityLabel ||
      row.name ||
      (row.$datasource && row.$datasource.entityName) ||
      pickValue(row, 'name') ||
      pickValue(row, 'Asset Name') ||
      pickValue(row, 'assetName') ||
      '—';

    var deviceId =
      pickValue(row, 'device_id') ||
      pickValue(row, 'Device ID') ||
      pickValue(row, 'deviceId') ||
      '—';

    out.push({
      entityId: entityId,
      asset_name: String(assetName || '—').trim() || '—',
      device_id: String(deviceId || '—').trim() || '—'
    });
  }

  return out;
}
```

---

## Keep from Steve's component

Keep/adapt:

- `escapeHtml`
- `unwrapValue`
- `pickValue`
- `cell`
- search pattern
- sorting pattern
- pagination pattern
- mobile CSS pattern
- table styling standard
- empty state styling

Keep the structure, not the baggage:

- keep the Markdown/HTML Card pattern
- keep generic helpers and render flow
- keep search, sort, pagination, and mobile-safe layout
- remove anything that depends on device-only or FOTA-only fields

---

## Remove for Phase 1

Remove or disable:

- Create Task button
- FOTA task modal
- custom FOTA action code
- firmware update logic
- queue logic
- LoRa disabled-selection logic
- downlink pending logic
- FOTA API calls
- selected device task handling
- `fota_queue`
- `device_param_firmware_level`
- `network_id`
- owner column logic unless explicitly required

Also remove for Phase 1:

- selected row count
- select all / deselect all controls
- advanced filter UI that depends on removed columns
- any remaining `fota*` scope keys, DOM ids, or globals

---

## Coding style

Follow the existing widget style because this code runs inside ThingsBoard's widget editor:

- Use plain JavaScript, not TypeScript.
- Avoid build tools.
- Avoid external libraries.
- Avoid modern syntax that may fail in older embedded browsers.
- Prefer `var` if the existing code uses `var`.
- Keep code pasteable into ThingsBoard's Markdown/HTML Card function editor.
- Use defensive null/undefined checks.
- Escape displayed values with `escapeHtml()`.
- Do not hardcode fake production values.
- Add `TODO` comments for unknown ThingsBoard mappings.

Recommended implementation order:

1. Rename FOTA globals and UI state first.
2. Replace `buildDeviceRows()` with the minimal `buildAssetRows()`.
3. Reduce the rendered table to only `Asset Name` and `Device ID`.
4. Reconnect only the generic behavior still required: search, sorting, pagination, mobile-safe layout.
5. Remove dead code that still references deleted fields or deleted DOM nodes.

---

## Safety rules

Do not invent unknown data sources.

If a field source is unclear, write a TODO and keep the field out of Phase 1.

Examples:

```js
// TODO: Confirm source of Groups with Steve.
// TODO: Confirm whether Device ID comes from asset attribute or relation.
```

Do not implement Service Log.

Do not call external APIs.

Do not add FOTA behavior to the Assets widget.

---

## Expected first deliverable

A new `assets_table.js` file that can be pasted into a ThingsBoard Markdown/HTML Card and shows a working two-column Assets table.

The first deliverable should be easy for Steve to review.

Review standard for the first deliverable:

- small enough to understand in one reading
- no FOTA namespace collisions
- no dead code still expecting removed UI
- no guessed data mappings

---

## Suggested first commit message

```text
Create initial Assets table with asset name and device id
```

---

## Later phases

Only after Phase 1 is reviewed, implement the rest:

1. Image
2. Groups
3. Profile
4. Registered
5. Edit button
6. Delete button
7. Create Asset popup
8. Hidden/default-hidden columns
9. Mobile polish

Service Log remains out of scope.
