<template>
  <h1 class="numbered-title ff-sans-cond uppercase ls-2">
    <span aria-hidden="true">{{ number }} </span>{{ text }}
  </h1>
</template>

<script>
export default {
  props: ["number", "text"],
};
</script>

<style lang="scss" scoped>
.numbered-title {
  font-size: 1.6rem;

  @include respond(tab) {
    font-size: 2rem;
    justify-self: start;
  }

  @include respond(lap) {
    font-size: 2.8rem;
  }

  & span {
    margin-right: 1.8rem;
    font-weight: 700;
    color: rgba($color-white, 0.25);

    @include respond(lap) {
      margin-right: 2.8rem;
    }
  }
}
</style>
