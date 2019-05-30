<template>
    <div class="navbar">
        <div class="main">

            <router-link to="#" class="navbar__logo" v-if="$route.name !== 'home'"></router-link>

            <router-link to="#" class="navbar__explore" v-if="$route.name === 'home'">⚡ Explore</router-link>

            <ul class="navbar__pages__desktop">
                <li v-for="(pagina, index) in paginas.slice(0, 6)" :key=index class="pages__desktop">
                    <router-link to="#" class="page__link" v-bind:class="{angular : index == 0 && $route.name !== 'home', vuejs : index == 1 && $route.name !== 'home', react : index == 2 && $route.name !== 'home', javascript : index == 3 && $route.name !== 'home', css : index == 4 && $route.name !== 'home', svelte : index == 5 && $route.name !== 'home', }">{{pagina}}</router-link>
                </li>
                <li class="pages__desktop pages__dropdown">
                    <a href="#">↓</a>
                    <ul>
                        <li v-for="(pagina, index) in paginas.slice(6)" :key=index>
                            <router-link to="#">{{pagina}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>


            <div class="navbar__search__container">
                <input type="search" class="navbar__search__input" placeholder="しらいし">

                <div class="expander__dot__container" v-on:click="showPages">
                    <span class="expander__dot"></span>
                    <span class="expander__dot"></span>
                    <span class="expander__dot"></span>
                </div>

                <router-link to="#" class="navbar__twitter"></router-link>
            </div>
        </div>

        <div class="navbar__pages__mobile" v-if="this.pagesListIsActive">
            <ul>
                <li class="pages__mobile" v-if="$route.name !== 'home'">
                    <router-link to="#">⚡ Explore</router-link>
                </li>

                <li v-for="(pagina, index) in paginas" :key=index class="pages__mobile">
                    <router-link to="#" class="">{{pagina}}</router-link>
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
        background-image linear-gradient(to right, rgba(107,183,86,0.95), #008f68)
        .main
            min-height 3.75rem
            white-space nowrap

            .navbar__pages__desktop
                display none

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
                background-position -1% 0
                border 1px black solid
                border-radius 8px
                width 90px

                .navbar__search__input
                    background transparent
                    border none
                    outline none
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

        .navbar__pages__mobile
            ul
                text-align center

                .pages__mobile
                    margin-top 1em
                    height 3em

                    a
                        color white


    @media screen and (min-width: 1121px)
        .navbar
            .main
                .navbar__pages__desktop
                    display inline-block

                .navbar__explore
                    padding-left 1rem
                    padding-right 1rem
                    margin-left 0.2rem
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
            
            .navbar__pages__desktop
                display inline-block
                li
                    display inline-block

                    .page__link
                        padding-left 1.501rem
                        padding-right 1.501rem
                        padding-top 22px
                        padding-bottom 21px
                        color white

                        .active
                            background linear-gradient(
                                rgba(0,0,0,0.25),
                                rgba(0,0,0,0.25)
                            )

                    .angular
                        border-bottom 3px solid #DD0031

                    .vuejs                        
                        border-bottom 3px solid #41B883
                    
                    .react
                        border-bottom 3px solid #61dafb

                    .javascript 
                        border-bottom 3px solid #F7DF1E

                    .css
                        border-bottom 3px solid #3399FE

                    .svelte
                        border-bottom 3px solid #FF3E00

                .pages__dropdown
                    padding-left 1.501rem
                    padding-right 1.501rem
                    padding-top 22px
                    padding-bottom 21px
                    a
                        color white

                    ul
                        opacity 0
                        li
                            display none

                    &:hover
                        ul
                            opacity 1
                            position absolute
                            width 510px
                            height 250px
                            background-color #008f68
                            transition opacity .15s ease-out
                            border-top 3px #FAE042 solid
                            top 7.5%
                            transform translateX(-40%)
                            border-bottom-right-radius: 8px;
                            border-bottom-left-radius: 8px
                            // display flex
                            // flex-direction row
                            // flex-wrap wrap
                            // justify-content space-between
                            overflow hidden

                            li
                                display inline-block
                                float left
                                padding-left 1.501rem
                                padding-right 1.501rem
                                padding-top 22px
                                padding-bottom 21px
                    
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
                'TypeScript', 
                'Node.js', 
                'RxJS', 
                'Ionic',
                'Stencil',
                'Flow', 
                'Redux', 
                'Testing', 
                'Jekyll', 
                'SASS', 
                'HTML', 
                'Web Components', 
                'Polymer', 
                'Workflow' 
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
