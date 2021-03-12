<template>
    <div>
       <TitlePage titleText="About"/>
    </div>
</template>

<script>
import TitlePage from "../components/ui/TitlePage";
    export default {
        head: {
            title:"About Vue JS",
            meta:[
                {
                    hid: 'description',
                    name:'description',
                    content:"My description meta data"
                },
                {
                    hid:'keywords',
                    name:'keywords',
                    content:'vue JS, Javascript, frontend'
                }
            ]
        },
        components : {
            TitlePage
        }
    }
</script>

<style lang="sass" scoped>

</style>