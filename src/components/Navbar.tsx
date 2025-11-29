import Logo from "./Logo";
import { Link } from "react-router-dom";
import Container from "./Container";
import LoginHandler from "./LoginHandler";
import SearchBar from "./SearchBar";
import MenuDrawer from "./MenuDrawer";

export const menus = [
  { label: "Home", path: "/" },
  { label: "Blogs", path: "/blogs" },
  { label: "My Blogs", path: "/blogs/me" },
];
const Navbar = () => {
  return (
    <Container>
      <div className="h-full py-3 flex items-center justify-between">
        <div className="flex gap-8 justify-center items-center">
          <Logo />
        <div className="lg:flex gap-2.5 hidden">
          {menus?.map((m) => {
            return (
              <Link className="text-white font-semibold text-lg" to={m?.path}>
                {m?.label}
              </Link>
            );
          })}
        </div>
        </div>
        <SearchBar />
        
        <div className="flex gap-2 items-center">
          <div className="hidden lg:block">
            <LoginHandler />
          </div>
          <MenuDrawer />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
