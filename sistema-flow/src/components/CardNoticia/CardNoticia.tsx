import type { TipoNoticia } from "../../types/tipoNoticia";
import { Link } from "react-router-dom";

export default function CardNoticias(props:{noticia: TipoNoticia}){
    return(
        <div className="cardNoticia">
            <h1 className="noticiaTitulo">{props.noticia.title}</h1>
            <p className="descricaoNoticia">{props.noticia.description}</p>
            <Link to={props.noticia.url} className="link">Saiba mais</Link>
            <img src={props.noticia.urlToImage} alt={props.noticia.title}/>
        </div>
    );
}