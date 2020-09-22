import React from 'react';
import './search-box.styles.css'
export const SerachBox = ({placeholder,handleChange}) =>(
    <input type="search" placeholder={placeholder} onChange={handleChange} className="search"/>
)