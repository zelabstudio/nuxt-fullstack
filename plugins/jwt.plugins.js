import VueJwtDecode from "vue-jwt-decode";

export default ({ app }, inject) => {
    
    inject('decodeJwt', (token) => {
        return VueJwtDecode.decode(token)
    });
    
}