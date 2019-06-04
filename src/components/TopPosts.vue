<template>
    <div class="topposts">
        <h1 class="topposts__title">🏆 Top Posts</h1>
        <ul class="posts">
            <li class="post" v-for="(post, index) in posts" v-bind:key=index>
                <router-link :to=post.link>{{post.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus">

.topposts
    text-align center

    .topposts__title
        font-size 1.5em
        margin-top 1.5em
        margin-bottom 1em

    .posts
        display grid
        grid-template-columns .85fr
        justify-content space-evenly
        grid-row-gap 1rem

        .post
            border-radius 3px
            padding 1.85rem
            background rgba(0,143,104,0.95) linear-gradient(135deg, tomato 10px, rgba(0,0,0,0.01) 0)
            
            a
                color white


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
