import { useState } from 'react'
import styles from './Conta.module.css'

function IconeCampo({ tipo }) {
  return tipo === 'senha' ? (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10V7a5 5 0 0 1 10 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1zm2 0h6V7a3 3 0 0 0-6 0v3z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="7" r="5" />
      <path d="M2 23c0-6 4.2-9 10-9s10 3 10 9H2z" />
    </svg>
  )
}

function Campo({ tipo = 'text', placeholder, icone, value, onChange, autoComplete }) {
  return (
    <label className={styles.campo}>
      <span className={styles.icone}><IconeCampo tipo={icone} /></span>
      <span className={styles.oculto}>{placeholder}</span>
      <input type={tipo} placeholder={placeholder} value={value} onChange={onChange} autoComplete={autoComplete} required />
    </label>
  )
}

export default function Conta() {
  const [nomeLogin, setNomeLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')
  const [nomeCadastro, setNomeCadastro] = useState('')
  const [senhaCadastro, setSenhaCadastro] = useState('')
  const [confirmacao, setConfirmacao] = useState('')
  const [mensagem, setMensagem] = useState('')

  function entrar(evento) {
    evento.preventDefault()
    // Protótipo de interface: nenhum dado sensível é salvo localmente.
    setMensagem('Login demonstrativo. Conecte um backend para autenticar usuários de verdade.')
  }

  function cadastrar(evento) {
    evento.preventDefault()
    if (senhaCadastro !== confirmacao) {
      setMensagem('As senhas informadas não coincidem.')
      return
    }
    setMensagem('Cadastro demonstrativo. Conecte um backend para salvar a conta com segurança.')
  }

  return (
    <section className={styles.pagina}>
      <img className={styles.logo} src="/images/logo-mecafor.png" alt="Mecafor Equipamentos Industriais" />
      <div className={styles.conteudo}>
        <form className={styles.formulario} onSubmit={entrar}>
          <h1 className={styles.etiqueta}>Já possui uma conta?</h1>
          <Campo placeholder="Nome de usuário" icone="usuario" value={nomeLogin} onChange={(e) => setNomeLogin(e.target.value)} autoComplete="username" />
          <Campo tipo="password" placeholder="Senha" icone="senha" value={senhaLogin} onChange={(e) => setSenhaLogin(e.target.value)} autoComplete="current-password" />
          <button className={styles.botao} type="submit">ENTRAR</button>
          <a className={styles.acessoLivre} href="#/produtos">Ver produtos sem entrar</a>
        </form>
        <div className={styles.divisoria} aria-hidden="true" />
        <form className={styles.formulario} onSubmit={cadastrar}>
          <h2 className={styles.etiqueta}>Não possui uma conta?</h2>
          <Campo placeholder="Nome de usuário" icone="usuario" value={nomeCadastro} onChange={(e) => setNomeCadastro(e.target.value)} autoComplete="username" />
          <Campo tipo="password" placeholder="Digite sua senha" icone="senha" value={senhaCadastro} onChange={(e) => setSenhaCadastro(e.target.value)} autoComplete="new-password" />
          <Campo tipo="password" placeholder="Confirme sua senha" icone="senha" value={confirmacao} onChange={(e) => setConfirmacao(e.target.value)} autoComplete="new-password" />
          <button className={styles.botao} type="submit">CADASTRAR</button>
        </form>
      </div>
      {mensagem && <p role="status" className={styles.mensagem}>{mensagem}</p>}
    </section>
  )
}
