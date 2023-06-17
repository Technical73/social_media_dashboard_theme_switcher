import {
  HeaderComponent,
  OverViewComponent,
  UsersComponent,
} from "./Components";
import { useState, useEffect } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <div className="mainContainer">
        <HeaderComponent dark={darkMode} setDarkMode={setDarkMode} />
        <UsersComponent dark={darkMode} />
        <OverViewComponent dark={darkMode} />
      </div>
    </>
  );
}

export default App;
