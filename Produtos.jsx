import styles from './CategoriaTitulo.module.css'

export default function CategoriaTitulo({ tipo }) {
  const equipamentos = tipo === 'equipamentos'
  return (
    <div className={styles.container}>
      <svg className={styles.ferramentas} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 7 7 11l9 9-6 6 12 12 6-6-12-12 6-6 9 9 4-4-9-9-4 4-11-11z"/>
        <path d="M35 7c-7 0-11 7-9 13L10 36a5 5 0 0 0 7 7l16-16c6 2 13-2 13-9l-8 7-7-7z"/>
      </svg>
      <h1>{equipamentos ? <>Equipamentos<br />industriais</> : <>Máquinas<br />industriais</>}</h1>
      <div className={styles.opcoes} aria-label="Categorias">
        <a className={equipamentos ? styles.selecionado : ''} href="#/produtos">EPIs</a>
        <a className={!equipamentos ? styles.selecionado : ''} href="#/maquinas">Máquinas</a>
      </div>
    </div>
  )
}
