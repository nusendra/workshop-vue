<template>
  <div>
    <h4>Halaman Props</h4>
    <p>
      <span>Ini adalah Parent Component</span>
    </p>
    <hr/>
    <child :fruits='fruits'/>
  </div>
</template>

<script>
import child from '@/components/PropsComponent.vue';

export default {
  components: { child },
  data: () => ({
    fruits: ['apple', 'banana', 'cherry'],
  }),
};
</script>
