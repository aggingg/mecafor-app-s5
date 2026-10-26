.card { min-width: 0; display: flex; flex-direction: column; align-items: stretch; }
.imagem { width: 100%; height: 220px; object-fit: cover; border-radius: 22px; background: #fff; box-shadow: 0 1px 1px #00000005; }
.detalhes { padding: 13px 8px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.22; }
.nome, .preco, .descricao { font-size: inherit; font-weight: 400; margin: 0; }
.descricao { margin-top: 4px; }
.adicionar { align-self: flex-start; margin: 13px 8px 0; border: 1px solid #8e8e8e; border-radius: 20px; background: #dedede; color: #474747; font-size: 12px; font-weight: 700; padding: 9px 13px; transition: background .16s; }
.adicionar:hover { background: white; }
.maquina .imagem { object-fit: contain; }
.maquina .detalhes { padding-left: 10px; }
.maquina .nome { margin-top: 3px; }
@media (max-width: 800px) {
  .imagem { height: 190px; }
  .detalhes { font-size: 13px; }
}
@media (max-width: 500px) {
  .imagem { height: 170px; border-radius: 16px; }
  .detalhes { font-size: 12px; padding: 9px 3px 0; }
  .adicionar { font-size: 11px; padding: 7px 9px; margin: 10px 3px 0; }
}
