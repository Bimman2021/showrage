import { useAuth } from "./index"
import { Navigate } from "react-router-dom";

const ValidateEmail = ({ children }) => {
      const auth = useAuth();
      if (!auth.vcode) {
            return <Navigate to='/login' />
      }

      return children
}

export default ValidateEmail