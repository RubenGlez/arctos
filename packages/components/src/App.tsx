import { css } from "../styled-system/css";

function App() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
      Hello 🐼!
      <span className={css({ textStyle: "" })}>alaaaa</span>
    </div>
  );
}

export default App;
