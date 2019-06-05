<template>
    <div class="topposts">
        <h1 class="topposts__title">🏆 Top Posts</h1>
        <ul class="posts">
            <li class="post" v-for="(post, index) in posts" :key=index :class="{'react-teaser' : post.topic == 'react', 'vue-teaser' : post.topic == 'vue', 'angular-teaser' : post.topic == 'angular', 'svelte-teaser' : post.topic == 'svelte'}">
                <router-link :to=post.link>{{post.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus">

.topposts
    text-align center
    max-width 55rem
    padding 0 .9rem
    margin 0 auto

    .topposts__title
        font-size 1.5em
        margin-top 1.5em

    .posts
        display grid
        grid-template-columns 1fr

        .post
            border-radius 3px
            margin .7rem .6rem
            box-shadow 1px 1px 15px 4px rgba(67,38,100,0.15)
            a
                display block
                border-radius 3px
                padding 1.5rem 1rem 1.5rem 1rem
                color white

        .angular-teaser
            background rgba(0,143,104,0.95) linear-gradient(135deg, #DD0031 10px, rgba(0,0,0,0.01) 0)
        .vue-teaser
            background rgba(0,143,104,0.95) linear-gradient(135deg, #41B883 10px, rgba(0,0,0,0.01) 0)
        .react-teaser
            background rgba(0,143,104,0.95) linear-gradient(135deg, #61dafb 10px, rgba(0,0,0,0.01) 0)
        .svelte-teaser
            background rgba(0,143,104,0.95) linear-gradient(135deg, #FF3E00 10px, rgba(0,0,0,0.01) 0)
        // .javascript-teaser
        //     background rgba(0,143,104,0.95) linear-gradient(135deg, #F7DF1E 10px, rgba(0,0,0,0.01) 0)
        // .css-teaser
        //     background rgba(0,143,104,0.95) linear-gradient(135deg, #3399FE 10px, rgba(0,0,0,0.01) 0)
        
@media screen and (min-width: 481px)
    .topposts
        .posts
            grid-template-columns 1fr 1fr

@media screen and (min-width: 641px)
    .topposts
        .posts
            .post
                font-size 1.5rem

@media screen and (min-width: 1025px)
    .topposts
        .posts
            grid-template-columns 1fr 1fr 1fr

@media screen and (min-width: 1121px)
    .topposts
        .posts
            .post
                transition transform ease .2s
                &:hover
                    transform translateY(-3px)

</style>

<script>
export default {
    data() {
        return {
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
        }
    }
    
}
</script>
