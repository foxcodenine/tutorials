<template>
  <div class="container">
    <app-header></app-header>
    <div>
      <Logo />
      <app-my-logo></app-my-logo>
      <h1 class="title">
        Chapter2 - Pages Routing & Views
      </h1>
      <div class="links">
        <!-- <a href="/users" class="button--green">Users</a> -->
        <nuxt-link to="/users" tag="a" class="button--green">Users</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header';
import myLogo from "~/components/Logo";
export default {
  components: {
    appMyLogo: myLogo,
    appHeader: Header
  },

}
</script>
  
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
