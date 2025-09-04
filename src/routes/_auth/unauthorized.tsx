import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/unauthorized')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-10 space-y-3'>
        <h2 className='text-4xl font-bold'>Unauthorized Access</h2>
        <p>You do not have permission to access this page</p>
        <Link to='/dashboard' className='text-blue-500'>Go Back to Dashboard</Link> <br/>
        <Link to='/login' className='text-blue-500'>Go Back to Login</Link>
    </div>
  )
}
