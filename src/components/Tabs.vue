<template>
  <div class="tabs flex">
    <router-link
      class="uppercase ff-sans-cond text-accent ls-2"
      v-for="destination in destinations"
      :key="destination.slug"
      :to="{ name: 'destination', params: { slug: destination.slug } }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script>
import store from "@/data.json";

export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  --gap-space: 2.6rem;
  justify-content: center;

  @include respond(tab) {
    --gap-space: 3.5rem;
  }

  @include respond(lap) {
    justify-content: start;
  }

  a {
    padding-block: 0.8rem;
    font-size: 1.4rem;
    border-bottom: 0.2rem solid rgba($color-white, 0);

    @include respond(tab) {
      padding-block: 1.2rem;
      font-size: 1.6rem;
    }

    &:hover,
    &:focus {
      border-color: rgba($color-white, 0.25);
    }

    &.router-link-exact-active {
      border-color: rgba($color-white, 1);
      color: $color-white;
    }
  }
}
</style>
