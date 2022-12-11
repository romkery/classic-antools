<template>
  <component :is="dynamicComponent" :props="$props" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    folder: {
      type: String,
      required: false,
    },
  },

  computed: {
    dynamicComponent() {
      console.log(name);
      return defineAsyncComponent(() =>
        this.folder
          ? import(`@/components/icons/${this.folder}/${this.name}.vue`)
          : import(`@/components/icons/${this.name}.vue`)
      );
    },
  },
};
</script>
