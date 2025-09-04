import { createFileRoute, useNavigate } from '@tanstack/react-router'
import ProtectedRoutes from '../../components/ProtectedRoutes'
import { PERMISSIONS } from '../../utils/roles'
import { deleteProducts, getProducts, type Product } from '../../api'
import { useAuth } from '../../context/AuthContext'

export const Route = createFileRoute('/_protected/products')({
  component: () => (
     <ProtectedRoutes permissions={[PERMISSIONS.VIEW_PRODUCTS]}>
        <RouteComponent/>
     </ProtectedRoutes>
  ),
  loader : async () => {
      return await getProducts();
  }
})

function RouteComponent() {
  const products = Route.useLoaderData();
  const {hasPermission} = useAuth();
  const navigate = useNavigate();

  const handleDelete = async (id:string, e:React.MouseEvent) => {
        e.preventDefault();
        if(!hasPermission(PERMISSIONS.DELETE_PRODUCTS)){
           navigate({to:'/unauthorized'});
           return;
        }
        if(window.confirm("Are you sure want to delete this product")){
          await deleteProducts(id);
          products?.filter((product) => product.id!==id);
        }

  }
  return (
    <div className='p-10 space-y-2'>
        <h2 className='text-4xl font-bold'>Products</h2>
        <p className='text-xl'>Product List</p>
        <ul className='flex flex-wrap justify-evenly gap-5 w-full mt-6'>
           {products?.map((product: Product)=>(
                <li key={product.id} className='flex flex-col items-center gap-5'>
                    <img src={product.image} className='w-[280px] h-[180px]'/>
                    <h2 className='font-medium'>{product.name} - ${product.price}</h2>
                    {hasPermission(PERMISSIONS.EDIT_PRODUCTS) && (
                      <div className='flex justify-between w-full gap-5'>
                       <button onClick={() => alert(`Edit: ${product.name}`)} type='button' className='bg-blue-600 text-white px-5 py-1 rounded-md cursor-pointer'>Edit</button>
                       <button onClick={(e)=>handleDelete(product.id,e)} type='button' className='bg-red-600 text-white px-5 py-1 rounded-md cursor-pointer'>Delete</button>
                      </div>
                    )}
                </li>
           ))}
        </ul>
    </div>
  )
}
