<template>
  <div>
    <Navbar></Navbar>
    <section class="home__main">
      <img src="../assets/img/logo-fancy.svg" alt="Main Logo" class="main__logo">
      <h1>Front-End Web Development,<br>Chewed Up</h1>
      <p>Angular 2+, Vue.js, React, Svelte<br>JavaScript, CSS...</p>
    </section>
    <TopPosts></TopPosts>
  </div>
</template>

<style lang="stylus">
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
    font-size 1.3em
    margin-top 1em
    margin-bottom .5em
    text-align center
    padding 0 1.5em
  
  p
    line-height 1.7rem
</style>


<script>
  import Navbar from '@/components/Navbar'
  import TopPosts from '@/components/TopPosts'
  export default {
    components: {
      Navbar,
      TopPosts
    }

  }
</script>
