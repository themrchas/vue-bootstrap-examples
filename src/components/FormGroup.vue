<template>
    <div>

        <div>Note the use of the label-for property will control if a element is rendered with fieldset or div </div>
        <div>Use label-for only when there is one single form input in the b-form-group component. </div>
        <div>label-cols-sm&equals;4 will make the label 4 columns wide for breakpoints at 'sm' and up</div>
        <div>label-cols-lg&equals;1 will make the label 1 columns wide for breakpoints at 'lg' and up</div>
        <!-- In this example the id in b-form-group must exist on an element within the b-form-group -->

        

        <div>
        <b-form-group
          id="fieldset-1"
          description="Let us know your name."
          label="Enter your name"
          label-for="input-1"
          valid-feedback="Thank you!"
         
          
          label-class="bg-info"
          label-cols-sm="4"  
          label-cols-lg="1"
          
        >
          <b-form-input id="input-1" v-model="name"  trim></b-form-input>
        </b-form-group>
      </div>

      <div>content-cols-sm&equals;4 will make the content 4 columns wide for breakpoints at 'sm' and up</div>
      <div>content-cols-lg&equals;1 will make the content 1 columns wide for breakpoints at 'lg' and up</div>
      <div>For viepwort sizes less than 'sm', the width:100% is set on both label end content.</div>

      <div>
        <b-form-group
          id="fieldset-1"
          description="Let us know your name."
          label="Enter your name"
          label-for="input-1"
          valid-feedback="Thank you!"
        
          
          label-class="bg-secondary"
          content-cols-sm="4"  
          content-cols-lg="1"
          label-align-sm="right"
          
        >
          <b-form-input id="input-1" v-model="name" trim></b-form-input>
        </b-form-group>
      </div>


      <div class="mt-5 h3">Validation Example</div>

      <b-form-group
        label="Name:"
        label-for="name"
        label-cols-sm="1"
        label-align-sm="right"
      >
        <b-form-input id="name"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Age:"
        label-for="age"
        label-cols-sm="1"
        label-align-sm="right"
        :invalid-feedback="validAge"
        :state=ageState
      >
        <b-form-input id="age" :state="ageState" v-model="userAge"></b-form-input>
        <b-form-invalid-feedback>Invalid entry</b-form-invalid-feedback>
        <b-form-valid-feedback>Yes - money</b-form-valid-feedback>
      </b-form-group>

      <div>User age is {{ userAge }}</div> 




    </div>
</template>

<script>

//https://bootstrap-vue.org/docs/components/form

import { ref, computed } from 'vue';

export default {
    name: 'form-group',
    setup() {

      const userAge = ref(5);

      const ageState = ref(false);


      const validAge = computed(() => {
        
        if ( userAge.value == "5" )
          ageState.value = true;
        else
          ageState.value  = false
      });

      

        return {userAge,validAge,ageState}
        
    },



}


</script>