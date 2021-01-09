<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directive</h1>
        <p v-text="'Some text with v-text'"></p>
        <p v-html="'<i>More text using <strong>v-html</strong></i>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background="'gold'">Highlight this!</p>
        <p v-highlight.delayed="'lime'">And color this!</p>

        <p v-local-highlight:background.delayed.blink="{'mainColor': 'gold', 'otherColor': 'lime', 'interval': 750 }">Highlight this!</p>
        <p v-local-highlight.blink="{'mainColor': 'red', 'otherColor': 'yellow', 'interval': 500}">And color this!</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    directives: {
      'local-highlight': {
        bind(el, binding, vnode) {

          let delay = 0;

          if (binding.modifiers['delayed']) {
            delay = 1000;
          }

          // ______________________________________

          if (binding.modifiers['blink']){

            let  mainColor = binding.value.mainColor;
            let  otherColor = binding.value.otherColor;
            let currentColor = mainColor;

            setTimeout(()=>{

              setInterval(()=>{

                currentColor === mainColor ? currentColor = otherColor : currentColor = mainColor;
                    
                  if (binding.arg == 'background') {
                    el.style['background-color'] = currentColor;
                  } else {
                    el.style['color'] = currentColor;
                  }

              }, binding.value.interval);

            }, delay);

          // ______________________________________
          
          } else {
          
            setTimeout(()=>{              
              if (binding.arg == 'background') {

                el.style['background-color'] = binding.value.mainColor;
              } else {
                el.style['color'] = binding.value.mainColor;
              }
            }, delay); 
          }         
        }
      }
    }
  }
</script>

<style>

</style>