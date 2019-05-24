<template>
    <div class="navbar">
        <ul>
            <li class="navbar__logo" v-if="$route.name !== 'home'">
                <a href="#" ></a>
            </li>

            <li class="navbar__explore" v-if="$route.name === 'home'">
                <a href="#">⚡ Explore</a>
            </li>

            <li class="navbar__pages" v-if="this.pagesListIsActive">
                <ul>
                    <li v-for="(pagina, index) in paginas" :key=index class="pages__page">
                        {{pagina}}
                    </li>
                </ul>
            </li>

            <li class="navbar__search__container">
                <input type="search" class="navbar__search" placeholder="しらいし">
            </li>

            <li class="navbar__menu__expander" v-on:click="showPages">
                <span class="expander__dot"></span>
                <span class="expander__dot"></span>
                <span class="expander__dot"></span>
            </li>

            <li class="navbar__twitter">
                <img src="../assets/img/twitter.png" alt="">
            </li>
        </ul>
    </div>
</template>

<style lang="stylus">
    *
        margin 0
        padding 0
        list-style none
        text-decoration none

    .navbar

        ul
            display flex
            flex-wrap wrap
            padding-top 1.3rem
            padding-bottom 0.9rem
            background-color #002b36

            .navbar__explore
                flex 1 0
                margin-left 1rem
                white-space nowrap
                a
                    color white
        
            .navbar__search__container
                flex 3 0
                background url(../assets/img/search.png)
                background-size 1.7rem
                background-repeat no-repeat
                background-position -1% 7%
                border 1px black solid
                border-radius 8px
                margin-left 4rem
                
                .navbar__search
                    height 2rem
                    margin-left 25%
                    border none
                    background transparent
                    width 75%

                    &::placeholder
                        color white

            .navbar__pages
                order 2
                flex-basis 100%
                ul
                    display flex
                    flex-flow column nowrap
                    align-items stretch
                    text-align center

                    .pages__page
                        font-size 1.5rem
                        padding-top 1.3rem
                        padding-bottom 1.3rem

            .navbar__menu__expander
                flex 1 0
                padding-top 0.3rem
                margin-left 1rem
                margin-right 1rem
                .expander__dot
                    background-color white
                    display inline-block
                    height 6px
                    width 6px
                    border-radius 50%
                    margin-left 0.2rem

            .navbar__twitter
                display none

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
