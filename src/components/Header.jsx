import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">💰</span>
            <span className="logo-text">FinanceMax</span>
          </div>
          <nav className="nav">
            <a href="#features" className="nav-link">Recursos</a>
            <a href="#benefits" className="nav-link">Benefícios</a>
            <a href="#cta" className="nav-link">Começar</a>
          </nav>
          <div className="header-actions">
            <a href="#login" className="btn-login">Entrar</a>
            <a href="#signup" className="btn btn-primary">Criar Conta</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
