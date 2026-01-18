import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Gerencie suas finanças de forma 
              <span className="highlight"> simples e descomplicada</span>
            </h1>
            <p className="hero-description">
              Controle total das suas receitas, despesas e investimentos em uma única plataforma. 
              Tome decisões financeiras mais inteligentes com dados em tempo real.
            </p>
            <div className="hero-buttons">
              <a href="#signup" className="btn btn-primary">Começar Gratuitamente</a>
              <a href="#demo" className="btn btn-secondary">Ver Demonstração</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Usuários Ativos</span>
              </div>
              <div className="stat">
                <span className="stat-number">R$ 50M+</span>
                <span className="stat-label">Gerenciados</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Avaliação</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="card">
                  <h3>Saldo Total</h3>
                  <p className="amount">R$ 12.450,00</p>
                </div>
                <div className="chart-placeholder">
                  <div className="bar" style={{height: '40%'}}></div>
                  <div className="bar" style={{height: '70%'}}></div>
                  <div className="bar" style={{height: '50%'}}></div>
                  <div className="bar" style={{height: '90%'}}></div>
                  <div className="bar" style={{height: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
