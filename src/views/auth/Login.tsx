import LoginForm from "../../components/forms/LoginForm"
import AuthLayout from "../../layouts/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage