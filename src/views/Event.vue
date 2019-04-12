<template>
  <div>
    <h4>Event Handling</h4>
    <p/>
    <b-row>
      <b-col>
        <b-button variant='success' @click='alertEvent'>Alert !!</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'Hi SurabayaDev',
  }),
  methods: {
    alertEvent() {
      alert(this.message);
    },
  },
};
</script>
