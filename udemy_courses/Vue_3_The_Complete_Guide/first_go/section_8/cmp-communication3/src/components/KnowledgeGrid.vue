<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      v-bind:id="topic.id"
      v-bind:topic-name="topic.title"
      v-bind:description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics'],
};
</script>