<template>
    <div class="subscribe">
        <h3 class="subscribe__title">
            🤹 Subscribe & stay in the loop:
        </h3>
        <form action="#" @submit="submitForm">
            <input type="email" class="form__email" placeholder="your email">
            <input type="submit" value="Subscribe" class="form__send">
        </form>
    </div>
</template>

<style lang="stylus">
.subscribe
    display block
    text-align center
    margin 3.5rem 0 3.5rem 0
    padding 1.3rem 0 1.5rem 0
    background linear-gradient(to bottom, transparent, rgba(236, 198, 48, .1))
    transform skewY(6deg)

    .subscribe__title
        font-size 1.17em
        color #008f68
        margin-bottom 1rem
        transform skewY(-6deg)

    form
        .form__email
            display block
            margin 0 auto
            max-width 250px
            width 100%
            height 2.5em
            font-size 17px
            text-align center
            margin-bottom .8em
            border 2px #6db65b solid
            border-radius 8px
            transition box-shadow .45s, border-color .45s ease-in-out
            transform skewY(-6deg)

            &:focus
                box-shadow 0 0 5px rgba(0, 0, 0, .1)
                border-color rgba(0, 0, 0, .1)
                outline 0

        .form__send
            display block
            margin 0 auto 1.25rem auto
            cursor pointer
            transition transform 0.15s cubic-bezier(0, 1.8, 1, 1.8)
            border-radius 8px
            padding 10px 20px
            color #4aae9b
            background linear-gradient(to bottom, rgb(255, 255, 255), rgb(248, 248, 248))
            box-shadow 0 0 10px rgba(0, 0, 0, .1)
            border none
            transform skewY(-6deg)

            &:hover
                transform skewY(3deg)


</style>

<script>
export default {
    methods: {
        submitForm: function() {
            console.log('form submitted')
        }
    }
    
}
</script>
