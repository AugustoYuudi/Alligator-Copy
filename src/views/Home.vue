<template>
  <div class="home">
    <Navbar></Navbar>
    <section class="home__main">
      <img src="../assets/img/logo-fancy.svg" alt="Main Logo" class="main__logo">
      <h1 class="main__title">Front-End Web Development,<br>Chewed Up</h1>
      <p class="main__subtitle">Angular 2+, Vue.js, React, Svelte<br>JavaScript, CSS...</p>
    </section>
    <Posts :postsList="mainPosts"></Posts>
    <Newsletter :settings=newsletterSettings></Newsletter>
    <Posts :postsList="reactMainPosts"></Posts>
    <hr>
    <Posts :postsList="jsMainPosts"></Posts>
    <Footer></Footer>
    <Sponsor :sponsorData=sponsorData></Sponsor>
  </div>
</template>

<style lang="stylus">
.home
  hr
    width 15%
    border 0
    border-top 4px solid #fae042
    margin 2.5rem auto 0 auto

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
  .home
    .home__main
      .main__logo
        width 180px
        height 180px
      
      .main__title
        font-weight 200
        line-height 1
        font-size 3.7em
      
      .main__subtitle
        font-size 1.2em
</style>


<script>
  import Navbar from '@/components/Navbar'
  import Posts from '@/components/Posts'
  import Newsletter from '@/components/Newsletter'
  import Footer from '@/components/Footer'
  import Sponsor from '@/components/Sponsor'
  export default {
    components: {
      Navbar,
      Posts,
      Newsletter,
      Footer,
      Sponsor
    },

    data() {
      return {
        mainPosts: {
          title: {
            name: '🏆 Top Posts',
            img: ''
          },
          buttonIsActive: false,
          posts: {
            post1: {
              title: 'Building a modal component with Vue.js',
              link: '#',
              topic: 'vue',
            },
            post2: {
              title: 'Building a modal component with React',
              link: '#',
              topic: 'react'
            },
            post3: {
              title: 'Building a modal component with Angular',
              link: '#',
              topic: 'angular'
            },
            post4: {
              title: 'Building a modal component with Svelte',
              link: '#',
              topic: 'svelte'
            }
          }
        },
        reactMainPosts: {
          title: {
            name: 'React',
            img: 'https://d33wubrfki0l68.cloudfront.net/83a655ba436af2f8cc7d826aecaa94cb2a261c5b/0041c/images/logos/react-logo.svg'
          },
          buttonIsActive: true,
          posts: {
            post1: {
              title: 'Building a modal component with React',
              link: '#',
              topic: 'react'
            },
            post2: {
              title: 'Building a modal component with React',
              link: '#',
              topic: 'react'
            },
            post3: {
              title: 'Building a modal component with React',
              link: '#',
              topic: 'react'
            },
            post4: {
              title: 'Building a modal component with React',
              link: '#',
              topic: 'react'
            }
          }
        },
        jsMainPosts: {
          title: {
            name: 'JavaScript',
            img: 'https://d33wubrfki0l68.cloudfront.net/041b1fc21a460c50d6231f6c30666e4b46272708/d0092/images/logos/js-logo.svg'
          },
          buttonIsActive: true,
          posts: {
            post1: {
              title: 'Building a modal component with javascript',
              link: '#',
              topic: 'javascript'
            },
            post2: {
              title: 'Building a modal component with javascript',
              link: '#',
              topic: 'javascript'
            },
            post3: {
              title: 'Building a modal component with javascript',
              link: '#',
              topic: 'javascript'
            },
            post4: {
              title: 'Building a modal component with javascript',
              link: '#',
              topic: 'javascript'
            }
          }
        },
        newsletterSettings: {
          type: 'default',
          title: '🤹 Subscribe & stay in the loop:',
          placeholder: 'your email'
        },

        sponsorData: {
          name: 'Monday',
          logo: 'https://cdn4.buysellads.net/uu/1/42500/1546366658-1538019426-Monday-logo-250-100.png',
          slogan: 'A new way to manage your work',
          text: "The revolutionary project management tool is here and it's visual. Start Your Free Trial Now",
          link_text: 'Start free trial'

        }
      }
    }

  }
</script>
