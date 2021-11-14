<template>
  <header class="header flex">
    <img class="header__logo" src="@/assets/shared/logo.svg" alt="" />
    <button
      class="header__nav-icon"
      :class="{ 'icon-rotate': isNavOpen }"
      v-if="mobileView"
      @click="showNav"
    >
      <span class="sr-only">Menu</span>
      <img
        v-if="!isNavOpen"
        src="@/assets/shared/icon-hamburger.svg"
        alt="Hamburger Icon Open"
      />
      <img
        v-if="isNavOpen"
        src="@/assets/shared/icon-close.svg"
        alt="Hamburger Icon Close"
      />
    </button>

    <transition name="slide">
      <nav class="mobile-nav flex flow" v-show="isNavOpen">
        <router-link to="/" class="uppercase text-white ls-2" @click="showNav"
          ><span aria-hidden="true">00</span>Home</router-link
        >
        <router-link
          :to="{ name: 'destination', params: { slug: destination.slug } }"
          class="uppercase text-white ls-2"
          @click="showNav"
          ><span aria-hidden="true">01</span>Destination</router-link
        >
        <router-link
          :to="{ name: 'crew', params: { slug: crew.slug } }"
          class="uppercase text-white ls-2"
          @click="showNav"
          ><span aria-hidden="true">02</span>Crew</router-link
        >
        <router-link
          :to="{ name: 'technology', params: { slug: technology.slug } }"
          class="uppercase text-white ls-2"
          @click="showNav"
          ><span aria-hidden="true">03</span>Technology</router-link
        >
      </nav>
    </transition>

    <nav class="navigation flex" v-if="!mobileView">
      <router-link to="/" class="uppercase text-white ls-2"
        ><span aria-hidden="true">00</span>Home</router-link
      >
      <router-link
        :to="{ name: 'destination', params: { slug: destination.slug } }"
        class="uppercase text-white ls-2"
        :class="{
          'router-link-exact-active': isActive('destination'),
        }"
        ><span aria-hidden="true">01</span>Destination</router-link
      >
      <router-link
        :to="{ name: 'crew', params: { slug: crew.slug } }"
        class="uppercase text-white ls-2"
        :class="{
          'router-link-exact-active': isActive('crew'),
        }"
        ><span aria-hidden="true">02</span>Crew</router-link
      >
      <router-link
        :to="{ name: 'technology', params: { slug: technology.slug } }"
        class="uppercase text-white ls-2"
        :class="{
          'router-link-exact-active': isActive('technology'),
        }"
        ><span aria-hidden="true">03</span>Technology</router-link
      >
    </nav>
  </header>
</template>

<script>
import store from "@/data.json";

export default {
  data() {
    return {
      mobileView: false,
      isNavOpen: false,
    };
  },
  created() {
    window.addEventListener("resize", this.handleView);
    this.handleView();
  },
  computed: {
    destination() {
      return store.destinations[0];
    },
    crew() {
      return store.crew[0];
    },
    technology() {
      return store.technology[0];
    },
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 576;
    },
    showNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    isActive(path) {
      return this.$route.path.split("/")[1] === path;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  padding: 2.4rem 2.4rem 0;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @include respond(tab) {
    padding: 0;
    padding-left: 4rem;
  }

  @include respond(lap) {
    margin-block: 4rem;
    padding-left: 5.5rem;

    &::after {
      content: "";
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      order: 1;
      margin-right: -5rem;
      margin-left: 3rem;
      background: rgba($color-white, 0.25);
    }
  }

  &__logo {
    width: 4rem;

    @include respond(tab) {
      width: 4.8rem;
    }
  }

  &__nav-icon {
    z-index: 1000;
    background: transparent;
    border: 0;
    outline: none;
    transition: transform 0.5s ease;
  }

  .icon-rotate {
    transform: rotate(180deg);
  }
}

.navigation,
.mobile-nav {
  background-color: rgba($color-dark, 0.95);

  @supports (backdrop-filter: blur(1rem)) {
    & {
      background-color: rgba($color-white, 0.04);
      backdrop-filter: blur(3rem);
    }
  }

  a {
    font-family: $ff-sans-cond;
  }

  span {
    font-weight: 700;
    margin-right: 0.5em;

    @include respond(tab) {
      display: none;
    }

    @include respond(lap) {
      display: inline;
    }
  }
}

.mobile-nav {
  flex-direction: column;
  position: fixed;
  inset: 0 0 0 30%;
  --flow-space: 3.2rem;
  padding: min(11.8rem, 20vh) 3.2rem;

  a {
    font-size: 1.6rem;
  }
}

.navigation {
  --gap-space: 4rem;
  padding-inline: clamp(4.8rem, 10vw, 15rem);

  @include respond(lap) {
    order: 2;
    --gap-space: 4.8rem;
  }

  a {
    padding-block: 3.5rem;
    font-size: 1.4rem;
    border-bottom: 0.2rem solid rgba($color-white, 0);

    @include respond(lap) {
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

// mobile navigation slide left in/out transition
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}
</style>
