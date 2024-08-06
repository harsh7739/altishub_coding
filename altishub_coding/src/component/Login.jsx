import { useState } from "react"

function Login(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [userName,setUserName]=useState("")

    let user=sessionStorage.getItem("user")

    function handleSubmit(e){
        e.preventDefault()
        let flag=false
        for(let i=0;i<user.length;i++){
            if(user[i].userName==userName && user[i].email==email && user[i].password==password){
                alert("Login Successfull")
                flag=true
            }
        }
        if(flag==false){
            alert("Plese Provide right credential")
        }

    }

    return(
        <>
        <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>

<input type="text" placeholder="Enter User Name"  required value={userName} onChange={(e)=>setUserName(e.target.value)}/>
<input type="email"  placeholder="Enter Email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
<input type="password" required  placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
 <input type="submit" value={"Login"} />

 </form>
        </>
    )
}
export default Login