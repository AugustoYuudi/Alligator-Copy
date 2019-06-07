<template>
    <div class="footer">
        <Advertisement :adList=ads></Advertisement>
        <Newsletter :settings=newsletterSettings></Newsletter>
    </div>
</template>

<style lang="stylus">

</style>

<script>
import Advertisement from './Advertisement'
import Newsletter from './Newsletter'
export default {
    components: {
        Advertisement,
        Newsletter
    },

    data() {
        return {
            newsletterSettings: {
                type: 'footer',
                title: 'Catch up with the latest in front-end web dev with our newsletter:',
                placeholder: '🦄 you@unicorn.com'
            },
            ads: {
                ad1: {
                    title: 'Hotjar',
                    icon: 'https://cdn4.buysellads.net/uu/1/42500/1546351188-1538062800-80x80-hotjar-icon.png',
                    content: 'See how your visitors are really using your website.'
                },
                ad2: {
                    title: 'Slack',
                    icon: 'https://cdn4.buysellads.net/uu/1/46074/1559076859-20190116_slack_icon_80x80_transparent.png',
                    content: 'Bring your team together with Slack, the collaboration hub for work.'
                },
                ad3: {
                    title: 'VSCode Power User',
                    icon: '',
                    content: 'A video course to help you become a VSCode rock star! '
                },
            },
        }
    }
}
</script>
