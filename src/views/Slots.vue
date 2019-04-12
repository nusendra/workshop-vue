<template>
  <div>
    <h4>Halaman Slots</h4>
    <p>
      <span>Ini adalah Parent Component</span>
    </p>
    <hr/>
    <child>
      <p>
        <span>Ini adalah element sisipan dari parent</span>
      </p>
    </child>
  </div>
</template>

<script>
import child from '@/components/SlotsComponent.vue';

export default {
  components: { child },
};
</script>
