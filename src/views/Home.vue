<template>
  <main class="home grid-container">
    <div>
      <h1 class="text-accent ff-sans-cond uppercase ls-1">
        So, you want to travel to
        <span class="block ff-serif text-white">Space</span>
      </h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div>
      <LargeButton />
    </div>
  </main>
</template>

<script>
import LargeButton from "@/components/LargeButton.vue";

export default {
  name: "Home",
  components: { LargeButton },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 11.2rem;
  background-image: url("~@/assets/home/background-home-mobile.jpg");

  @include respond(tab) {
    padding-top: 20rem;
    background-position: center center;
    background-image: url("~@/assets/home/background-home-tablet.jpg");
  }

  @include respond(lap) {
    padding-bottom: max(13rem, 20vh);
    align-items: end;
    background-image: url("~@/assets/home/background-home-desktop.jpg");
  }

  & > *:first-child {
    @include respond(lap) {
      grid-column: 2;
    }
  }

  & > *:last-child {
    @include respond(lap) {
      grid-column: 3;
    }
  }

  h1 {
    font-size: 1.6rem;

    @include respond(tab) {
      font-size: 2rem;
    }

    @include respond(lap) {
      font-size: 2.8rem;
    }

    span {
      margin-block: 1.6rem;
      font-size: clamp(8rem, 10vw + 1rem, 15rem);
      line-height: 1.1;

      @include respond(tab) {
        margin-block: 2.4rem;
        font-size: 15rem;
      }
    }
  }
}
</style>
