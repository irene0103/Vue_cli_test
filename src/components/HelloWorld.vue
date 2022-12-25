<template>
  <Carousel autoplay v-model="value" loop height="800px">
    <CarouselItem>
      <div class="demo-carousel">
        <img src="@/assets/image/1.jpg" alt="">
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="@/assets/image/2.jpg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="@/assets/image/3.jpg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="@/assets/image/4.jpg" alt=""></div>
    </CarouselItem>
  </Carousel>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    content: String,
  },
  data () {
          return {
              value: 0
          }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,p{
  color: navy;
}
.demo-carousel{
  img{
    width: 100%;
    margin: auto;
    
  }
}
</style>
