<template>

    <section class="row controls" >
        <div class="small-12 columns">
            <button id="attack" v-on:click='btnAttack'>ATTACK</button>
            <button id="special-attack" v-on:click='btnSpecialAttack' v-if='showSpecialAttack'>SPECIAL ATTACK</button>
            <button id="heal" v-on:click='btnHeal'>HEAL</button>
            <button id="give-up" v-on:click='btnGiveUp'>GIVE UP</button>
        </div>
    </section>

</template>

<script>

    export default {
        props:['gameIsRunning', 'playerHealth', 'monsterHealth'],

        data() {
            return {
                showSpecialAttack: false
            }
        },

        methods: {
            btnAttack() {
                this.$emit('btnAttack');
                this.specialAttackOn();
            },
            btnSpecialAttack() {
                this.$emit('btnSpecialAttack');
                this.specialAttackOn();
            },
            btnHeal() {
                this.$emit('btnHeal');
                this.specialAttackOn();
            },
            btnGiveUp() {
                this.$emit('btnGiveUp');
            },
            specialAttackOn() {

                if (!(this.playerHealth % 6 && this.monsterHealth %6)) {
                    this.showSpecialAttack = true;
                } else {
                    this.showSpecialAttack = false;
                }
            },
        }
    }

</script>

<style>

</style>