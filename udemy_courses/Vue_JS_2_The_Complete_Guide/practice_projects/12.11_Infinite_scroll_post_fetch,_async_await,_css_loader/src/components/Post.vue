<template>

    <div class="post">
        <div class="post-number">{{post.id}}</div>
        <div class="post-info">
            <h2 class="post-title">{{post.title}}</h2>
            <p class="post-body">
                {{post.body}}
            </p>
        </div>
    </div>

</template>




<script>
    export default {
        props: ['post']
    }
</script>