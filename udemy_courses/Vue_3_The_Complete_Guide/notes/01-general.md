
### ----- install vue cli on your system:

    $ sudo npm install -g @vue/cli


### ----- create new vue app:

    $ vue create your-vue-app


### ----- run your app on a dev server:

    $ cd your-vue-app

    $ npm run serve


### ----- To create a production build, run:

    $ npm run build


### ----- Enables tab-completion in all npm commands.

    $ npm completion >> ~/.bashrc


### ----- Event - Accessing Event Argument in Inline Handlers:

```html
    <!-- using $event special variable -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
        Submit
    </button>

    <!-- using inline arrow function -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
        Submit
    </button>
```

### ----- Event Modifiers:

    .stop
    .prevent
    .self
    .capture
    .once
    .passive

System Modifier Keys

    .enter
    .tab
    .delete (captures both "Delete" and "Backspace" keys)
    .esc
    .space
    .up
    .down
    .left
    .right


Mouse Button Modifiers

    .left
    .right
    .middle

System Modifier Keys

    .ctrl
    .alt
    .shift
    .meta

.exact Modifier

```html
<!-- this will fire even if Alt or Shift is also pressed -->
<button @click.ctrl="onClick">A</button>

<!-- this will only fire when Ctrl and no other keys are pressed -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- this will only fire when no system modifiers are pressed -->
<button @click.exact="onClick">A</button>
```