<template>
  <div class="home">
    <Navbar></Navbar>
    <section class="home__main">
      <img src="../assets/img/logo-fancy.svg" alt="Main Logo" class="main__logo">
      <h1>Front-End Web Development,<br>Chewed Up</h1>
      <p>Angular 2+, Vue.js, React, Svelte<br>JavaScript, CSS...</p>
    </section>
    <Posts :postsList="mainPosts"></Posts>
    <Subscribe></Subscribe>
    <Posts :postsList="reactMainPosts"></Posts>
    <hr>
    <Posts :postsList="jsMainPosts"></Posts>
    <Advertisement :adList=ads></Advertisement>
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
  import Posts from '@/components/Posts'
  import Subscribe from '@/components/Subscribe'
  import Advertisement from '@/components/Advertisement'

  export default {
    components: {
      Navbar,
      Posts,
      Subscribe,
      Advertisement
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
        ads: {
          ad1: {
            title: 'Hotjar',
            icon: 'https://cdn4.buysellads.net/uu/1/42500/1546351188-1538062800-80x80-hotjar-icon.png',
            content: 'See how your visitors are really using your website.'
          },
          ad2: {
            title: 'Slack',
            icon: 'https://cdn4.buysellads.net/uu/1/46074/1559076859-20190116_slack_icon_80x80_transparent.png',
            content: 'Bring your team together with Slack, the collaboration hub for work.'
          },
          ad3: {
            title: 'VSCode Power User',
            icon: 'https://a.paddle.com/v2/click/16413/40105?link=1227',
            content: 'A video course to help you become a VSCode rock star! '
          },
        }
      }
    }

  }
</script>
