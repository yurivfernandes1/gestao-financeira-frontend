import './Benefits.css'

function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <h2 className="section-title">Por que escolher o FinanceMax?</h2>
        <p className="section-subtitle">
          Transforme a maneira como você gerencia seu dinheiro
        </p>
        <div className="benefits-content">
          <div className="benefit-item">
            <div className="benefit-number">01</div>
            <div className="benefit-info">
              <h3 className="benefit-title">Simples de Usar</h3>
              <p className="benefit-description">
                Interface intuitiva e fácil de navegar. Não é necessário conhecimento técnico, 
                qualquer pessoa pode usar.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">02</div>
            <div className="benefit-info">
              <h3 className="benefit-title">Economia de Tempo</h3>
              <p className="benefit-description">
                Automatize suas finanças e ganhe horas do seu dia. Foque no que realmente importa 
                enquanto cuidamos do resto.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">03</div>
            <div className="benefit-info">
              <h3 className="benefit-title">Decisões Inteligentes</h3>
              <p className="benefit-description">
                Tome decisões baseadas em dados reais. Visualize padrões e identifique 
                oportunidades de economia.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">04</div>
            <div className="benefit-info">
              <h3 className="benefit-title">Acesso de Qualquer Lugar</h3>
              <p className="benefit-description">
                Gerencie suas finanças de qualquer dispositivo. Seus dados sempre sincronizados 
                e acessíveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
