<template>
  <div>

    <div class="h3 mt-3">Form examples</div>

    <div class="h4 mt-3">Vanilla HTML</div>

    <div class="mt-3">The form elements' validation is performed when submit button is clicked.</div>
    <div class="mt-3 mb-2">The 'required' attribute is set on the input control and is enforced upon submit. The 'action'
      property on the form element will not be executed.</div>

    <form id="html-form" action="#">

      <label class="mr-3" for="vanilla-input">Type in text</label>
      <input type="text" id="vanilla-input" required>

      <button type="submit">Submit form</button>

    </form>

    <div class="mt-3">The form elements' validation explicitly not performed when submit button is clicked using
      'novalidate' attribute on the form element.</div>
    <div class="mt-3">The 'required' attribute is set on the input, but 'novalidate' is set overriding the 'required'
      attribute.</div>


    <form id="html-form-2" action="#" novalidate>

      <label class="mr-3" for="vanilla-input-2">Type in text</label>
      <input type="text" id="vanilla-input-2" required>

      <button type="submit">Submit form</button>

    </form>

    <div class="mt-3">The form elements' validation explicitly not performed when submit button is clicked using
      'formnovalidate' attribute on the submit button.</div>
    <div class="mt-1">The 'required' attribute is set on the input, but 'formnovalidate' is set overriding the 'required'
      attribute.</div>


    <form id="html-form-2" action="#">

      <label class="mr-3" for="vanilla-input-3">Type in text</label>
      <input type="text" id="vanilla-input-3" required>

      <button type="submit" formnovalidate>Submit form</button>

    </form>


    <div class="h3 mt-3">BootstrapVue</div>


    <div class="mt-3 mb-2 h5">First example using b-form and error checking done manually using
      invalid-feedback/valid-feedback.</div>
    <div>All validation is done using custom vue functions as well 'state' property</div>
    <div>Form will be submitted regardless of input validation failing.</div>
    <b-form id="b-form-id-1" @submit="onSubmit" class="mt-3">

      <b-form-group id="input-group-1" label="Example using strings for invalid-feedback and valid-feedback "
        label-for="b-input-1" :state="nameIsValid" invalid-feedback="static invalidFeedback message"
        valid-feedback="static Feedback is valid message">
        <b-form-input id="b-input-1" v-model="vueForm.name" placeholder="Enter name" :state="nameIsValid"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>


    </b-form>

    <div class="mt-3 mb-2 h5">Second example using b-form and built-in browser based error checking only.</div>
    <div>Setting &lt;form....validated&gt; will put the bootstrap class 'was-validated' on the form element. This causes
      the validation to occur upon page load (before form is submitted).</div>
    <div>It appears that 'validated' does not need true or false assigned. The 'required' attribute must be used to have
      'pattern' property enforced.</div>
    <b-form class="mt-3" id="b-form-id-2" @submit="onSubmit2" validated>

      <b-form-group id="input-group-2" label="Car make" label-for="b-input-2"
        invalid-feedback="static invalidFeedback message" valid-feedback="static Feedback is valid message">
        <b-form-input id="b-input-2" type="text" placeholder="Enter car brand" pattern="money" required></b-form-input>

      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>


    </b-form>


    <div class="mt-3 mb-2 h5">Third example using b-form and built-in browser based error checking only.</div>
    <div>The property 'validated' is not used so no extra bootstrap class is added to the form element.</div>
    <div>Validation will occur when Submit button is clicked. If validation fails, submission will not complete. Both
      'require' and 'pattern' will be checked.</div>
    <div>No custom message will be shown and no class (color) will be applied to input element to differentiate between
      valid and invalid input.</div>
    <b-form class="mt-3" id="b-form-id-3" @submit="onSubmit3">
      <b-form-group id="input-group-3" label="Type of animal" label-for="b-input-3"
        invalid-feedback="static invalidFeedback message" valid-feedback="static Feedback is valid message">
        <b-form-input id="b-input-3" type="text" placeholder="Animal type" pattern="cat" required></b-form-input>

      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>

    </b-form>



    <div class="mt-3 mb-2 h5">Fourth example using b-form and built-in browser based error checking only.</div>
    <div>The property 'novalidate' will prevent built-in browser based constraint checking.</div>
    <div>No custom message will be shown and no class (color) will be applied to input element to differentiate between
      valid and invalid input.</div>
    <b-form class="mt-3" id="b-form-id-4" @submit="onSubmit4" novalidate>
      <b-form-group id="input-group-4" label="Country" label-for="b-input-4"
        invalid-feedback="static invalidFeedback message" valid-feedback="static Feedback is valid message">
        <b-form-input id="b-input-4" type="text" placeholder="Country" pattern="Belgique" required></b-form-input>

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
          car: '',
          animal: '',
          country: ''
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

        const onSubmit3 = (event) => {
            alert('yes - money')
          //  event.preventDefault()
            alert(JSON.stringify(vueForm))
        }

        const onSubmit4 = (event) => {
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

        

        return { vueForm, onSubmit, onSubmit2, onSubmit3, onSubmit4, nameIsValid, carIsValid  }

        
    }
}


</script>