<template>
    <div class="posts">
        <h1 class="posts__title" :class="{'posts__title--react' : postsList.title.name == 'React', 'posts__title--js' : postsList.title.name == 'JavaScript'}">
            <img class="posts__logo" :src="postsList.title.img" alt="Post Logo" v-if="postsList.title.img">{{postsList.title.name}}
        </h1>
        <ul class="posts__list">
            <li class="post" v-for="(post, index) in postsList.posts" :key=index :class="{'post--main' : postsList.title.name == '🏆 Top Posts', 'react-teaser' : post.topic == 'react', 'vue-teaser' : post.topic == 'vue', 'angular-teaser' : post.topic == 'angular', 'svelte-teaser' : post.topic == 'svelte', 'javascript-teaser' : post.topic == 'javascript'}">
                <router-link :to=post.link>{{post.title}}</router-link>
            </li>
        </ul>
        <button class="posts__more" v-if="postsList.buttonIsActive"><a href="#">+</a></button>
    </div>
</template>

<style lang="stylus">

.posts
    text-align center
    max-width 55rem
    padding 0 .9rem
    margin 0 auto

    .posts__logo
        display inline-block
        width 30px
        height auto
        margin-right .7rem
        vertical-align middle

    .posts__title
        display inline-block
        font-size 1.5em
        margin-top 1.5em
        margin-bottom .6em
    
    .posts__title--react
        color #61dafb
    .posts__title--js
        color #f7df1e

    .posts__list
        display grid
        grid-template-columns 1fr

        .post
            border-radius 3px
            margin .7rem .6rem
            box-shadow 1px 1px 15px 4px rgba(67,38,100,0.15)
            background-color rgb(252, 252, 252) 
            a
                display block
                border-radius 3px
                padding 1.5rem 1rem 1.5rem 1rem
                color rgb(74, 174, 155)
        
        .post--main
            background-color rgba(0,143,104,0.95)
            a
                color white

        .angular-teaser
            background-image linear-gradient(135deg, #DD0031 10px, rgba(0,0,0,0.01) 0)
        .vue-teaser
            background-image linear-gradient(135deg, #41B883 10px, rgba(0,0,0,0.01) 0)
        .react-teaser
            background-image linear-gradient(135deg, #61dafb 10px, rgba(0,0,0,0.01) 0)
        .svelte-teaser
            background-image linear-gradient(135deg, #FF3E00 10px, rgba(0,0,0,0.01) 0)
        .javascript-teaser
            background-image linear-gradient(135deg, #F7DF1E 10px, rgba(0,0,0,0.01) 0)
        // .css-teaser
        //     background rgba(0,143,104,0.95) linear-gradient(135deg, #3399FE 10px, rgba(0,0,0,0.01) 0)
    
    .posts__more
        border none
        margin-top 1rem
        margin-bottom 2rem
        transition transform .15s ease

        &:hover
            transform translateY(-3px)
        a
            background-image linear-gradient(to bottom, rgb(255, 255, 255), rgb(248, 248, 248))
            border-radius 8px
            color #4aae9b
            padding 10px 20px
            border 0
            box-shadow 0 0 10px rgba(0, 0, 0, .2)
            text-decoration none
        
@media screen and (min-width: 481px)
    .posts
        .posts__list
            grid-template-columns 1fr 1fr

@media screen and (min-width: 641px)
    .posts
        .posts__list
            .post
                font-size 1.5rem

@media screen and (min-width: 1025px)
    .posts
        .posts__list
            grid-template-columns 1fr 1fr 1fr

@media screen and (min-width: 1121px)
    .posts
        .posts__list
            .post
                transition transform ease .2s
                &:hover
                    transform translateY(-3px)

</style>

<script>
export default {
    props: {
        postsList: Object,
    }
    
}
</script>
