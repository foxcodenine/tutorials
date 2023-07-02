<template >
    <div>
        a
        {{ aRef }} {{ noRef }}
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { ref, reactive, toRef, toRefs } from 'vue';
export default {
    props: {
        a: {type: Number, default: 0},
        b: {type: String, default: 'Vue 3!'},
        c: {type: Boolean, default: true},
    },
    setup(props, context) {
        const reactivityFunction = ref('function: ref, reactive, toRef');
        console.log(reactivityFunction.value);

        const obj = reactive({a: 0, b: 'string'});
        const aRef = toRef(obj, 'a');                                   // <- this will be reactive
        const noRef = obj.a;                                           // <- this will not

        setInterval(()=>{obj.a++}, 1000);

        // -------------------------------------------------------------

        const {a, b, c} = toRefs(props);
        console.log(a.value);
        console.log(b.value);
        console.log(c.value);


        return { obj, aRef, noRef }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped >
    
</style>