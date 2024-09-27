import React from 'react'
 
export  const users= [
    {
        username:"Salih",
        password:"1234"
    },
    {
        username:"elif",
        password:"12"
    }
]


function Login() {
    //Fragment
  return (
    <>
    <p>Kullanıcı Adınız:</p>
   
   <p> <input type="text" placeholder='Lütfen Kullanıcı Adınız Giriniz.'/></p>
   
    <p>Şifreniz:</p>
   
   <p> <input type="password" placeholder='Lütfen Şifrenizi giriniz.'/></p>

   <p><button type='submit' > Kaydet</button></p>
    
    </>
    
  )
}

export default Login