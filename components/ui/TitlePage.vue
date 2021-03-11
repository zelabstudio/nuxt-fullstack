<template>
    <div class="title__page my-5">
        <h1 class="text-center text-5xl uppercase font-semibold text-teal-900">{{titleText}}</h1>
    </div>
</template>

<script>
    export default {
        name:"TitlePage",
        props : {
            titleText: {
                type: String,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>