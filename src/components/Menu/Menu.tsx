import { Link } from "react-router-dom";
 
export default function Menu(){
    return(
        <nav className="flex justify-center gap-6 p-4">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/login" className="hover:text-gray-400">Login</Link>
            <Link to="/cadastro" className="hover:text-gray-400">Cadastro</Link>
            <Link to="/remedios" className="hover:text-gray-400">Remédios</Link>
        </nav>
    );
}