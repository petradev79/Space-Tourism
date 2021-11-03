<template>
  <div class="navigation flex">
    <router-link to="/" class="uppercase text-white ls-2"
      ><span>00</span>Home</router-link
    >
    <router-link to="/destination" class="uppercase text-white ls-2"
      ><span>01</span>Destination</router-link
    >
    <router-link to="/crew" class="uppercase text-white ls-2"
      ><span>02</span>Crew</router-link
    >
    <router-link to="/technology" class="uppercase text-white ls-2"
      ><span>03</span>Technology</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  --gap: 8rem;

  a {
    padding: 2rem 0;
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

  span {
    font-weight: 700;
    margin-right: 0.5em;
  }
}
</style>
