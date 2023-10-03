import { InitRequest } from "../api/initRequest";
import ky from "ky";
import axios from "axios";

export const getSuccessLogin = async () => {
  const fetchGoogleUser = await (
    await fetch(`${InitRequest()}/login/success`)
  ).json();
  return fetchGoogleUser;
};

// export const postUserRegister = async (props) => {
//   const {email,name,surname,password} = props
//       const postUSer = await axios.post(`${InitRequest()}/users/register`,
//         {
//           withCredentials : true, 
//           email :email,
//           name : name,
//           surname : surname,
//           password : password
//         }
//       )

//       console.log('userPost : ' ,postUSer)
//       return postUSer;
//     };

    // export const getUser = async (props) => {
    //   console.log("getPass")
    //   const {email,password} = props
    //   const cookieGeted = await axios.get(`${InitRequest()}/users/login`,
    //     {
    //       withCredentials : true,
    //       email : email,
    //       password : password 
    //     }
    //   )
    //   return cookieGeted;
    // };

    export const PostUser = async (props) => {
      console.log("getPass")
      const {email,password} = props
      const cookieGeted = await axios.post(`${InitRequest()}/users/register`,
        {
          withCredentials : true,
          email : email,
          password : password 
        }
      )
      return cookieGeted;
    };

    export const getUser = async (props) => {
      const {email,password} = props
          const cookieGeted = await ky.post(`${InitRequest()}/users/login`,
            {
              json: 
              { 
                email :email,
                password : password
              },
              credentials: 'include' 
            }
          )
          .json()
          .then(resp => localStorage.setItem('nervii',resp.token))
          return cookieGeted;
        };
    
        export const getUserAccess = async (props) => {
          const {email} = props
      
              const cookieGeted = await ky.post(`${InitRequest()}/users/refresh`,
                {
                  json: 
                  { 
                    email :props,
                  },
                  credentials: 'include' 
                }
              )
              .json()
              console.log('cookieget : ',cookieGeted)
              return cookieGeted;
            };

  export const logoutApi = async () => {
    const logoutUser = await ky.get(`${InitRequest()}/users/logout`)
    return logoutUser

  }

  export const postUserRegister = async (props) => {
    const {email,name,surname,password} = props
        const postUSer = await ky.post(`${InitRequest()}/users/register`,
          { 
            json: 
              { 
                email :email,
                name : name,
                surname : surname,
                password : password
              },
              credentials: 'include' 
          }
        )
        .json()

        console.log('userPost : ' ,postUSer)
        return postUSer;
      };