<template>
  <div v-editable="blok">
    <h1>{{ blok.heading }}</h1>
    <SbRTE :richtext="blok.paragraph"></SbRTE>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
