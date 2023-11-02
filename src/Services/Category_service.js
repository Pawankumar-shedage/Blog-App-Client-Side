//using fetch to get all categories.

export const loadCategories = ()=>{
    return fetch("http://localhost:8080/categories",{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
    })
        .then(response =>{
            return response.json()
        })
}