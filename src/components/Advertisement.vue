<template>
    <div class="advertisement">
        <ul class="ad__list">
            <li class="ad" v-for="(ad, key, index) in adList" :key=key>
                <p class="ad__circle">AD</p>
                <img :src="ad.icon" alt="Ad Brand Icon" class="ad__icon">
                <h1 class="ad__title">{{ad.title}}</h1>
                <a href="#" class="ad__content">{{ad.content}}</a>
                <a href="#" class="ad__about" v-if="index == lastAd">About this affiliate link</a>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus">
.advertisement
    text-align center
    margin 2rem 0 3rem 0

    .ad__list
        display grid 
        grid-template-columns 1fr
        max-width 85vw
        margin 0 auto

        .ad
            background-color #fafafa
            border-radius 3px
            box-shadow 0 2px 5px rgba(0, 0, 0, .05)
            margin-top 3rem
            margin-bottom 2rem

            .ad__circle
                display inline-block
                padding .6rem .5rem .5rem .6rem
                border-radius 50%
                margin-top -1.2rem
                background-color #fafafa
                vertical-align top
                font-size .7rem
                
            .ad__title
                display block
                color #dfa612

            .ad__icon
                height 40px
                width 40px
                border-radius 50%
                margin-top -1.2rem

            .ad__content
                display block
                color #555
                font-size 19px
                line-height 1.25

            .ad__about
                display block
                padding-top 1.7rem
                float right
                color #dfa612

                &::before
                    content 'ⓘ'
                    color black
                    margin-right .3rem


@media screen and (min-width: 641px)
    .advertisement
        .ad__list
            max-width 90vw
            grid-template-columns 1fr 1fr 1fr
            grid-column-gap 2rem

            .ad
                padding 0 2rem 1.5rem 2rem

                .ad__title
                    margin-top 1.5rem
                    line-height 2rem

</style>

<script>
export default {
    props: {
        adList: Object,
    },

    computed: {
        lastAd() {
            return Object.keys(this.adList).length - 1
        }
    }
}
</script>
