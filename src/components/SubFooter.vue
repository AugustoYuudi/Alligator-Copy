<template>
    <div class="subfooter">
        <a class="title">
            Write For Us
        </a>

        <ul class="main-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Credits</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
        </ul>

        <ul class="sub-links">
            <li><a href="#" class="links-default">Advertise</a></li>
            <li>•</li> 
            <li><a href="#" class="links-default">Support us on Patreon</a></li>
        </ul>

        <p class="more text-default">Note that we link to certain 3rd party products via affiliate or sponsored links. You can <a href="#" class="links-default">learn more about it here</a>.</p>

        <p class="copyright text-default">Code snippets licensed under <a href="#" class="links-default">MIT</a>, unless otherwise noted. <br>Content & Graphics © 2019 Alligator.io LLC</p>
    </div>
</template>

<style lang="stylus">
.subfooter
    max-width 90vw
    margin 10rem auto 5rem auto
    text-align center
    
    .title
        display inline-block
        width 75%
        max-width 200px
        padding-bottom 16px
        padding-top 16px
        border 2px dashed rgb(250, 224, 66)
        color rgb(223, 166, 18)
    
    .main-links
        margin-top 4.5rem

        li
            display inline-block
            padding-top 16px
            padding-bottom 16px
            min-width 70px
            width 25%
            background-color rgba(236, 198, 48, .1)

            &:nth-child(odd)
                vertical-align top
            
            &:nth-child(even)
                vertical-align bottom
                margin-top 4rem

            a
                display block
                color rgb(223, 166, 18)
    
    .links-default
        border-bottom 3px double
        color rgb(223, 166, 18)

    .text-default
        color rgb(153, 153, 153)
        margin-top 1.5rem

    .sub-links
        margin-top 3rem
        color rgb(153, 153, 153)

        li
            display inline-block
            margin-left 1rem

@media screen and (min-width: 641px)
    .subfooter
        .title
            min-width 140px
            width 25%
            font-size 1.2rem

        .main-links
            li
                max-width 100px
                
</style>

<script>
export default {
    
}
</script>
