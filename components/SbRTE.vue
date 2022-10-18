<template>
  <div class="rte">
    <rich-text-renderer :document="richtext" />
  </div>
</template>

<script>
export default {
  props: ["richtext"],
};
</script>
<style lang="scss" scoped>
ul,
ol {
  margin: 14px 16px;
  ul {
    margin: 8px 32px;
  }
}
blockquote {
  font-size: $font-size-quote;
  padding: 14px 22px;
  width: 100%;
  background-color: rgba($color-gray, 0.4);
  margin: 14px 0;
  border-radius: 4px;

  &::before {
    content: "|";
    display: inline;
    color: $color-gray;
  }
  p {
    display: inline;
    margin-left: 4px;
  }
}
hr {
  margin: 48px 12px;
}
h1 {
  font-size: $font-size-heading;
  line-height: 1.6em;
}
h2 {
  font-size: $font-size-heading-2;
  line-height: 1.4em;
}
h3 {
  font-size: $font-size-heading-3;
  line-height: 1.3em;
}
h4 {
  font-size: $font-size-subheading;
  line-height: 1.2em;
}
h5 {
  font-size: $font-size-subheading-2;
  line-height: 1.2em;
}
h6 {
  font-size: $font-size-subheading-3;
  line-height: 1.2em;
}
p {
  margin: 8px 0;
  font-size: $font-size-paragraph;
}
i {
  font-weight: 100;
}
b {
  font-weight: 900;
}
a {
  text-decoration: none;
  overflow: hidden;
  display: inline-block;
  position: relative;
  color: $color-primary;
  font-weight: 600;
  margin-bottom: -5px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    overflow-wrap: break-word;
    height: 1px;
    background-color: $color-primary;
    transition: 0.2s ease;
    transform: translateX(-100%);
  }

  &:hover {
    &::after {
      transform: translateX(0);
    }
  }
}
</style>
