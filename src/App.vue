<template>

  <div>

  <Checkbox />

  <FormGroup />

</div>
  
</template>

<script>
import Checkbox from './components/Checkbox.vue';
import FormGroup from './components/FormGroup.vue'

export default {
  name: 'App',
  components: {
    Checkbox, FormGroup
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
