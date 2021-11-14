<template>
  <router-link
    :to="{ name: 'destination', params: { slug: destination.slug } }"
    class="large-button uppercase ff-serif text-dark bg-accent"
    >Explore</router-link
  >
</template>

<script>
import store from "@/data.json";

export default {
  computed: {
    destination() {
      return store.destinations[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.large-button {
  position: relative;
  padding-inline: 2em;
  font-size: 2rem;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  aspect-ratio: 1;
  z-index: 1;

  @include respond(tab) {
    font-size: 3.2rem;
  }

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
