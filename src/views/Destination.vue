<template>
  <h1>Destination</h1>
  <p>{{ destination }}</p>
</template>

<script>
import store from "@/data.json";
export default {
  computed: {
    destination() {
      return store.destinations;
    },
  },
};
</script>
