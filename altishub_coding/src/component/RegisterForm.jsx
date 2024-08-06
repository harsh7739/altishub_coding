const { useState } = require("react")

function RegistrationForm(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [userName,setUserName]=useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(password.length<8){
            
            alert("Please Enter atleast 8 character in password")
        }else{

            let obj={email,password,userName}
    
            sessionStorage.setItem("user",JSON.stringify(obj))
            
        }
        


    }



    return(
        <>
        <h1>Registration Form</h1>
           <form onSubmit={handleSubmit}>

           <input type="text" placeholder="Enter User Name"  required value={userName} onChange={(e)=>setUserName(e.target.value)}/>
           <input type="email"  placeholder="Enter Email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
           <input type="password" required  placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" value={"Register"} />

            </form>

        


        </>
    )
}

export default RegistrationForm