<template>
  <header class="header flex">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
    </div>
    <button v-if="mobileView"><span class="sr-only">Menu</span></button>
    <!-- <Navigation /> -->
  </header>

  <!-- Tabs -->
  <!-- <div class="tabs underline flex">
    <router-link to="/" class="uppercase ff-sans-cond text-accent ls-2"
      ><span>01</span>Home</router-link
    >
    <router-link to="/about" class="uppercase ff-sans-cond text-accent ls-2"
      ><span>02</span>About</router-link
    >
    <router-link to="/about" class="uppercase ff-sans-cond text-accent ls-2"
      ><span>03</span>Hover</router-link
    >
  </div> -->
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
  <router-view />
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: { Navigation },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 576;
    },
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  justify-content: space-between;
  z-index: 100;
}
/////////////////////////////////
.underline {
  a {
    // padding: var(--underline-gap, 1rem) 0;
    border-bottom: 0.2rem solid rgba($color-white, 0);

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

.navigation {
  // --gap: 8rem;
  // --underline-gap: 2rem;

  span {
    font-weight: 700;
    margin-right: 0.5em;
  }
}

.tabs {
  // --gap: 2rem;

  span {
    display: none;
  }
}

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
