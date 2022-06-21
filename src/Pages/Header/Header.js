import {Link} from 'react-router-dom'
import {useSelector ,useDispatch} from 'react-redux'
import {changeLanguage} from '../../store/actions/language';
export default function Header() {

  const language= useSelector((state)=>state.language.lang);
  const dispatch= useDispatch();
  const ChangeLanguage=()=>{

    dispatch(changeLanguage(language=="ar"?"en":"ar"));
  
  }
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
      <a href="#" className="navbar-brand">Welcome</a>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse6">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse6">
          <div className="navbar-nav">
              <Link to="/" routerlinkactive="active" className="nav-link"> Home</Link>
              <Link to="/Movies" routerlinkactive="active" className="nav-link">Movies</Link>
              <Link to="/Aboutus" routerlinkactive="active" className="nav-link">About Us</Link>
              <Link to="/Contact" routerlinkactive="active" className="nav-link">Contact Us</Link>
              <button className='btn btn-dark' onClick={() => ChangeLanguage()}>{language}</button>
              <Link to="/Login" routerlinkactive="active" className="nav-link">Login</Link>
              <Link to="/Register" routerlinkactive="active" className="nav-link">Register</Link>
             
          </div>
        </div>
  </div>        
</nav>
    {/* <img src={require('../images/portofile.jpg')} width="100%"></img> */}
     {/* <img src="https://tse3.mm.bing.net/th?id=OIP.A1cwHDR91RMa1bCdF9MIBwHaE8" width="100%"></img> */}
    </>
  );
}
