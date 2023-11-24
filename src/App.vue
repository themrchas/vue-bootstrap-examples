<template>

  <div>

  <Checkbox />

  <FormGroup />

  <FormExample />

</div>
  
</template>

<script>
import Checkbox from './components/Checkbox.vue';
import FormGroup from './components/FormGroup.vue'
import FormExample from './components/FormExample.vue'

export default {
  name: 'App',
  components: {
    Checkbox, FormGroup, FormExample
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
