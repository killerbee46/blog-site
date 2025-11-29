import { Card, Typography } from "@mui/material"
import Logo from "../components/Logo"

const AuthLayout = ({children, title}:any) => {
    document.title = (title ? title + " | " : "") + "My Blogs"
  return (
    <div className="flex w-full h-full justify-center">
        <Card className="w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center mt-[5%] p-5 border border-slate-300">
            <Logo />
        <Typography variant="h6">
            {title} 
            </Typography>
        <div className="w-full p-10">
            {children}
        </div>
        </Card>
    </div>
  )
}

export default AuthLayout