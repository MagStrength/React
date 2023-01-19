import { Navigate } from "react-router-dom"

export const PublicRoute = ({ auth, component }) => {

    return auth ? <Navigate to='/chats' /> : component
}