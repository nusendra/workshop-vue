<template>
  <div>
    <h4>Communication with API Service</h4>
    <span v-if='!users'>Loading ....</span>
    <table class='table table-bordered table-hover' v-if='users'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(user, index) in users' :key='index'>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.address }}</td>
        </tr>
      </tbody>
    </table>
    <p/>
    <hr/>
    <h4>Post Data</h4>
    <b-row>
      <b-col col lg='5'>
        <b-form-input v-model='name'/>
      </b-col>
      <b-button variant='success' @click='send'>SEND !</b-button>
    </b-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: null,
    name: '',
  }),
  created() {
    this.axios.get('https://surabayadev-workshop-vue.herokuapp.com/users').then((result) => {
      this.users = result.data;
    });
  },
  methods: {
    send() {
      this.axios.post('https://surabayadev-workshop-vue.herokuapp.com/users', {
        name: this.name,
      }).then((result) => {
        console.log(result.data);
        alert(result.data.message);
      });
    },
  },
};
</script>
