import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <section className={styles.pagina}>
      <img className={styles.logo} src="/images/logo-mecafor.png" alt="Mecafor Equipamentos Industriais" />
      <div className={styles.texto}>
        <h1>Sobre nós</h1>
        <p>A MecaFor é uma empresa dedicada a oferecer soluções em Equipamentos de Proteção Individual (EPI's) e máquinas industriais, atendendo às necessidades de empresas e profissionais que buscam mais segurança, eficiência e produtividade em suas operações.</p>
        <p>Nosso compromisso é disponibilizar produtos que contribuam para um ambiente de trabalho mais seguro e para o bom desempenho das atividades industriais. Trabalhamos com foco na qualidade, na confiança e na busca pelas melhores soluções para cada necessidade.</p>
        <p>Na MecaFor, acreditamos que segurança e produtividade caminham juntas. Por isso, buscamos construir parcerias duradouras com nossos clientes, oferecendo um atendimento comprometido e soluções que agreguem valor ao dia a dia de cada negócio.</p>
      </div>
    </section>
  )
}
