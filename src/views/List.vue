<template>
  <div>
    <h4>List Rendering</h4>
    <p/>
    <b-row>
      <table class='table'>
        <tbody>
          <tr v-for='(item, index) in items' :key='index'>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </b-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { id: 1, name: 'Abdul' },
      { id: 2, name: 'Boby' },
      { id: 3, name: 'Caca' },
      { id: 4, name: 'Dona' },
      { id: 5, name: 'Erna' },
    ],
  }),
};
</script>
