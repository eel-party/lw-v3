import { Link } from 'gatsby';
import React from 'react';

export const Header = ({ siteTitle, siteDescription }) => (
    <p>
    <Link to="/">
    <h1>{siteTitle}</h1>
    <p>{siteDescription}</p>
  </Link>
  <Link to={"/library/"} >
         <p>Library</p> 
    </Link>
    </p>
  
);