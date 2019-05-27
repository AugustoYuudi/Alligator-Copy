<template>
    <div class="navbar">
        <div>
            <a href="#" class="navbar__logo" v-if="$route.name !== 'home'"></a>

            <a href="#" class="navbar__explore" v-if="$route.name === 'home'">⚡ Explore</a>

            <div class="navbar__search__container">
                <input type="search" class="navbar__search__input" placeholder="しらいし">

                <div class="expander__dot__container" v-on:click="showPages">
                    <span class="expander__dot"></span>
                    <span class="expander__dot"></span>
                    <span class="expander__dot"></span>
                </div>
            </div>

            <div class="navbar__twitter">
                <img src="../assets/img/twitter.png" alt="">
            </div>
        </div>

        <div class="navbar__pages" v-if="this.pagesListIsActive">
            <ul>
                <li v-for="(pagina, index) in paginas" :key=index class="pages__page">
                    {{pagina}}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="stylus">
    *
        margin 0
        padding 0
        list-style none
        text-decoration none

    .navbar
        display flex
        flex-flow column
        justify-content center
        min-height 3.75rem
        background-color #002b36

        &:nth-child(1)
            flex 1
            white-space nowrap
            min-height 3.75rem

            .navbar__explore
                display inline-block
                margin-left 1.2rem
                color white

            .navbar__search__container
                display inline-block
                float right
                margin-right 3rem
                background url(../assets/img/search.png)
                background-size 1.7rem
                background-repeat no-repeat
                background-position -1% 7%
                border 1px black solid
                border-radius 8px
                width 90px

                .navbar__search__input
                    background transparent
                    border none
                    margin-left 25%
                    width 75%
                    height 28px

            .expander__dot__container
                display inline-block
                margin-left 1rem
                .expander__dot
                    background-color white
                    display inline-block
                    height 5px
                    width 5px
                    border-radius 50%
                    margin-right 0.1rem

            .navbar__twitter
                display none

        .navbar__pages
            flex 1
            background-color tomato
            ul
                display flex
                flex-flow column nowrap
                align-items stretch
                text-align center

                .pages__page
                    margin-top 1em
                    height 3em

// @media screen and (min-width: 375px)

// @media screen and (min-width: 425px)

// @media screen and (min-width: 768px)

// @media screen and (min-width: 1024px)

// @media screen and (min-width: 1120px)
    
</style>

<script>
export default {
    data() {
        return {
            paginas: [
                'Angular', 
                'Vue.js', 
                'React', 
                'Javascript',
                'CSS',
                'Svelte',
                'Angular', 
                'Vue.js', 
                'React', 
                'Javascript',
                'CSS',
                'Svelte', 
            ],

            pagesListIsActive: false
        }
    },

    methods: {
        showPages: function() {
            this.pagesListIsActive = !this.pagesListIsActive
        }
    }
}
</script>
