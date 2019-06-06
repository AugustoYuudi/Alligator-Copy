<template>
    <div class="advertisement">
        <ul class="ad__list">
            <li class="ad" v-for="(ad, index) in adList" :key=index>
                <p class="ad--round">AD</p>
                <img :src="ad.icon" alt="">
                <h1>{{ad.title}}</h1>
                <a>{{ad.content}}</a>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus">
.advertisement
    text-align center
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

            .ad--round
                display inline-block
                padding .6rem .5rem .5rem .6rem
                border-radius 50%
                margin-top -20px
                margin-right .5rem
                background-color #fafafa
                vertical-align top
                font-size .7rem
                
            h1
                display block
                color #dfa612
            img
                height 40px
                width 40px
                border-radius 50%
                margin-top -20px
            a
                display block
                color #555
                font-size 19px
                line-height 1.25

@media screen and (min-width: 641px)
    .advertisement
        .ad__list
            grid-template-columns 1fr 1fr 1fr
</style>

<script>
export default {
    props: {
        adList: Object,
    }
}
</script>
