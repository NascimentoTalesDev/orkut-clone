export default async function authUser(user){

    await localStorage.setItem('token', JSON.stringify(user.token))
    
}