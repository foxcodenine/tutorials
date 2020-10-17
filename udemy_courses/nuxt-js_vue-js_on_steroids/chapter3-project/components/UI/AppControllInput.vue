<template>
  <div class="input-control">
        <label><slot /></label>

        <input    
            v-if="controlType === 'input'"
            v-bind="$attrs"
            :value="value"
            @input="$emit('input', $event.target.value)">

        <textarea 
            v-if="controlType === 'textarea'"
            row="10"
            :value="value"
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"></textarea>
        
  </div>
</template>


<script>
    export default {
        name: 'AppInputControl',
        inheritAttrs: false,
        props: {
            controlType: {
                type: String,
                default: 'input'
            },
            value: {
                type: String,
                defalut: ''
            }
        }

    }
</script>


<style scoped lang="scss">

    .input-control {
        margin: 1rem 0;

        label {
            display: block;
            font-weight: bold;
        }

        input,textarea {
            display: block;
            width: 100%;
            box-sizing: border-box;
            font: inherit;
            border: 1px solid #ccc;
            padding: .5rem;

            &:focus {
                background-color: #eee;
                outline: none;
            }
        }
    }

    
</style>