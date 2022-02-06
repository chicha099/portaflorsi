import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useSelector } from 'react-redux';

function AboutCard() {
  const len = useSelector(state => state.len);

  return (
    len === "ES" ?
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hola a todos, Soy <span className="purple">Florencia Guadalupe Gonzalez </span>
              actualmente estoy viviendo en <span className="purple"> Buenos Aires, Argentina </span>
              pero estoy buscando emigrar hacia <span className="purple"> Alemania.</span>
              <br />Soy una desarrolladora Full-Stack aunque tambien tengo experiencia trabajando solo en Front-end y Back-end de forma autonoma.
              <br />
              <br />
              Ademas de codear, hay otras actividades que disfruto hacer!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Leer
              </li>
              <li className="about-activity">
                <ImPointRight /> Soy voluntaria en un refugio para gatos sin hogar
              </li>
              <li className="about-activity">
                <ImPointRight /> Hago trading activo e invierto
              </li>
              <li className="about-activity">
                <ImPointRight /> Viajar
              </li>
            </ul>

            {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              <br />"Sólo aquellos que creen en su camino
              <br />Acabarán brillando
              <br />Hasta que sus vidas se consuman
              <br />Por oponerse incluso a Dios"{" "}
            </p>
            <footer className="blockquote-footer">Fighting Gold</footer> */}
          </blockquote>
        </Card.Body>
      </Card>
      :
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Florencia Guadalupe Gonzalez </span>
              i'm currently living in <span className="purple"> Buenos Aires, Argentina </span>
              but i'm willing to move to <span className="purple"> Germany.</span>
              <br />I am a Full-stack developer although I also have experience working as Front-End and Back-End Dev separately.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Reading
              </li>
              <li className="about-activity">
                <ImPointRight /> Volunteer in a cat shelter
              </li>
              <li className="about-activity">
                <ImPointRight /> Active trading and investing
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>

            {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              <br />"Only those who believe their path
              <br />Will eventually shine
              <br />Until their lives burn out
              <br />Opposing even God"{" "}
            </p>
            <footer className="blockquote-footer">Fighting Gold</footer> */}
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
