import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
        </nav>
    );
}