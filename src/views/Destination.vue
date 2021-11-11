<template>
  <main class="destination grid-container flow">
    <NumberedTitle
      class="destination__title"
      number="01"
      text="Pick your destination"
    />
    <img
      class="destination__image"
      :src="require(`@/assets/destination/${destination.images.png}`)"
      :alt="destination.name"
    />
    <div class="destination__info flow">
      <Tabs />
      <article>
        <h2 class="uppercase ff-serif">{{ destination.name }}</h2>

        <p>
          {{ destination.description }}
        </p>

        <div class="destination__cta flex">
          <div>
            <h3 class="ff-sans-cond uppercase ls-3 text-accent">
              Avg. distance
            </h3>
            <p class="ff-serif uppercase">{{ destination.distance }}</p>
          </div>
          <div>
            <h3 class="ff-sans-cond uppercase ls-3 text-accent">
              Est. travel time
            </h3>
            <p class="ff-serif uppercase">{{ destination.travel }}</p>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import store from "@/data.json";
import NumberedTitle from "@/components/NumberedTitle.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  components: {
    NumberedTitle,
    Tabs,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.destination {
  --gap-space: 6rem;
  --flow-space: 2rem;
  grid-template-areas:
    "title"
    "image"
    "content";
  background-image: url("~@/assets/destination/background-destination-mobile.jpg");

  @include respond(tab) {
    background-position: center center;
    background-image: url("~@/assets/destination/background-destination-tablet.jpg");
  }

  @include respond(lap) {
    background-image: url("~@/assets/destination/background-destination-desktop.jpg");
  }

  @include respond(tab) {
    --flow-space: 3.2rem;
  }

  @include respond(lap) {
    align-content: center;
    grid-template-areas:
      ". title title ."
      ". image tabs ."
      ". image content .";
  }

  &__title {
    grid-area: title;
  }

  &__image {
    grid-area: image;
    max-width: 17rem;
    margin-top: 3.2rem;
    display: inline-block;

    @include respond(tab) {
      max-width: 30rem;
    }

    @include respond(lap) {
      max-width: 44.5rem;
    }
  }

  &__info {
    grid-area: content;

    h2 {
      font-size: 5.6rem;

      @include respond(tab) {
        font-size: 8rem;
      }

      @include respond(lap) {
        font-size: 10rem;
      }
    }
  }

  &__cta {
    flex-direction: column;
    border-top: 1px solid rgba($color-white, 0.1);
    margin-top: 3.2rem;
    padding-top: 3.2rem;
    --gap-space: 3.2rem;

    @include respond(tab) {
      flex-direction: row;
      justify-content: space-evenly;
      margin-top: 5rem;
    }

    @include respond(lap) {
      justify-content: flex-start;
      --gap-space: 8rem;
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 2.8rem;
    }
  }
}
</style>
