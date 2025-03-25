import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs/Vistas/Navegacion.css';
import PagTS from './Tabs/PagTS';

const Navegacion = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    // Add window resize listener to detect screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="navbar" className="container-fluid px-0" >
      <div className="row g-0">
        <div className="col-12">
          <nav className="nav-tabs justify-content-center" >
            {!isMobile && (
              <div className="official-site-nav-item">
                <PagTS titulo="Ir a página oficial de TS" />
              </div>
            )}
            
            <ul className="nav-links">
              <li className="nav-item">
                <NavLink to="/inicio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/discografia" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Discografía</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tours" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Tours</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/fotos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Galería</NavLink>
              </li>
             {/* <li className="nav-item">
                <NavLink to="/tienda" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Tienda</NavLink>
              </li>
              */}
              <li className="nav-item">
                <NavLink to="/tienda2" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Tienda</NavLink>
              </li>
            </ul>
          </nav>
          
          {isMobile && (
            <div className="mobile-official-site">
              <PagTS titulo="Web Oficial TS" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navegacion;