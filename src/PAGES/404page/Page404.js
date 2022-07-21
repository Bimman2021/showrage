import { Link } from "react-router-dom";
export default function Page404() {
  return (
  
      <div style={{display: 'flex',justifyContent:'center',alignItems: 'center',height: '100vh'}}>
       <div>
        <div style={{fontFamily: 'inherit', margin: '2em auto'}}>404 || page not found</div>
        <Link to="/" style={{padding: '1em 2em'}}>
            show the rage &#128521;
          </Link>
      
       </div>
       
      </div>

  );
}
