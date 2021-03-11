<template>
    <form class="form__login w-1/3 mx-auto">
    
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="email" v-model="email" :name="email"/>
        </div>
        
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="password" v-model="password" :name="password"/>
        </div>

        <div class="form__group">
            <button type="submit" @click.prevent="login">Se connecter</button>
        </div>
    
    </form>
    
</template>

<script>
    
    import FormGroup from "../components/ui/FormGroup";

    export default {
        components:{
            FormGroup
        },
        data: function () {
            return {
                email:"",
                password:""
            }
        },
        methods: {
            login: function () {
                console.log(this.email, this.password);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>