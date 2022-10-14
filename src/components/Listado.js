import React from 'react';
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Listado() {
    
    

    

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (!token) return <Navigate replace to="/" />;
    }, []);

  return (
    <div>Listado</div>
  )
}

export default Listado;