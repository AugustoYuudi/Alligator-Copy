<template>
    <div class="sponsor" :class="{'sponsor--visible': isVisible}">
        <p class="sponsor-name" @click="toggleSponsor" :class="{'name--visible': isVisible}">Sponsored by {{sponsorData.name}} -- Learn More</p>
        <a href="#" class="sponsor-content">
            <img :src=sponsorData.logo alt="Sponsor Logo" class="sponsor-logo">
            <p class="sponsor-slogan">{{sponsorData.slogan}}</p>
            <p class="sponsor-text">{{sponsorData.text}}</p>
            <a href="#" class="sponsor-link">{{sponsorData.link_text}}</a>
        </a>
    </div>
</template>

<style lang="stylus">
.sponsor
    position fixed
    bottom 0
    width 100vw
    text-align center
    background-color tomato
    color white
    box-shadow 0 -1px 14px 1px rgba(0,0,0,.25)
    transition transform .25s ease-in-out
    transform translateY(calc(100% - 35px))

    
    a
        color white
    
    .sponsor-name
        display block
        background-color teal
        padding-top 5px
        padding-bottom 5px

    .name--visible
        // display none
        opacity 0

    .sponsor-content
        display block
        margin-bottom 2rem
        max-width 390px
        margin 0 auto

        .sponsor-logo
            max-height 50px
            border-radius 3px

        .sponsor-link
            display inline-block
            margin-top 1rem
            margin-bottom 1rem
            background-color teal
            padding 10px 14px
            border-radius 3px
            box-shadow 0 6px 13px 0 rgba(0,0,0,.15)
            text-transform uppercase
            white-space nowrap
            transition transform .3s ease

.sponsor--visible
    transform translateY(0)
</style>

<script>
export default {
    props: {
        sponsorData: Object
    },

    methods: {
        toggleSponsor: function() {
            this.isVisible = !this.isVisible

        }
    },

    data() {
        return {
            isVisible: false
        }
    }
}
</script>

