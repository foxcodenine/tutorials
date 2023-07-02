<template >
    <div class="layout">
        <h2>Custom ref</h2>
        <input type="text" placeholder="Enter you email" v-model="email">
        {{ email }}
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { ref, customRef } from 'vue';
export default {
    setup() {
    
        function isEmail(email) {
            return email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        }
        const email = customRef((track, trigger)=>{
            let value = null;
            return {
                get() {
                    track();
                    return value;
                },
                set(payload) {
                    if (isEmail(payload)) {
                        value = payload;
                        trigger();
                    } 
                }
            }
        });

        return { email, }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    .layout {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>