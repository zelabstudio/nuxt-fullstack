<template>
    <div>
        <p v-if="error.statusCode === 404">
            La page n'existe pas
        </p>
        <p v-else>
            La site rencontre un problème
        </p>
    </div>
</template>

<script>
    export default {
        props:['error'],
        layout:'error'
    }
</script>

<style lang="scss" scoped>

</style>