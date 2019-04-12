<template>
  <b-container>
    <component :is='layout'>
      <router-view/>
    </component>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    defaultLayout: 'default',
  }),
  computed: {
    layout() {
      return this.$route.meta.layout || this.defaultLayout;
    },
  },
};
</script>
