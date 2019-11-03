<template>
  <div class>Please wait..</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  //identical to
  //methods: {...mapActions(["finalizeLogin"]), xxx}

  created() {
    this.finalizeLogin(window.location.hash);
  } //after permission and redirect to callback url, using router
  //the component gets created, and get token from url on its lifecycle
};
</script>