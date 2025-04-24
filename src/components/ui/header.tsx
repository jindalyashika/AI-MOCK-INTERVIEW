import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logocontainer";
import { NavigationRoutes } from "./navigationRoutes";
import { NavLink } from "react-router-dom"; // Corrected from react-router
import { ProfileContainer } from "./profilecontainer";
import { ToogleContainer } from "./tooglecontainer";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to="/generate"
                className={({ isActive }) =>
                  cn(
                    "text-base font-semibold",
                    isActive ? "text-neutral-900" : "text-neutral-500"
                  )
                }
              >
                Take an Interview
              </NavLink>
            )}
          </nav>

          {/* profile section */}
          <div className="ml-auto flex items-center gap-6">
            <ProfileContainer />
            {/* mobile toggle section */}
            <ToogleContainer/>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
