import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ auth, component }) => {

    return auth ? component : <Navigate to='/login' />
}