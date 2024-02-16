import { css } from "../styled-system/css";
import Button from "./components/Button";

export default function App() {
  return (
    <div className={css({ padding: "40px" })}>
      <Button icon="plus" disabled>
        Label
      </Button>
    </div>
  );
}
