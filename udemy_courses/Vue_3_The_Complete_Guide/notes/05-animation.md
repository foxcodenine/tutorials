
### Transition Classes

v-enter-from    ~>    v-enter-to
|_______ v-enter-action _______|

v-leave-from    ~>    v-leave-to
|_______ v-enter-leave _______|


### Method 1 (specify each vue class)

    ```css 

    .v-enter-from {  opacity: 0;  transform: translateY(-30px); }

    .v-enter-active {  transition: all .3s ease-out; }

    .v-enter-to {  opacity: 1;  transform: translateY(0); }

    .v-leave-from {  opacity: 1;  transform: translateY(0);}

    .v-leave-active {  transition: all .3s ease-out; }

    .v-leave-to {  opacity: 0;  transform: translateY(30px); }
    ```

Note, you can also use Named Transitions as:
    `.fade-enter-active` and `<Transition name="fade">`



### Method 2 (Native CSS animations) (and using reverse)

```css
.model-enter-active { animation: model-in .3s ease-in; }
.model-leave-active { animation: model-out .3s ease-in reverse; } 

@keyframes model-in {
  from { opacity: 0; transform: translateY(-50px) scale(0.9); }
  to   { opacity: 1; transform: translateY(0px) scale(1); }
}

/* @keyframes model-out {
  from { opacity: 1; transform: translateY(0px) scale(1); }
  to   { opacity: 0; transform: translateY(-50px) scale(0.9); }
} */
```

### Method 3 (Custom Transition Classes)

    You can also specify custom transition classes by passing the following props to <Transition>:

    enter-from-class
    enter-active-class
    enter-to-class
    leave-from-class
    leave-active-class
    leave-to-class

    ```css
    <!-- assuming Animate.css is included on the page -->
    <Transition
        name="custom-classes"
        enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutRight"
    >
        <p v-if="show">hello</p>
    </Transition>
    ```


### Transition Modes

    <Transition mode="out-in">

    <Transition> also supports mode="in-out", although it's much less frequently used.



### JavaScript Hooks

    <Transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @enter-cancelled="onEnterCancelled"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
        @leave-cancelled="onLeaveCancelled"
    >
    <!-- ... -->
    </Transition>

each callback function / method can take to parameters

el      for 'element'
done    for done functio 'done()'

Example:

    ```js
    onBeforeEnter(el) {
      console.log( el.textContent );
    },

    onEnter3(el, done) {
      let round = 1;

      const myTimer = setInterval( function(){
        
        if (round > 100) {
          clearInterval(myTimer);     done();
        }
        round++;

      }, 20);  

    }
    ```


### List Move Transitions

The <transition-group> component can not only animate entering and
leaving of an element, but also changes in position and animate its
siblings. 

This feature is the acived with the addition of the v-move class, which
is added when items are changing positions. 

v-move   or   my-classname-move

Sometimes you need to add the absolutely positioned on top of each
element especially when leaving.

    ```css

    .user-list-leave-active{
        animation:  user-list-out .3s ease-in;
        position: absolute; 
    }

    ```