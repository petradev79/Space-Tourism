<template>
  <Navigation />

  <!-- Dots -->
  <!-- <div class="dots flex">
    <router-link to="/">
      <span class="sr-only">Slide title</span>
    </router-link>
    <router-link to="/about">
      <span class="sr-only">Slide title</span>
    </router-link>
    <router-link to="/about">
      <span class="sr-only">Slide title</span>
    </router-link>
  </div> -->
  <!-- Numbers -->
  <!-- <div class="numbers flex">
    <router-link to="/"><span class="ff-serif fs-6 ls-2">1</span></router-link>
    <router-link to="/about"
      ><span class="ff-serif fs-6 ls-2">2</span></router-link
    >
    <router-link to="/about"
      ><span class="ff-serif fs-6 ls-2">3</span></router-link
    >
  </div> -->
  <!-- <router-view :key="$route.path" /> -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: { Navigation },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/////////////////////////////////

// dots
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

// numbers
.numbers {
  flex-direction: column;
  // --gap: 3rem;

  a {
    display: inline-grid;
    place-items: center;
    border-radius: 50%;
    aspect-ratio: 1;
    width: 8rem;
    color: rgba($color-white, 1);
    border: 1px solid rgba($color-white, 0.5);

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
