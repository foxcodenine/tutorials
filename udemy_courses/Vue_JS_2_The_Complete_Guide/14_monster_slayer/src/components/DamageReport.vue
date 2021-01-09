<template>
    <section class="row log" >

        <div class="small-12 columns">
            <ul>
                <transition-group name="fade" appear>
                    <li v-for="turn in turns.slice().reverse()"
                        v-bind:class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}" :key="turn.index">
                        {{ turn.text }}
                    </li>
                </transition-group>
            </ul>
        </div>

    </section>

</template>

<script>

    export default {
        props: ['turns'],
    }

</script>

<style>
    .fade-enter {
    opacity: 0;
  }
    .fade-enter-active {

    transition: all 1.4s;
  }
    .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
    transition: all .7s;
  }
  .fade-move {
    transition: all .7s;
  }
</style>