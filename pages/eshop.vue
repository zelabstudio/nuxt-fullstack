<template>
    <div>
       <TitlePage titleText="Eshop"/>
        <div class="laoder" v-if="loading">
            ...loading
        </div>
        <div class="post__grid text-center" v-for="product in productsArray" :key="product.id">
            <div class="product__item">
                <p> {{ product.title }}</p>
                <p> {{ product.price }}</p>
                <NuxtLink :to="`product/${product.id}`">Voir le produit</NuxtLink>
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
                productsArray:[],
                loading:0
            }
        },
        apollo : {
            $loadingKey:"loading",
            productsArray: {
                prefetch:true,
                query : Products,
                update(data) {
                    console.log(data.products);
                    console.log(this.loading);
                    return data.products;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>