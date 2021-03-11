<template>
    <div>
       <TitlePage titleText="Eshop"/>
        <div class="post__grid" v-for="post in postArray" :key="post.id">
            <div class="post__item">
                <p> {{ post.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/ui/TitlePage";
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                postArray:[]
            }
        },
        beforeCreated() {
            console.log("before created")
        },
        created() {
            console.log("created");
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data =>{
                this.postArray = data;
            });
        },
        mounted() {
            console.log("mounted");
        },
        destroyed() {
            console.log('destroyed');
        }

    }
</script>

<style lang="scss" scoped>

</style>