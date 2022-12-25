<template>
  <div class="about">
    <img src="@/assets/image/16.jpg" alt="">
    <h1>關於變種吉娃娃</h1>
    
    <collapse/>
  </div>
</template>
<script>
import collapse from '@/components/collapse.vue'
  export default {
  components: {
    collapse,
  },
    
  }
</script>
<style scoped lang="scss">
.about{
  width: 80%;
  height: 300px;
  margin: auto;
  img{
    width: 100%;
  }
}
</style>
