function Login() {
  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "" || password === "") {
      console.log("los campos no pueden estar vacios");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      console.log("Debes Escribir una direccion de correo electronico valida");
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      console.log("credenciales invalidas");
    }
    console.log("ingresamos al sistema");
  };

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
