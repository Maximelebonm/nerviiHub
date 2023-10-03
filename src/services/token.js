import jwt_decode from "jwt-decode";

export const getToken = () =>{
    const getStorage = localStorage.getItem('nervii')
    if(getStorage!=null){
        const decoded = jwt_decode(getStorage);
        return decoded
    }
    else{
        return null
    }
}