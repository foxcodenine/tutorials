<template>
    <div>
        <h3>Edit the User</h3>
        <p>User ID: {{ $route.params.id }}</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <div style="height: 700px"></div>

        <p id="copyright">Copyright © 2010 by Bill Shakespeare</p>
    </div>
</template>

<style scoped>
#copyright {
    border: 1px solid black;
    display: inline-block;
    padding: 3px 5px;
    margin-bottom: 20px;
}
</style>