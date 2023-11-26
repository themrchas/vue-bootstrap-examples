<template>

    <div>

    <div class="h3 mt-3">Form examples</div>

    <div class="h4 mt-3">Vanilla HTML</div>

    <div class="mt-3">The form elements' validation is performed when submit button is clicked.</div>
    <div class="mt-3 mb-2">The 'required' attribute is set on the input control and is enforced upon submit. The 'action' property on the form element will not be executed.</div>
    
    <form id="html-form" action="#">

        <label class="mr-3" for="vanilla-input">Type in text</label>
       <input type="text" id="vanilla-input" required>

       <button type="submit">Submit form</button>

    </form>     

    <div class="mt-3">The form elements' validation explicitly not performed when submit button is clicked using 'novalidate' attribute on the form element.</div>
    <div class="mt-3">The 'required' attribute is set on the input, but 'novalidate' is set overriding the 'required' attribute.</div>
    

    <form id="html-form-2" action="#" novalidate>

        <label class="mr-3" for="vanilla-input-2">Type in text</label>
       <input type="text" id="vanilla-input-2" required>

       <button type="submit">Submit form</button>

    </form> 
    
    <div class="mt-3">The form elements' validation explicitly not performed when submit button is clicked using 'formnovalidate' attribute on the submit button.</div>
    <div class="mt-1">The 'required' attribute is set on the input, but 'formnovalidate' is set overriding the 'required' attribute.</div>


    <form id="html-form-2" action="#" >

        <label class="mr-3" for="vanilla-input-3">Type in text</label>
       <input type="text" id="vanilla-input-3" required>

       <button type="submit" formnovalidate>Submit form</button>

    </form> 
    
        
    <div class="h4 mt-3">BootstrapVue</div>


    <div class="mt-3 mb-2 h6">Example using b-form and error checking done manually using invalid-feedback/valid-feedback.</div>
    
    <b-form id="b-form-id-1" @submit="onSubmit">

        <b-form-group id="input-group-1" label="Example using strings for invalid-feedback and valid-feedback " label-for="b-input-1" :state="nameIsValid" invalid-feedback="static invalidFeedback message" valid-feedback="static Feedback is valid message"> 
        <b-form-input
          id="b-input-1"
          v-model="vueForm.name"
          placeholder="Enter name"
       
          :state="nameIsValid"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>


    </b-form>



    <b-form class="mt-3" id="b-form-id-2" @submit="onSubmit2" validated=true>

<b-form-group id="input-group-2" label="Form has validated=true" label-for="b-input-2" :state="carIsValid" invalid-feedback="static invalidFeedback message" valid-feedback="static Feedback is valid message"> 
<b-form-input
  id="b-input-2"
  v-model="vueForm.car"
  placeholder="Enter car brand"
  required

  :state="carIsValid"
></b-form-input>

</b-form-group>

<b-button type="submit" variant="primary">Submit</b-button>


</b-form>


    </div>



</template>

<script>

import { ref, computed } from 'vue';


export default {
    name: 'form-example',
    setup() {

        //https://bootstrap-vue.org/docs/components/form-checkbox

        

        const vueForm = ref({
          name: '',
          car: ''
        })

        const onSubmit = (event) => {
            alert('yes - money')
          //  event.preventDefault()
            alert(JSON.stringify(vueForm))
        }

        const onSubmit2 = (event) => {
            alert('yes - money')
          //  event.preventDefault()
            alert(JSON.stringify(vueForm))
        }

        
        const nameIsValid = computed( _ => {
            console.log('executing nameIsValid with form',vueForm);
            return vueForm.value.name == "money"
        });

        const carIsValid = computed( _ => {
            console.log('executing carIsValid with form',vueForm);
            return vueForm.value.car == "Subaru"
        });

        

        return { vueForm, onSubmit, onSubmit2, nameIsValid, carIsValid  }

        
    }
}


</script>