<template>
  <div>
    <rich-text-renderer :document="richtext" />
  </div>
</template>

<script>
export default {
  props: ["richtext"],
};
</script>
