<template>
  <div>

    <div>Do not use label-for on the b-form-group enclosing certian components to include b-form-checkbox-group</div>

<b-form-group label="Using options array:" v-slot="{ ariaDescribedby }" >
      <b-form-checkbox-group
        id="checkbox-group-LEGAD"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
        stacked
        
       ></b-form-checkbox-group>
    </b-form-group>

  <div>You have selected options {{ selected }}</div>  


  <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }" >
      <b-form-checkbox-group
        id="checkbox-group-SNR"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
        stacked
        
       ></b-form-checkbox-group>
    </b-form-group>




  </div>
</template>

<script>

import { ref } from 'vue';

export default {
    name: 'checkbox',
    setup() {

        //https://bootstrap-vue.org/docs/components/form-checkbox

     
        const selected = ref([]); // Must be an array reference!
    
        const options = [
          { text: 'Approved', value: 'approved' },
          { html:'<b>Rejected</b>', text: 'Rejected', value: 'rejected' },
          { text: 'N/A', value: 'na' },
          { text: 'Other', value: 'other' }
        ];

        return {selected, options}
        
    }
}


</script>