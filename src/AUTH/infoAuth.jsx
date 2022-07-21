import { useAuth } from "./index"
import { Navigate } from "react-router-dom";

const Validate = ({ children }) => {
      const auth = useAuth();
      if (!auth.movie) {
            return <Navigate to='/home' />
      }

      return children
}

export default Validate