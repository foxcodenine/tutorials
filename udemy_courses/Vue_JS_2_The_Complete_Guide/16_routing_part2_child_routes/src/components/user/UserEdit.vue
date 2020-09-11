<template>
    <div>
        <h3>Edit the User</h3>
        <p>User ID: {{ $route.params.id }}</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
    </div>
</template>