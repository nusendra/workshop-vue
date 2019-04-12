<template>
  <div>
    <input v-model='awal' type='number'/> +
    <input v-model='akhir' type='number'> =
    <span>{{ hasilJumlah }}</span>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    awal: 0,
    akhir: 0,
  }),
  computed: {
    hasilJumlah() {
      return parseInt(this.awal, 0) + parseInt(this.akhir, 0);
    },
  },
};
</script>
