export default function Home() {
  return (
    <main className="home-page">
      <section className="home-banner">
        <div className="home-banner-content">
          <h2>Promoções dos Dia!</h2>
          <p>Com até 30% de desconto. Aproveite!</p>
          <a href="#" className="cta-button">
            Confira
          </a>
        </div>
      </section>

      <section className="category-section">
        <h3 className="category-title">Navegue por categorias</h3>
        <div className="category-grid">
          <div className="category-card">
            <div className="category-card-icon"></div> 
            <p>Mais Buscados</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon"></div>
            <p>Nossas ofertas</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon"></div>
            <p>Dose Certa</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon"></div>
            <p>As melhores opções para você</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon"></div>
            <p>Cupons</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon"></div>
            <p>Manipulação</p>
          </div>
        </div>
      </section>

      <section className="text-center p-16 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-700">
          Mais seções em breve
        </h3>
        <p className="text-gray-500 mt-2">
          Esta é uma página de exemplo. Mais conteúdo, como listas de produtos,
          seria adicionado aqui.
        </p>
      </section>
    </main>
  );
}