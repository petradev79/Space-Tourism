<template>
  <div class="dots flex">
    <router-link
      class="uppercase ff-sans-cond text-accent ls-2"
      v-for="crewMember in crew"
      :key="crewMember.slug"
      :to="{ name: 'crew', params: { slug: crewMember.slug } }"
    >
      <span class="sr-only">{{ crewMember.role }}</span>
    </router-link>
  </div>
</template>

<script>
import store from "@/data.json";

export default {
  data() {
    return {
      crew: store.crew,
    };
  },
  computed: {
    crewMember() {
      return store.crew.find(crewMember => crewMember.slug === this.slug);
    },
  },
};
</script>

<style lang="scss" scoped>
.dots {
  a {
    border-radius: 50%;
    padding: 0.5em;
    background-color: rgba($color-white, 0.25);

    &:hover,
    &:focus {
      background-color: rgba($color-white, 0.5);
    }

    &.router-link-exact-active {
      background-color: rgba($color-white, 1);
    }
  }
}
</style>
