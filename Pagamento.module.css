import { formatarPreco } from '../data/produtos.js'
import styles from './CardProduto.module.css'

export default function CardProduto({ produto, onAdicionar, maquina = false }) {
  return (
    <article className={`${styles.card} ${maquina ? styles.maquina : ''}`}>
      <img src={produto.imagem} alt={produto.nome} className={styles.imagem} loading="lazy" />
      <div className={styles.detalhes}>
        {maquina ? (
          <>
            <p className={styles.preco}>{formatarPreco(produto.preco)}</p>
            <h2 className={styles.nome}>{produto.nome}</h2>
          </>
        ) : (
          <>
            <h2 className={styles.nome}>{produto.nome} — {formatarPreco(produto.preco)}</h2>
            <p className={styles.descricao}>{produto.descricao}</p>
          </>
        )}
      </div>
      <button className={styles.adicionar} type="button" onClick={() => onAdicionar(produto.id)} aria-label={`Adicionar ${produto.nome} ao carrinho`}>
        + Adicionar ao carrinho
      </button>
    </article>
  )
}
