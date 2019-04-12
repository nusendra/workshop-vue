<template>
  <div>
    <h4 v-if='check'>Conditional Rendering</h4>
    <p/>
    <b-row>
      <b-col>
        <label><input type='checkbox' v-model='check'/> Check</label>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    check: true,
  }),
};
</script>
