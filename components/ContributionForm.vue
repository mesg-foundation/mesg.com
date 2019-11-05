<template>
  <Button
    v-if="btnWhite"
    white
    class="typeform-share button"
    href="https://mesgfoundation.typeform.com/to/bOJ0qz"
    data-mode="popup"
    data-submit-close-delay="0"
  >Add contribution</Button>
  <Button
    v-else
    primary
    class="typeform-share button"
    href="https://mesgfoundation.typeform.com/to/bOJ0qz"
    data-mode="popup"
    data-submit-close-delay="0"
  >Add contribution</Button>
</template>

<script>
import Button from "@mesg-components/button";
export default {
  components: {
    Button
  },
  props: {
    btnWhite: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    (function() {
      var qs,
        js,
        q,
        s,
        d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm_share",
        b = "https://embed.typeform.com/";
      if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q);
      }
    })();
  }
};
</script>

