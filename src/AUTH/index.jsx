import { useState, useContext, createContext } from "react"

const AuthContext = createContext(null);



//creating the auth
export const AuthProvider = ({ children }) => {
      const [movie, setVmovies] = useState();


      return (
            <AuthContext.Provider value={{ movie, setVmovies }}>
                  {children}
            </AuthContext.Provider>
      )
}

//using the auth
export const useAuth = () => {
      return useContext(AuthContext)

}