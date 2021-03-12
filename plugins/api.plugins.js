export default ({app}, inject) => {
    inject('login', (body) => {
        return fetch(`${process.env.API_URL}/login`,
            {
                method: "POST",
                headers: {
                    "Content-type":"Application/json"
                },
                body: JSON.stringify(body)
            }
        )
        .then(res => res.json())
    }),
    //Pour récupérer un utlisateur "user/:id"
    inject('getMe', () => {
        
    })
}