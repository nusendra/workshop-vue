<template>
  <div>
    <h4>Computed Properties</h4>
    <p/>
    <b-row>
      <b-col col lg='2'>
        <b-form-input v-model="awal" type='number' placeholder="Angka Pertama"/>
      </b-col>
      <b-col col lg='2'>
        <b-form-input v-model="akhir" type='number' placeholder="Angka Kedua"/>
      </b-col>
      <b-col col lg='2'>
        <b-form-input v-model="hasil" type='number' placeholder="Hasil"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    awal: 0,
    akhir: 0,
  }),
  computed: {
    hasil() {
      return parseInt(this.awal, 0) + parseInt(this.akhir, 0);
    },
  },
};
</script>
