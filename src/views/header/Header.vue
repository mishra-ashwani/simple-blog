<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <Navigation />
      </div>
      <div class="col-sm-2">
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import UserInfo from "./UserInfo.vue";

export default {
  name: "Header",
  components: {
    Navigation,
    UserInfo,
  },
};
</script>   

<style>
</style>