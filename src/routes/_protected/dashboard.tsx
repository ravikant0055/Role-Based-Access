import { createFileRoute, Link } from '@tanstack/react-router'
import { useAuth } from '../../context/AuthContext';
import ProtectedRoutes from '../../components/ProtectedRoutes';

export const Route = createFileRoute('/_protected/dashboard')({
  component: () => (
     <ProtectedRoutes allowGuest>
        <RouteComponent/>
     </ProtectedRoutes>
  )
})

function RouteComponent() {
  const { user } = useAuth();
   return (
    <div className='p-10 space-y-3'>
      {user ? (
        <>
          <h2 className='text-4xl font-bold'>Welcome, {user?.username}</h2>
          <p>Role: {user?.role}</p>
        </>
      ) : (
        <>
          <h2 className='text-4xl font-bold'>Welcome, Guest</h2>
          <p>No role assigned to you</p>
        </>
      ) }
    
    </div>
  )
}
 