<template>
  <nav class="navigation flex flow">
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
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  flex-direction: column;
  position: fixed;
  inset: 0 0 0 30%;
  --flow-space: 3.2rem;
  padding: min(11.8rem, 15vh) 3.2rem;
  background-color: rgba($color-dark, 0.95);

  @supports (backdrop-filter: blur(1rem)) {
    & {
      background-color: rgba($color-white, 0.04);
      backdrop-filter: blur(3rem);
    }
  }

  a {
    font-family: $ff-sans-cond;
    font-size: 1.6rem;
    // padding-block: 2rem;
    border-bottom: 0.2rem solid rgba($color-white, 0);

    // &:hover,
    // &:focus {
    //   border-color: rgba($color-white, 0.25);
    // }

    // &.router-link-exact-active {
    //   border-color: rgba($color-white, 1);
    //   color: $color-white;
    // }
  }

  span {
    font-weight: 700;
    margin-right: 0.5em;
  }
}
</style>
