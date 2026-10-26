import CategoriaTitulo from '../components/CategoriaTitulo.jsx'
import CardProduto from '../components/CardProduto.jsx'
import { equipamentos } from '../data/produtos.js'
import styles from './Produtos.module.css'

export default function Produtos({ onAdicionar }) {
  return (
    <section className={styles.pagina}>
      <CategoriaTitulo tipo="equipamentos" />
      <div className={styles.grade}>
        {equipamentos.map((produto) => <CardProduto key={produto.id} produto={produto} onAdicionar={onAdicionar} />)}
      </div>
    </section>
  )
}
