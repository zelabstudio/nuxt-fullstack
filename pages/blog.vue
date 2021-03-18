<template>
    <div>
        {{posts}}
    </div>
</template>

<script>
    export default {
        async asyncData({params, $http}) {
            const data = await $http.$get('https://jsonplaceholder.typicode.com/todos/');
            try {
                return {
                    posts: data
                }
            }
            catch {
                console.log('err')
            }}
        }
</script>

<style lang="scss" scoped>

</style>