import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">💰</span>
              <span className="logo-text">FinanceMax</span>
            </div>
            <p className="footer-description">
              Gestão financeira simples e descomplicada para você ter controle total do seu dinheiro.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Produto</h4>
            <ul className="footer-links">
              <li><a href="#features">Recursos</a></li>
              <li><a href="#benefits">Benefícios</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#demo">Demonstração</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li><a href="#about">Sobre</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Carreiras</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Suporte</h4>
            <ul className="footer-links">
              <li><a href="#help">Central de Ajuda</a></li>
              <li><a href="#docs">Documentação</a></li>
              <li><a href="#privacy">Privacidade</a></li>
              <li><a href="#terms">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 FinanceMax. Todos os direitos reservados.
          </p>
          <div className="footer-social">
            <a href="#twitter" className="social-link">Twitter</a>
            <a href="#linkedin" className="social-link">LinkedIn</a>
            <a href="#instagram" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
