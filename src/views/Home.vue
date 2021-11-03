<template>
  <div class="home flow" style="--flow-space: 4rem">
    <h1>Home</h1>
    <p class="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus
      sapiente error sed, cum quam consectetur doloremque molestiae delectus
      illum accusantium deserunt neque iusto cupiditate inventore repellendus
      consequatur veniam impedit eos. Dolore magnam nemo ex sed est culpa unde
      obcaecati officia esse nihil eius magni aliquam nesciunt quo fugit
      officiis deserunt id iusto beatae architecto, itaque exercitationem nulla.
      Adipisci deleniti nihil molestiae repellendus incidunt, magnam quae,
      delectus impedit repudiandae eius pariatur voluptatum eveniet iure officia
      saepe odit. Nesciunt sequi inventore ipsa voluptates, harum repudiandae,
      nobis accusamus natus quasi laborum quas dolores magnam voluptatem! Dicta
      vel, voluptatum laborum mollitia beatae sequi.
    </p>
    <button>Some text</button>
    <NumberedTitle number="01" text="typography" />
    <LargeButton class="uppercase ff-serif fs-6 text-dark bg-accent" />
  </div>
</template>

<script>
import NumberedTitle from "@/components/NumberedTitle.vue";
import LargeButton from "@/components/LargeButton.vue";
export default {
  name: "Home",
  components: { NumberedTitle, LargeButton },
};
</script>

<style lang="scss" scoped>
.home {
  border: 1px solid red;
  min-height: 100vh;
  background-image: url("~@/assets/home/background-home-desktop.jpg");
}
</style>
