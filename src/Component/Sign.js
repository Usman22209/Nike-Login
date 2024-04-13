import React from 'react'
import { useState } from 'react'
export const Sign = () => {
    const [password, setpassword] = useState("vscode")
    const [lpassword, setlpassword] = useState(true)
    const [cpassword, setcpassword] = useState("vscode")
    const[username,setusername]=useState("asdfgh")
    const [email,setemail]=useState("npm install")
    const [matchpassword, setmatchpassword] = useState(true)
    const check = () => {
        if(email==="npm install"){
            setemail("")
            
        }
        if(username==="asdfgh"){
            setusername("");
        }
        if(password==="vscode"){
            setpassword("")
            
        }
        if(cpassword==="vscode"){
            setcpassword("")
        }
        
        if (password === cpassword) {
            setmatchpassword(true)
        }
        else {
            setmatchpassword(false)
        }
        if (password!==null && cpassword!=null && (password.length < 8 || cpassword.length<8)) {
            setlpassword(false) 
        }
        else {
            setlpassword(true)
          
        }
    }
    return (
        <div className='flex justify-center items-center w-[90vw] sm:w-[60vw] mx-auto flex-col border mt-16 p-3'>
            <h1 className='font-mono text-3xl'>Login</h1>
            <div className='w-full *:my-2 *:px-2'>
                <div className='flex flex-row  w-full justify-between'>
                    <input type="text" placeholder='First Name' className='focus:outline-0 focus:border-b-2 border-black width ' />
                    <input type="text" placeholder='Last Name' className='focus:outline-0 focus:border-b-2 border-black width' />
                </div>
                <input type="text" required placeholder='UserName' className='w-full border-b focus:outline-0 focus:border-b-2 border-black'onChange={(e)=>{
                 setusername(e.target.value)   
                }} />
                {username==="" && <div className='text-red-600 text-sm'>*Username required</div>}
                <input type="email" required placeholder='Email adress' className='w-full border-b focus:outline-0 focus:border-b-2 border-black' onChange={(e)=>{setemail(e.target.value)}} />
                {email==="" && <div className='text-red-500 text-sm'>*Email required</div>}
                <select name="gender" id="gender-select" className="w-full *:text-lg border-b-[1px] text-gray-600 border-black">
                    <option value="" selected disabled class="text-gray-400 ">Gender</option>
                    <option value="male" class="text-black">Male</option>
                    <option value="female" class="text-black">Female</option>
                </select>
                <input type="password" required placeholder='Password' className='w-full border-b focus:outline-0 focus:border-b-2 border-black' onChange={(event) => { setpassword(event.target.value); }} />
                {
                    password==="" && <div className='text-red-600 text-sm'>*Password required</div>
                }
                <input type="password" required placeholder='Confirm Password' className='w-full border-b focus:outline-0 focus:border-b-2 border-black' onChange={(event) => { setcpassword(event.target.value); }} />
                {
                    cpassword==="" && <div className='text-red-600 text-sm'>**Confirm password</div>
                }
                <input type="submit" className='w-fit bg-red-600 hover:bg-red-700 text-white py-1 cursor-pointer px-3 rounded-sm' onClick={check} />
               {!matchpassword &&  <div className='text-red-600 text-sm'>*Passwords don't match!</div>}
               {!lpassword &&  <div className='text-red-600 text-sm'>**Password length should atleast be 8</div>}
            </div>
        </div>
    )
}
