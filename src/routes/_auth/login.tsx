import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { login } from '../../api';
import { useAuth } from '../../context/AuthContext';

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const [username, setUsername] = useState<string>(""); 
  const [password, setPassword] = useState<string>(""); 
  const {login: authLogin} = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     if(!username) return alert("Invalid Credentials");

     const user = await login(username, password);
     if(user){
        authLogin(user);
        navigate({to:"/dashboard"})
     }else{
        alert("Invalid Credentials");
        setUsername("");
        setPassword("");
     }
  }

  return (
   <div  className='flex flex-col justify-center items-center w-full'>
     <h1 className='text-3xl font-medium my-10'>Login</h1>
     <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center md:w-1/4'>
        <input type='text' value={username} placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)} className='border-gray-600 border rounded-md w-full px-3 py-2'/>
        <input type='password' value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} className='border-gray-600 border rounded-md w-full px-3 py-2'/>
        <button type='submit' className='bg-blue-500 text-white py-2 px-3 w-full rounded-md mt-2' >Login</button>
     </form>
   </div>
   )
}
