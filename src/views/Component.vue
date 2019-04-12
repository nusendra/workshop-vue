<template>
  <div>
    <h4>Halaman Component</h4>
    <p>
      <span>Ini adalah Parent Component</span>
    </p>
    <hr/>
    <child/>
  </div>
</template>

<script>
import child from '@/components/ChildComponent.vue';

export default {
  components: { child },
};
</script>
