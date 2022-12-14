import { useState } from "react";
import classNames from "classnames";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

import "./style/App.css";
import "./style/library.css";

function App() {
  // change theme
  const [darkTheme, updateDarkTheme] = useState(true);
  const theme = classNames({ dark: darkTheme, light: !darkTheme });
  var themeIcon = darkTheme ? (
    <BsFillMoonFill style={{ fontSize: "25px", color: "e6bb00" }} />
  ) : (
    <BsFillSunFill style={{ fontSize: "25px", color: "yellow" }} />
  );

  return (
    <div className="App">
      <h1 className="link">Hi there I'm a link</h1>
      <h1 className={`${theme}`}>Hello World!</h1>
      <button onClick={() => updateDarkTheme(!darkTheme)}>{themeIcon}</button>
    </div>
  );
}

export default App;
