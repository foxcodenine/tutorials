<template>
    <div class="container">
        <h1>Hello there!</h1>
        <p>This is a stand alone conponent used for testing.</p>
        <small>To inspact a stand alone component on its own all you need to do
        is:</small>
        <ul>
            <li>$ sudo npm i -g @vue/cli-service-global</li>
            <li>$ vue serve componentName.vue</li>
        </ul>
  </div>
</template>

<style scoped>
    * {
        margin: 10px 0;
        padding: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70vh;
        font-family: 'Courier New', Courier, monospace;
        width: 100%;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    li {
        font-family: 'Courier New', Courier, monospace;
        font-size: 12px;
        margin: 7px 0;
        color: darkblue;
    }
</style>
