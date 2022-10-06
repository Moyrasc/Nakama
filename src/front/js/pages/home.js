import React from "react";
import "../../styles/home.css";
import fondo from "../../img/fondo-nakama.jpg";

const Home = () => {
  return (
    <>
      <div className="main-image">
        <img src={fondo} />
      </div>

      <div className="container main-home">
        <div className="main-intro p-2">
          <div className="letters text-center ">NAKAMA</div>
          <p className="slogan fst-italic bg-gradient rounded-pill slogan-css text-center fw-bold">
            "El miedo se hace más pequeño en compañía"
          </p>
          <p className=" parrafo">
            Somos una comunidad dirigida a personas relacionadas directa o
            indirectamente con el cáncer, a través de la cual, puedan aprender
            aspectos sobre el día a día de la enfermedad más allá del propio
            diagnóstico. Aquí encontraran información sobre alimentación,
            aspectos psicológicos, avances médicos e investigaciones y
            entrenamientos para favorecer una mejor calidad de vida.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
