<template>
    <div>
        <h3>Edit the User</h3>
        <p>User ID: {{ $route.params.id }}</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="userConfirmed">Confirm</button>
        <div style="height: 700px"></div>

        <p id="copyright">Copyright © 2010 by Bill Shakespeare</p>
    </div>
</template>




<script>

    export default {
        data() {
            return {
                confirmed: false,
            }
        },
        methods: {
            userConfirmed() {
                this.confirmed = true;
            }
        },
        beforeRouteLeave(to, from, next) {
            if (this.confirmed){
                next();
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }       
        }
    }

</script>




<style scoped>
#copyright {
    border: 1px solid black;
    display: inline-block;
    padding: 3px 5px;
    margin-bottom: 20px;
}
</style>