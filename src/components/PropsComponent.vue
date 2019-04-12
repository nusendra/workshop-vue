<template>
  <div>
    <span>Child Component</span>
    <ol>
      <li v-for='(item, index) in fruits' :key='index'>{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['fruits'],
};
</script>
