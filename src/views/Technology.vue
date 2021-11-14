<template>
  <main class="technology grid-container flow">
    <NumberedTitle
      class="technology__title"
      number="03"
      text="Space launch 101"
    />
    <div class="technology__image" v-if="mobileView">
      <img
        :src="require(`@/assets/technology/${tech.images.landscape}`)"
        :alt="tech.name"
      />
    </div>
    <div class="technology__image" v-if="!mobileView">
      <img
        :src="require(`@/assets/technology/${tech.images.portrait}`)"
        :alt="tech.name"
      />
    </div>
    <div class="technology__info flow">
      <Numbers class="technology__numbers" />
      <article>
        <h2 class="uppercase $ff-sans-cond ls-2 text-accent">
          THE TERMINOLOGY…
        </h2>
        <p class="technology__name uppercase ff-serif">
          {{ tech.name }}
        </p>
        <p>
          {{ tech.description }}
        </p>
      </article>
    </div>
  </main>
</template>

<script>
import store from "@/data.json";
import NumberedTitle from "@/components/NumberedTitle.vue";
import Numbers from "@/components/Numbers.vue";

export default {
  components: {
    NumberedTitle,
    Numbers,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mobileView: false,
    };
  },
  created() {
    window.addEventListener("resize", this.handleView);
    this.handleView();
  },
  computed: {
    tech() {
      return store.technology.find(tech => tech.slug === this.slug);
    },
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 992;
    },
  },
};
</script>

<style lang="scss" scoped>
.technology {
  position: relative;
  --flow-space: 3.2rem;
  grid-template-areas:
    "title"
    "image"
    "content";
  background-image: url("~@/assets/technology/background-technology-mobile.jpg");

  @include respond(tab) {
    --flow-space: 5.6rem;
    background-image: url("~@/assets/technology/background-technology-tablet.jpg");
  }

  @include respond(lap) {
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". content image .";
    background-image: url("~@/assets/technology/background-technology-desktop.jpg");
  }

  &__title {
    grid-area: title;
  }

  &__image {
    grid-area: image;
    width: calc(100% + 4.8rem);

    @include respond(tab) {
      width: calc(100% + 8rem);
    }

    @include respond(lap) {
      width: 100%;
    }

    img {
      width: 100%;

      @include respond(lap) {
        width: auto;
        float: right;
      }
    }
  }

  &__info {
    grid-area: content;

    @include respond(lap) {
      justify-self: start;
      display: flex;
      gap: 8rem;
    }

    h2 {
      font-size: 1.4rem;

      @include respond(tab) {
        font-size: 1.6rem;
      }
    }
  }

  &__name {
    margin: 0.8rem 0 1.6rem;
    font-size: 2.4rem;

    @include respond(tab) {
      margin: 1.6rem 0 1.6rem;
      font-size: 4rem;
    }

    @include respond(lap) {
      font-size: 5.6rem;
    }
  }
}
</style>
