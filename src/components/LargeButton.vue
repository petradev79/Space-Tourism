<template>
  <a href="#" class="large-button">Explore</a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.large-button {
  position: relative;
  padding: 0 2em;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  aspect-ratio: 1;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($color-white, 0.15);
    border-radius: inherit;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.5s linear, transform 0.75s ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    transform: scale(1.5);
    opacity: 1;
  }
}
</style>
