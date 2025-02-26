import { ROUTES } from "@/utils/constants";
import { Link } from "react-router";

function WelcomePage() {
  return (
    <div>
      WelcomePage
      <div>
        <Link to={ROUTES.LOGIN}>Login</Link>
        <Link to={ROUTES.REGISTER}>Register</Link>
      </div>
    </div>
  );
}

export default WelcomePage;
