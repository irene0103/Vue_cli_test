<template>
    <GlobalFooter :links="links" :copyright="copyright" />
</template>
<script>
    export default {
        data () {
            return {
                links: [
                    {
                        key: '小吉',
                        title: '小吉',
                        href: '',
                        blankTarget: true
                    },
                    {
                        key: 'github',
                        icon: 'logo-github',
                        href: '',
                        blankTarget: true
                    },
                    {
                        key: '条款',
                        title: '条款',
                        href: '',
                        blankTarget: true
                    }
                ],
                copyright: 'Copyright © 2022 View Design All Rights Reserved'
            }
        }
    }
</script>