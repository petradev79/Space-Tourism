<template>
  <main class="crew grid-container flow">
    <NumberedTitle class="crew__title" number="02" text="Meet your crew" />
    <div class="crew__image">
      <img
        :src="require(`@/assets/crew/${crewMember.images.png}`)"
        :alt="crewMember.name"
      />
    </div>
    <Dots class="crew__dots" />
    <article class="crew__info">
      <h2 class="uppercase ff-serif">{{ crewMember.role }}</h2>
      <p class="crew__name uppercase ff-serif">
        {{ crewMember.name }}
      </p>
      <p>
        {{ crewMember.bio }}
      </p>
    </article>
  </main>
</template>

<script>
import store from "@/data.json";
import NumberedTitle from "@/components/NumberedTitle.vue";
import Dots from "@/components/Dots.vue";

export default {
  components: {
    NumberedTitle,
    Dots,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    crewMember() {
      return store.crew.find(crewMember => crewMember.slug === this.slug);
    },
  },
};
</script>

<style lang="scss" scoped>
.crew {
  --flow-space: 3.2rem;
  grid-template-areas:
    "title"
    "image"
    "dots"
    "content";
  background-image: url("~@/assets/crew/background-crew-mobile.jpg");

  @include respond(tab) {
    padding-bottom: 0;
    --flow-space: 4rem;
    grid-template-areas:
      "title"
      "content"
      "dots"
      "image";
    background-image: url("~@/assets/crew/background-crew-tablet.jpg");
  }

  @include respond(lap) {
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". dots image .";
    background-image: url("~@/assets/crew/background-crew-desktop.jpg");
  }

  &__title {
    grid-area: title;
  }

  &__image {
    grid-area: image;
    width: 100%;
    border-bottom: 1px solid rgba($color-white, 0.1);

    @include respond(tab) {
      margin-bottom: 0;
    }

    @include respond(lap) {
      align-self: end;
    }

    img {
      max-height: 22.2rem;
      margin-inline: auto;

      @include respond(tab) {
        max-height: 53.2rem;
      }

      @include respond(lap) {
        max-height: 100%;
      }
    }
  }

  &__dots {
    grid-area: dots;

    @include respond(tab) {
      margin-top: 4rem;
    }

    @include respond(lap) {
      margin-top: 0;
      justify-self: start;
    }
  }

  &__info {
    grid-area: content;

    @include respond(lap) {
      justify-self: start;
      align-self: end;

      p:not([class]) {
        margin-inline: 0;
      }
    }

    h2 {
      font-size: 1.6rem;
      color: rgba($color-white, 0.5);

      @include respond(tab) {
        font-size: 2.4rem;
      }

      @include respond(lap) {
        font-size: 3.2rem;
      }
    }
  }

  &__name {
    margin: 0.8rem 0 1.6rem;
    font-size: 2.4rem;

    @include respond(tab) {
      font-size: 4rem;
    }

    @include respond(lap) {
      font-size: 5.6rem;
    }
  }
}
</style>
