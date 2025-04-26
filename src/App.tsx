import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layouts";
import AuthenticationLayout from "@/layouts/auth-lauout";
import ProtectedRoutes from "@/layouts/protectedroutes";
import {MainLayout} from "@/layouts/mainlayout";

import HomePage from "@/routes/home";

import { SignInPage } from "./routes/signin";
import { SignUpPage } from "./routes/signup";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

      {/* authentication layout */}
      <Route element={<AuthenticationLayout />}>
      <Route path="/signin/*" element={<SignInPage />}></Route>
      <Route path="/signup/*" element={<SignUpPage />}></Route>
      </Route>

      {/* protected routes */}
      <Route element={<ProtectedRoutes>MainLayout</ProtectedRoutes>}>
      {/*add all the protected routes */}
      </Route>
    </Routes>
    </Router>
  )};

export default App;
