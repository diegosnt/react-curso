import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
function Login2() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario ya está logueado, lo redirigimos a la página principal
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === "admin" && password === "1234") {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        login(usuario);
        navigate("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Credenciales incorrectas. Por favor, inténtalo de nuevo.",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
export default Login2;
