import { HaveAccess } from "../components/Secret/HaveAccess";
import { NotAccess } from "../components/Secret/NotAccess";

export default function SecretGame() {
  const token = sessionStorage.getItem("token-to-secret-game");
  if (token === "true") {
    return <HaveAccess />;
  } else {
    return <NotAccess />;
  }
}
