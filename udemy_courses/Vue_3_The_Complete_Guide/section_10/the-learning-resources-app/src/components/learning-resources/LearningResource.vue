<template>
    <li>

        <base-card>

            <header>
                <h3>{{ title }}</h3>
                <base-button mode="flat" type="button">Delete</base-button>
            </header>

            <p>{{ desciption }}</p>

            <nav><a v-bind:href="link">View Resource</a></nav>

        </base-card>

    </li>
</template>

<!--------------------------------------------------------------------->

<script>
import BaseButton from '../UI/BaseButton.vue'
export default {
  components: { BaseButton },
    props: {
        'title': String,
        'desciption': String,
        'link': String
    },
}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped >
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}    
</style>