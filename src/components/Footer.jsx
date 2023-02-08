import React from 'react';
import "../css/bootstrap.min.css"

const Footer = () => {
    return (
    <nav className='py-2' style={{backgroundColor: "#585178"} }>
        <ul className='d-flex'>
            <li className="list-group-item mx-5"> <a className='text-decoration-none ms-5' href='http://www.instagram.com'  rel='noopener noreferer' >INSTAGRAM</a></li>
            <li className="list-group-item mx-5"> <a className='text-decoration-none ms-5' href='http://www.instagram.com'  rel='noopener noreferer' >FACEBOOK</a></li>
            
        </ul>
       
    </nav>
    );
}

export default Footer;
