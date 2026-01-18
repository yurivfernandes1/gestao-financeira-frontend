import './CTA.css'

function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Pronto para transformar suas finanças?</h2>
          <p className="cta-description">
            Junte-se a milhares de usuários que já estão no controle de suas finanças. 
            Comece gratuitamente agora mesmo!
          </p>
          <div className="cta-buttons">
            <a href="#signup" className="btn btn-primary btn-large">
              Começar Gratuitamente
            </a>
            <span className="cta-note">✓ Não é necessário cartão de crédito</span>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              <span>Grátis para sempre</span>
            </div>
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              <span>Sem limite de transações</span>
            </div>
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              <span>Suporte prioritário</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
