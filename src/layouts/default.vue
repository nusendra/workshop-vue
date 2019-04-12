<template>
  <div>
    <b-nav>
      <b-nav-item>
        <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/binding">Binding</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/computed">Computed</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/conditional">Conditional</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/list">List</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/event">Event</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/login">Login Page</router-link>
      </b-nav-item>
    </b-nav>
    <hr/>
    <slot/>
    <div class='footer'>
      <span>Workshop SurabayaDev - 2019</span>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  height: 40px;
  line-height: 40px;
}
</style>
