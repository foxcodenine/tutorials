<template>
    <div class="container">
        <p> 
            <button v-on:click="changeStatus()">Change Status</button>
            &nbsp;&nbsp;&nbsp;Server Status: <span v-html="status"></span>
        </p>
        
        
        <hr>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                status: '<b>Critical</b>'
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Normal';
            }
        }
    }
</script>

<style>
  @import "../style.css";
</style>