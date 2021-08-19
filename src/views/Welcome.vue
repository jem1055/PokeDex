<template>
  <div class="h-full gb-flex-center p-5  bg-gray-50">
    <introduction/>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  components:{
    introduction: ()=> import("../components/welcome/welcome.vue")
  }
};
</script>