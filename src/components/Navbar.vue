<template>
    <div class="navbar">
        <ul>
            <li class="navbar__logo" v-if="$route.name !== 'home'">
                <a href="#" ></a>
            </li>

            <li class="navbar__explore" v-if="$route.name === 'home'">
                <a href="#">⚡ Explore</a>
            </li>

            <li class="navbar__pages">
                <ul>
                    <li v-for="(pagina, index) in paginas" :key=index class="pages__page">
                        {{pagina}}
                    </li>
                </ul>
            </li>

            <li class="navbar__search__container">
                <input type="search" class="navbar__search" placeholder="しらいし">
            </li>

            <li class="navbar__menu__expander">
                <span class="expander__dot"></span>
                <span class="expander__dot"></span>
                <span class="expander__dot"></span>
            </li>

            <li class="navbar__twitter">

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
            ]
        }
    }
}
</script>
