import { Navigate } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({children, permissions, allowGuest=false}:{children:React.ReactNode, permissions?:string[], allowGuest?:boolean}) => {
    const {user, hasPermission} = useAuth();
    
    //Allow guest user if allowGuest is ture
    if(allowGuest && !user) {
        return children;
    }

    //Redirect to Login if user not Authenticated
    if(!user) {
        return <Navigate to="/login" />
    }

    //Redirect to unauthorized if the user have lacks of required permissions
    if(permissions && !permissions.every((p) => hasPermission(p))){
        return <Navigate to="/unauthorized"/>
    }

    //Reder the children if the user is Authenticated & has Permission
    return children;
}

export default ProtectedRoutes;
