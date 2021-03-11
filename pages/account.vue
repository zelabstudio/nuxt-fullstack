<template>
    <div class="page__account">
        <TitlePage titleText="Mon compte"/>
        <div class="message__error text-center" v-if="!isLogged">
            <p>Vous n'êtes pas connecté</p>
        </div>
        <div class="user__content text-center" v-else>
            <p>Nom: {{user.firstName}}</p>
            <p>Prénom : {{user.lastName}}</p>
            <p>Email: {{user.email}}</p>
            <p>Age: {{user.age}}</p>
            <div class="logout__wrapper">
                <button @click="logout">Se déconnecter</button>
            </div>
        </div>
    </div>
</template>

<script>
    
    import TitlePage from "../components/ui/TitlePage";
    import VueJwtDecode from "vue-jwt-decode";

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                isLogged: false,
                user:{}
            }
        },
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged=false;
            }
        },
        beforeMount() {
            const token =  localStorage.getItem('token');
            if(token) {
                const jwtDecoded = VueJwtDecode.decode(token); 
                console.log(jwtDecoded);
                fetch(`http://localhost:3030/api/v1/user/${jwtDecoded.id}`,{
                    headers: {
                        "Authorization":token
                    }
                })
                .then(res=>res.json())
                .then(data => {
                    console.log(data);
                    this.isLogged = true;
                    this.user = data;
                })
                .catch(err=>console.log(err))
            }
        }
        
        }
</script>

<style lang="scss" scoped>

</style>