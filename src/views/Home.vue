<template>
  <div class="home">
    <Navbar></Navbar>
    <section class="home__main">
      <img src="../assets/img/logo-fancy.svg" alt="Main Logo" class="main__logo">
      <h1>Front-End Web Development,<br>Chewed Up</h1>
      <p>Angular 2+, Vue.js, React, Svelte<br>JavaScript, CSS...</p>
    </section>
    <TopPosts></TopPosts>
    <Subscribe></Subscribe>
  </div>
</template>

<style lang="stylus">
*
  margin 0
  padding 0
  font-weight 300
  line-height 1.6
  list-style none
  text-decoration none

br
  line-height 0

.home
  .home__main
    background-image linear-gradient(to right, rgba(107,183,86,0.95), #008f68)
    text-align center
    color white

    &::after
      content ''
      display block
      margin 0 auto
      width 0
      height 0
      border-top 5rem transparent solid
      border-left 50vw white solid
      border-right 50vw white solid 
      background-image linear-gradient(to right, rgba(107,183,86,0.95), #008f68)


    .main__logo
      height 110px
      width 110px
      margin-top 2rem


    h1
      font-size 1.8em
      margin-bottom .5em
      text-align center
      line-height 1em
      font-weight 200
    
    p
      line-height 1.7rem

@media screen and (min-width: 641px)
  .home__main
    .main__logo
      width 180px
      height 180px
    
    h1
      font-size 3.4em
    
    p
      font-size 1.2em
</style>


<script>
  import Navbar from '@/components/Navbar'
  import TopPosts from '@/components/TopPosts'
  import Subscribe from '@/components/Subscribe'
  export default {
    components: {
      Navbar,
      TopPosts,
      Subscribe
    }

  }
</script>
