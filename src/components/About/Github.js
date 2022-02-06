import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#3f369e",
    grade3: "#574fa7",
    grade2: "#6b65a8",
    grade1: "#9a95ce",
    grade0: "#ecd9fc",
  };

  const len = useSelector(state => state.len);

  return (
    len === "ES" ?
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Mira cuando <strong className="purple">Codeo</strong>
        </h1>
        <GitHubCalendar
          username="florengo"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </Row>
      :
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="florengo"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </Row>
  );
}

export default Github;
