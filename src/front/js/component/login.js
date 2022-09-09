import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  return (
    <>
      <div className="containerLogin">
        <h1 className="mb-3">Inicio sesión</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label mt-3">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Nunca compartiremos su correo electrónico con nadie más.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label mt-3">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-outline-success">
            Entrar
          </button>
        </form>
        <a href="/">
          <p>¿Olvidaste la contraseña?</p>
        </a>
      </div>
    </>
  );
};
