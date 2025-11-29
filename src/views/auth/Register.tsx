import RegisterForm from "../../components/forms/RegisterForm"
import AuthLayout from "../../layouts/AuthLayout"

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
        <RegisterForm />
    </AuthLayout>
  )
}

export default RegisterPage