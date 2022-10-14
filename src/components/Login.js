import axios from "axios";
import swal from '@sweetalert/with-react';
import { useNavigate, Navigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "" || password === "") {
      swal(
        <h2>los campos no pueden estar vacios</h2>
      );
      
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      swal(<h2>Debes Escribir una direccion de correo electronico valida</h2>);
      
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal(<h2>Credenciales invalidas</h2>);
    }
    
    axios
      .post('http://challenge-react.alkemy.org',{email , password})
      .then(res=>{
        swal(<h2>Ingresaste Correctamente</h2>);
        
        const token = res.data.token;
        localStorage.setItem('token',token);
        navigate("/listado");
      })
  }

  return (
    <>
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo Electronico</span>
          <br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña</span>
          <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
export default Login;
