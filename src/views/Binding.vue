<template>
  <div>
    <h4>Halaman Binding</h4>
    <p>
      <span>{{ message }}</span>
    </p>
    <p>
      <b-form-input v-model='message'/>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: '',
  }),
};
</script>
