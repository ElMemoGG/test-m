import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../styles/menu.css"
/* import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton';
import React from "react";
import {ColorModeContext} from "../layout/themProvider" */



const Menu = () => {
  const {logout} = useAuth();
/*   const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext); */
  

  return (
    <div className="container-all">
      <nav className="nav-menu">
        <ul>
          <li>
          <Link className="link" to={`/home`}> {`<> Gestor Multimedia </>`}</Link>
           
          </li>
          <li>
            <Link className="link" to={`create`}>Crear</Link>
          </li>
 {/*          <li>
            <Link className="link" to={`topics`}>Topicos</Link>
          </li> */}

{/*           <li>
          <IconButton sx={{margin: 0, padding: 0}} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
          </li> */}
          <li>
            <Link className="link" onClick={()=>logout()} to={`/home`}>Cerrar session</Link>
          </li>

        </ul>
      </nav>
      <main className="content-layout">
        <Outlet />
      </main>
    </div>
  );
};

export default Menu;
