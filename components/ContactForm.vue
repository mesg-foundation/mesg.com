<template>
  <form name="contact" method="POST" netlify flex column>
    <div flex row space-between>
      <label>Name:</label>
      <input type="text" name="name" />
    </div>
    <div flex row space-between>
      <label>Email:</label>
      <input type="email" name="email" />
    </div>
    <div flex row space-between>
      <label>Message:</label>
      <textarea name="message" rows="5"></textarea>
    </div>
    <div flex row data-netlify-recaptcha></div>
    <Button submit small primary>Send</Button>
  </form>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button
  }
  // methods: {
  //   submit () {
  //     e.preventDefault();
  //     var $form = $(this);
  //     $.post($form.attr("action"), $form.serialize()).then(function() {
  //       alert("Thank you!");
  //     });
  //   }
  // }
}
</script>


<style scoped>
label, input, textarea {
  font-family: Quicksand;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #251440;
  color: var(--dark-blue-grey);
}

input, textarea {
  margin-bottom: 20px;
  width: 300px;
  max-width: 75%;
}
</style>
