import { Link } from "react-router-dom";
import { useAuth } from "../../AUTH";
import './style.css'
export default function Page404() {
  const auth = useAuth()
  return (
  <div className="bg__404">

      <div style={{display: 'flex',justifyContent:'center',alignItems: 'center',height: '100vh'}}>
       <div className="center">
        <div style={{fontFamily: 'inherit', margin: '2em auto', fontSize: '2em', color: '#000'}}>404 || page not found</div>
        <Link to={auth.user? '/en/home' : '/'} style={{padding: '1em 2em', color: '#000'}}>
            Home &#128521;
          </Link>
      
       </div>
       
      </div>
          
  </div>

  );
}
