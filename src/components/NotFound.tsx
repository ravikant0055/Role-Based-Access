import { useNavigate } from '@tanstack/react-router';
const NotFound = () => {
  const navigate = useNavigate();  
  return (
    <div className='flex flex-col gap-5 items-center mt-5 '>
        <h1 className='font-bold text-2xl'>404 Page not found</h1>
        <button onClick={()=>navigate({to:"/dashboard"})} className='bg-blue-500 text-white p-2 rounded'>Go Back</button>
    </div>
  )
}

export default NotFound;