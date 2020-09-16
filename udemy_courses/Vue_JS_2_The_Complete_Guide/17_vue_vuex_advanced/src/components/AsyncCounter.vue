<template>
    <!-- https://www.splessons.com/lesson/bootstrap-input-group/ -->
    <!-- https://getbootstrap.com/docs/3.3/components/ -->
    <div>
        <h4>(Async Counter)</h4>
        <button class="btn btn-warning" @click="increment">Increment</button>
        <button class="btn btn-warning" @click="decrement">Decrement</button>
        <button class="btn btn-warning" @click="asyncIncrement">Async Increment</button>
        <button class="btn btn-warning" @click="asyncDecrement">Async Decrement</button>
        <br><br>
        <button class="btn btn-danger" @click="asyncAdjust({delay:time, by: amount})">Async Adjust</button>
    
        <div class="col-xs-8" style="float: right;">
            <div class="input-group">
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-time"></span>
                </span>
                <input type="text" class="form-control" placeholder="Delay" v-model="time">
                
                <span class="input-group-addon" >
                    <span class="glyphicon glyphicon-sort"></span>
                </span>
                <input type="text" class="form-control" placeholder="Amount" v-model="amount">
            </div>
            
        </div>


        <!-- <span> &nbsp; &nbsp; <strong> &Larr; using mapMutations</strong></span> -->
    </div>
</template>

<script>

    import { mapActions, mapMutations } from "vuex";

    export default {
        data() {
            return {
                time: 0,
                amount: 0
            }
        },
        
        methods: {
            ...mapActions({
                increment: 'counter/increment',
                decrement: 'counter/decrement',
                asyncIncrement: 'counter/asyncIncrement',
                asyncDecrement: 'counter/asyncDecrement',
                asyncAdjust: 'counter/asyncAdjust',
            }),
        }
    }

</script>

<style>

</style>