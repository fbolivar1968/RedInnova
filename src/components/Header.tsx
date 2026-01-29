import logoForjas from "@/assets/logo-forjas-bolivar.png";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
  return (
    <header className="bg-secondary py-3 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <img onClick={() => navigate("/")}
          src={logoForjas} 
          alt="Forjas Bolívar" 
          className="h-12 object-contain"
        />
        <h1 className="text-xl font-bold text-secondary-foreground">RedINNova</h1>
      </div>
    </header>
  );
};

export default Header;
