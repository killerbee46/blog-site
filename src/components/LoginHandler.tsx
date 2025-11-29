import AuthActions from "./AuthActions";
import UserDropdown from "./UserDropdown";
import { getToken } from "../utils/localUser";

const LoginHandler = () => {
  const token = getToken()
  return <div>
    {
        token ? 
        <UserDropdown />:
        <div>
            <AuthActions />
        </div>
    }
    </div>;
};

export default LoginHandler;
