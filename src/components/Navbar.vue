<template>
    <div class="navbar">
            <div class="navbar__logo" v-if="$route.name !== 'home'"></div>
            <div class="navbar__explore" v-if="$route.name === 'home'">Explore</div>
        <ul class="navbar__pages">
            <li v-for="(pagina, index) in paginas" :key=index class="pages__page">{{pagina}}</li>
        </ul>
        <div class="navbar__search__container">
            <input type="search" class="navbar__search">
        </div>
        <span class="navbar__last__item"></span>
    </div>
</template>

<style lang="stylus">
*
    margin 0
    padding 0

.navbar
    width 100vw
    padding-top 16px
    padding-bottom 16px
    background-color tomato

    .navbar__pages
        display none

    .pages__page, 
    .navbar__logo,
    .navbar__explore
        display inline-block
    
    .navbar__search__container
        background-image url('../assets/img/search.png') 
        background-color transparent
        background-repeat no-repeat
        background-size 25px 25px
        background-position 0 0.2em
        border 1px black solid
        border-radius 8px
        width 130px
        height 28px
        margin-left 13em

        .navbar__search
            width 105px
            height 100%
            margin-left 25px
            border none
            background none
            outline none

@media screen and (min-width: 425px)
    .navbar
        background-color teal
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
            ]
        }
    }
}
</script>
