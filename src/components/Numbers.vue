<template>
  <div class="numbers flex">
    <router-link
      v-for="(tech, i) in technology"
      :key="tech.slug"
      :to="{ name: 'technology', params: { slug: tech.slug } }"
    >
      <span class="ff-serif">{{ i + 1 }}</span>
    </router-link>
  </div>
</template>

<script>
import store from "@/data.json";

export default {
  data() {
    return {
      technology: store.technology,
    };
  },
  computed: {
    tech() {
      return store.technology.find(tech => tech.slug === this.slug);
    },
  },
};
</script>

<style lang="scss" scoped>
.numbers {
  justify-content: center;

  @include respond(lap) {
    flex-direction: column;
    --gap-space: 3.2rem;
  }

  a {
    display: inline-grid;
    place-items: center;
    border-radius: 50%;
    aspect-ratio: 1;
    width: 4rem;
    font-size: 1.6rem;
    color: rgba($color-white, 1);
    border: 1px solid rgba($color-white, 0.5);

    @include respond(tab) {
      width: 6rem;
      font-size: 2.4rem;
    }

    @include respond(lap) {
      width: 8rem;
      font-size: 3.2rem;
    }

    &:hover,
    &:focus {
      border: 1px solid rgba($color-white, 1);
    }

    &.router-link-exact-active {
      color: $color-dark;
      background-color: rgba($color-white, 1);
    }
  }
}
</style>
