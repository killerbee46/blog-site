import { Button } from "@mui/material"
import { Link } from "react-router-dom"


const AuthActions = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2">
        <Link to={'/auth/login'}>
        <Button variant="contained" className="bg-green-600! font-semibold!">Login</Button>
        </Link>
        <Link to={'/auth/register'}>
        <Button variant="outlined" className="bg-white! text-green-600! font-semibold!">Register</Button>
        </Link>
        
    </div>
  )
}

export default AuthActions