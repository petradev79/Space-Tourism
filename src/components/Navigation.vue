<template>
  <header class="header flex">
    <div class="header__logo">
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
        <router-link to="/" class="uppercase text-white ls-2"
          ><span aria-hidden="true">00</span>Home</router-link
        >
        <router-link to="/destination" class="uppercase text-white ls-2"
          ><span aria-hidden="true">01</span>Destination</router-link
        >
        <router-link to="/crew" class="uppercase text-white ls-2"
          ><span aria-hidden="true">02</span>Crew</router-link
        >
        <router-link to="/technology" class="uppercase text-white ls-2"
          ><span aria-hidden="true">03</span>Technology</router-link
        >
      </nav>
    </transition>

    <nav class="navigation flex" v-if="!mobileView">
      <router-link to="/" class="uppercase text-white ls-2"
        ><span aria-hidden="true">00</span>Home</router-link
      >
      <router-link to="/destination" class="uppercase text-white ls-2"
        ><span aria-hidden="true">01</span>Destination</router-link
      >
      <router-link to="/crew" class="uppercase text-white ls-2"
        ><span aria-hidden="true">02</span>Crew</router-link
      >
      <router-link to="/technology" class="uppercase text-white ls-2"
        ><span aria-hidden="true">03</span>Technology</router-link
      >
    </nav>
  </header>
</template>

<script>
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
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 576;
    },
    showNav() {
      this.isNavOpen = !this.isNavOpen;
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

  &__nav-icon {
    z-index: 1000;
    background: transparent;
    border: 0;
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
    font-size: 1.4rem;
    padding-block: 3.5rem;
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
