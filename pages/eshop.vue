<template>
    <div>
       <TitlePage titleText="Eshop"/>
        <div class="post__grid" v-for="product in productsArray" :key="product.id">
            <div class="post__item">
                <p> {{ product.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/ui/TitlePage";
    import Products from "../apollo/queries/products.gql";
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                productsArray:[]
            }
        },
        apollo : {
            productsArray: {
                query : Products,
                update(data) {
                    console.log(data);
                    return data.data;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>