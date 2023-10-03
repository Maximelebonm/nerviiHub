import { useEffect } from "react";

export const checkUser = ()=> {
    useEffect(()=>{
        if(localStorage.getItem('nervii')){
          const getStorage = localStorage.getItem('nervii')
          const decoded = jwt_decode(getStorage);
          const email = decoded.email
          console.log(email)
          const get = getUserAccess(email)
          .then(resp => {
            return resp.data.role
          })
        }
      },[]);
};