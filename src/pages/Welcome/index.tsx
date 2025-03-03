import { Link } from "react-router";

import { ROUTES } from "@/utils/constants";

function WelcomePage() {
  return (
    <div>
      WelcomePage
      <div>
        <Link to={ROUTES.LOGIN} viewTransition>Login</Link>
        <Link to={ROUTES.REGISTER} viewTransition>Register</Link>
      </div>
    </div>
  );
}

export default WelcomePage;
