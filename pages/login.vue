<template>
    <div class="page__login">
        <TitlePage titleText="Login"/>
        <form class="form__login w-1/3 mx-auto">
    
            <div class="form__group">
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input class="border-2 rounded-sm my-1 h-10 w-full" type="email" v-model="email" name="email"/>
            </div>
            
            <div class="form__group">
                <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input class="border-2 rounded-sm my-1 h-10 w-full" type="password" v-model="password" name="password"/>
            </div>

            <div class="form__group">
                <button type="submit" @click.prevent="login">Se connecter</button>
            </div>

            <div class="message__error" v-if="messageError">
                {{messageError}}
            </div>
        </form>
    </div>
    
</template>

<script>
    
    import FormGroup from "../components/ui/FormGroup";
    import TitlePage from "../components/ui/TitlePage";

    export default {
        components:{
            FormGroup, TitlePage
        },
        data: function () {
            return {
                email:"",
                password:"",
                messageError:""
            }
        },
        methods: {
            login: function () {
                const body = {
                    email:this.email,
                    password: this.password
                }
                const url = "http://localhost:3030/api/v1/login"
                fetch(url,
                    {
                        method: "POST",
                        headers: {
                            "Content-type":"Application/json"
                        },
                        body: JSON.stringify(body)
                    }
                )
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    if(!data.auth) {
                        this.messageError = data.message;
                    }
                    else {
                        let token = data.token;
                        localStorage.setItem('token',token);
                        this.$router.push('account');
                    }
                }
                )
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>