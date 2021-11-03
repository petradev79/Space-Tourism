<template>
  <h2 class="numbered-title">
    <span>{{ number }} </span>{{ text }}
  </h2>
</template>

<script>
export default {
  props: ["number", "text"],
};
</script>

<style lang="scss" scoped>
.numbered-title {
  font-family: $ff-sans-cond;
  font-size: $fs-500;
  text-transform: uppercase;
  letter-spacing: 4.72px;

  & span {
    margin-right: 0.5em;
    font-weight: 700;
    color: rgba($color-white, 0.25);
  }
}
</style>
