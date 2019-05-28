<template>
    <div class="navbar">
        <div class="upper">
            <a href="#" class="navbar__logo" v-if="$route.name !== 'home'"></a>
            <!-- <ul >
                <li v-for="(pagina, index) in paginas" :key=index class="pages__page"></li>
            </ul> -->
            <a href="#" class="navbar__explore" v-if="$route.name === 'home'">⚡ Explore</a>

            <div class="navbar__search__container">
                <input type="search" class="navbar__search__input" placeholder="しらいし">

                <div class="expander__dot__container" v-on:click="showPages">
                    <span class="expander__dot"></span>
                    <span class="expander__dot"></span>
                    <span class="expander__dot"></span>
                </div>

                <a href="#" class="navbar__twitter"></a>
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
        background-color #002b36

        .upper
            min-height 3.75rem
            white-space nowrap

            .navbar__explore
                display inline-block
                margin-left 1.2rem
                margin-top 1.2rem
                color white

            .navbar__search__container
                display inline-block
                float right
                margin-right 3rem
                margin-top 0.9rem
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
            ul
                text-align center

                .pages__page
                    margin-top 1em
                    height 3em

                    &:nth-child(1)
                        display none



    @media screen and (min-width: 1121px)
        .navbar
            background-color tomato

            .upper
                .navbar__search__container
                    margin-right 4rem
                    width 140px
                    height 32px
                    vertical-align top
                    background-position -1% 80%


                    .navbar__search__input
                        vertical-align top
                        height 32px

                    .expander__dot__container
                        display none
                
                    .navbar__twitter
                        display inline-block
                        vertical-align top
                        width 35px
                        height 35px
                        margin-left 1.2rem
                        background url(../assets/img/twitter.png)
                        background-repeat no-repeat
                        background-size 30px 30px
                        background-position 0 30%
            
            .navbar__pages
            ul
                text-align center
                .pages__page
                    margin-top 1em
                    height 3em

</style>

<script>
export default {
    data() {
        return {
            paginas: [
                '⚡ Explore',
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
