import { useEffect, useState } from "react";
import type { TipoNoticia } from "../../types/tipoNoticia";
import CardNoticias from "../../components/CardNoticia/CardNoticia";

const URL_NOTICIAS = import.meta.env.VITE_API_URL;
const URL_TOKEN = import.meta.env.VITE_TOKEN;

export default function Home() {
  const [noticias, setNoticias] = useState<TipoNoticia[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("URL chamada:", `${URL_NOTICIAS}&apiKey=${URL_TOKEN}`);
        const response = await fetch(`${URL_NOTICIAS}&apiKey=${URL_TOKEN}`);
        const data = await response.json();
        console.log(data)
        const lista: TipoNoticia[] = data.articles.map((n: TipoNoticia) => ({
          id: n.id,
          title: n.title,
          description: n.description,
          url: n.url,
          urlToImage: n.urlToImage
        }));

        setNoticias(lista);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Notícias sobre Saúde</h1>
      <div>
        {noticias.map((n) => (
          <CardNoticias key={n.url} noticia={n} />
        ))}
      </div>
    </main>
  );
}