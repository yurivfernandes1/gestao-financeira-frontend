import './Features.css'

function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Dashboard Intuitivo',
      description: 'Visualize todas as suas finanças em um único lugar com gráficos e relatórios detalhados.'
    },
    {
      icon: '💳',
      title: 'Controle de Despesas',
      description: 'Registre e categorize suas despesas automaticamente para entender seus gastos.'
    },
    {
      icon: '🎯',
      title: 'Metas Financeiras',
      description: 'Defina objetivos e acompanhe seu progresso rumo à independência financeira.'
    },
    {
      icon: '📈',
      title: 'Relatórios Personalizados',
      description: 'Gere relatórios customizados e analise suas finanças de forma aprofundada.'
    },
    {
      icon: '🔔',
      title: 'Alertas Inteligentes',
      description: 'Receba notificações sobre vencimentos, metas e movimentações importantes.'
    },
    {
      icon: '🔒',
      title: 'Segurança Total',
      description: 'Seus dados protegidos com criptografia de ponta a ponta e segurança bancária.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Recursos Poderosos</h2>
        <p className="section-subtitle">
          Tudo que você precisa para ter controle total das suas finanças em uma única plataforma
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
