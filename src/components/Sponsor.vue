<template>
    <div class="sponsor" :class="{'sponsor--visible': isVisible}" v-on-clickaway="hideSponsor" @mouseleave="hideSponsor">
        <p class="sponsor-name" @click="showSponsor" :class="{'name--visible': isVisible}" @mouseover="showSponsor">Sponsored by {{sponsorData.name}} -- Learn More</p>
        <a herf="#" class="sponsor-content">
            <img :src=sponsorData.logo alt="Sponsor Logo" class="sponsor-logo">
            <div class="sponsor-texts">
                <p class="sponsor-slogan">{{sponsorData.slogan}}</p>
                <p class="sponsor-text">{{sponsorData.text}}</p>
            </div>

            <a href="#" class="sponsor-link">{{sponsorData.link_text}}</a>
        </a>
    </div>
</template>

<style lang="stylus">
.sponsor
    position fixed
    bottom 0
    left 0
    right 0
    width 100vw
    text-align center
    background linear-gradient(-30deg, #FFFFFFE5, #FFFFFFE5 45%, #FFFFFF 45%) #fff
    color #585AD5
    box-shadow 0 -1px 14px 1px rgba(0,0,0,.25)
    transition transform .25s ease-in-out
    transform translateY(calc(100% - 35px))
    
    a
        color #585AD5
    
    .sponsor-name
        display block
        background linear-gradient(-30deg, #FFFFFFE5, #FFFFFFE5 45%, #FFFFFF 45%) #fff
        padding-top 8px
        padding-bottom 8px
        text-transform uppercase
        white-space nowrap
        letter-spacing .5px
        font-size 12px

    .name--visible
        display none

    .sponsor-content
        display block
        margin-bottom 2rem
        width 100%
        margin 0 auto

        .sponsor-texts
            width 80%
            margin 0 auto
            .sponsor-slogan
                display block
                text-transform uppercase
                font-size 10px
                letter-spacing 2px
                margin-bottom 4px
            .sponsor-text
                display block
                font-size 14px
                line-height 1.4 
                letter-spacing 1px

        
        .sponsor-logo
            max-height 50px
            border-radius 3px

        .sponsor-link
            display inline-block
            margin-top 1rem
            margin-bottom 1rem
            background-color #585AD5
            color white
            padding 10px 14px
            border-radius 3px
            box-shadow 0 6px 13px 0 rgba(0,0,0,.15)
            text-transform uppercase
            white-space nowrap
            transition transform .3s ease
            font-weight 300

.sponsor--visible
    transform translateY(0)


@media screen and (min-width: 760px)
    .sponsor
        .sponsor-content
            max-width none
            margin 1rem 0 1rem 0
            .sponsor-texts
                display inline-block
                vertical-align middle
                width 50%
                max-height 58px
                .sponsor-slogan
                    text-align left
                .sponsor-text
                    text-align left
                    line-height 1.2
            .sponsor-logo
                vertical-align middle
                margin-right 2rem

</style>

<script>
import {mixin as clickaway} from 'vue-clickaway'
export default {
    props: {
        sponsorData: Object
    },

    methods: {
        hideSponsor: function() {
            this.isVisible = false
        },

        showSponsor: function() {
            this.isVisible = true
        }
    },

    data() {
        return {
            isVisible: false
        }
    },

    mixins: [clickaway],
}
</script>

