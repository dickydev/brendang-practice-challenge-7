import { Button } from "../../ui/Button/Button";
import Logo from "/gambar1.png";
import Logo2 from "/gambar1.svg";

const Header = () => {
  return (
    <header>
      <div className="bg-black">
        <img src={Logo} alt="" className=" ml-1" />
      </div>
      <nav className="flex justify-between items-center bg-red-500 ">
        <img src={Logo2} alt="" className=" ml-1" />
        <div>
          <Button src={Logo2}>Login</Button>
          <Button>Register</Button>
          <Button>Logout</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
