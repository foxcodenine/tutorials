<template>
    <section class="row">

        <div class="small-6 columns">
            <h1 class="text-center">YOU</h1>
            <div class="healthbar">
                <div    class="healthbar text-center" 
                        style="background-color: green; margin: 0; color: white;" 
                        v-bind:style="{width : `${playerHealth}%`}">
                    {{ playerHealth }}
                </div>
            </div>
        </div>

        <div class="small-6 columns">
            <h1 class="text-center">MONSTER</h1>
            <div class="healthbar">
                <div    class="healthbar text-center" 
                        style="background-color: green; margin: 0; color: white;"
                        v-bind:style="{width : `${monsterHealth}%`}">
                    {{ monsterHealth }}
                </div>
            </div>
        </div>

    </section>
</template>

<script>

    export default {
        props:['playerHealth', 'monsterHealth']
    }
    
</script>

<style>

</style>