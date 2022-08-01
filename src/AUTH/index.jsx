import { useState, useContext, createContext } from "react"

const AuthContext = createContext(null);



//creating the auth
export const AuthProvider = ({ children }) => {
      const [movie, setVmovies] = useState();
      const [vcode, setVerifyCode] = useState();
      const [user, setUser] = useState();


      return (
            <AuthContext.Provider value={{ movie, setVmovies, vcode, setVerifyCode, user, setUser }}>
                  {children}
            </AuthContext.Provider>
      )
}

//using the auth
export const useAuth = () => {
      return useContext(AuthContext)

}