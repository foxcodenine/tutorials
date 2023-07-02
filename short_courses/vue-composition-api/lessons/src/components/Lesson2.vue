<template >
    <div class="counter">
        <button @click="increment">counter</button>
        <div>{{ counter }}</div>
        <div>{{ arrayOfEmojies }}</div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script >
import { onMounted, ref, watch, computed } from 'vue';
export default {
    props: {
        emoji: { type: String, default: '🙀' }
    },
    setup(props, context) {
        // console.log(props.emoji);
        // console.log(context);

        const counter = ref(0);
        
        
        const increment = () => counter.value++;
        
        
        watch(counter, (current, previos) => {
            if (current % 5 === 0 ) {
                console.log(`you click the btn ${current} times!`);
            }
        });

        const arrayOfEmojies = computed( ()=>{
            return Array.from(new Array(counter.value), () => props.emoji ).join(' ');
        } );
        
        onMounted(()=>{console.log('counter component mounted!') });

        return { counter, increment, arrayOfEmojies}
    },
    
    
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
.counter {
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    // border: 1px dashed crimson;
}
</style>