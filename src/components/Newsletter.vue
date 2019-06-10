<template>
    <div class="newsletter" :class="{'newsletter--footer' : settings.type == 'footer'}">
        <h3 class="newsletter__title">
            {{settings.title}}
        </h3>
        <form action="#" @submit="submitForm">
            <input type="email" class="form__email" :placeholder=settings.placeholder>
            <input type="submit" value="Subscribe" class="form__send">
        </form>
    </div>
</template>

<style lang="stylus">
.newsletter
    display block
    text-align center
    margin 3.5rem 0 2rem 0
    padding 1.3rem 0 1.5rem 0
    background linear-gradient(to bottom, transparent, rgba(236, 198, 48, .1))
    transform skewY(6deg)

    .newsletter__title
        font-size 1.17em
        color #008f68
        margin-bottom 1rem
        transform skewY(-6deg)

    form
        transform skewY(-6deg)
        .form__email
            display block
            margin 0 auto .8em auto
            max-width 250px
            width 100%
            height 2.5em
            font-size 17px
            text-align center
            border 2px #6db65b solid
            border-radius 8px
            transition box-shadow .45s, border-color .45s ease-in-out

            &:focus
                box-shadow 0 0 5px rgba(0, 0, 0, .1)
                border-color rgba(0, 0, 0, .1)
                outline 0
                
                &::placeholder
                    opacity 0

        .form__send
            display block
            margin 0 auto 1.25rem auto
            cursor pointer
            transition transform 0.15s cubic-bezier(0, 1.8, 1, 1.8)
            border-radius 8px
            padding 10px 20px
            color #4aae9b
            background linear-gradient(to bottom, rgb(255, 255, 255), rgb(248, 248, 248))
            box-shadow 0 0 10px rgba(0, 0, 0, .25)
            border none
            // transform skewY(-6deg)

            &:hover
                transform skewY(3deg)

.newsletter--footer
    background none
    margin 0 auto
    max-width 750px

    .newsletter__title
        font-size 2rem
        line-height 1
        text-align center
        padding-bottom 1.7rem
        letter-spacing .2rem
    
    form
        .form__email

        .form__send
            font-size 1.3rem

    @media screen and (min-width: 601px)
        width 100vw

        .newsletter__title
            font-size 2.5rem
        
        form
            .form__email
                display inline-block
                max-width 375px
                font-size 1.6rem
            .form__send
                display inline-block
                margin-left .3rem

</style>

<script>
export default {
    methods: {
        submitForm: function() {
            console.log('form submitted')
        }
    },

    data() {
        return {
            type: 'other'
        }
    },

    props: {
        settings: Object,
    }
    
}
</script>
