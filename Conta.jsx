import styles from './Inicio.module.css'

export default function Inicio() {
  return (
    <section className={styles.inicio} aria-labelledby="titulo-inicio">
      <h1 className={styles.tituloOculto} id="titulo-inicio">Mecafor Equipamentos Industriais</h1>
      <img className={styles.logo} src="/images/logo-mecafor.png" alt="Mecafor Equipamentos Industriais" />
      <a className={styles.botao} href="#/conta">ACESSAR</a>
    </section>
  )
}
