<template>
  <div class="about-page">
    <h1>This is my absolutely fantastic "About Me" Page!</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
  </div>
</template>


<script>
import jsonwebtoken from "jsonwebtoken";
const jwt = require('jsonwebtoken')

export default {
  head: {
    title: 'About Page',
  },
  middleware: ['retrieveToken'],
  mounted() {
    console.log('About mounted!');
    console.log('Check baseUrlFlask >', this.$config.baseUrlFlask)
    const token = jwt.sign({ada: 'lovelace'}, 'cardano');
    console.log({token});

    try {
      const decoded = jwt.verify(token, 'cardano')
      console.log(decoded);
    } catch(err) {
      console.log({err});
    }

    // console.log(this.$config.fkSecretKey);

    // try {
    //   const tokenflask = this.$store.state.tokenFlask;
    //   const key = this.$config.fkSecretKey;
    //   const decodedTokenFlask = jwt.verify(tokenflask, key)
    //   const utcNow = Math.floor(new Date().getTime() / 1000);

    //   const timeStatus = utcNow < decodedTokenFlask.exp ? decodedTokenFlask.exp - utcNow : 'Time expired'
    //   console.log(timeStatus)
    // } catch (err) {
    //   console.log(err)
    // }
    
  }
}
</script>

<style>
    .about-page {
        text-align: center;
        padding: 3rem;
    }
</style>