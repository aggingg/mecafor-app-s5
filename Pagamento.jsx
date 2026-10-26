.pagina { min-height: calc(100vh - 82px); width: min(1180px, 100%); margin: auto; padding: 55px 24px 100px; }
.cabecalho { text-align: center; color: var(--texto-acento); }
.cabecalho h1 { margin: 0; font-size: clamp(53px, 7vw, 87px); line-height: 1; font-weight: 700; letter-spacing: 2px; }
.linha { height: 1px; background: #6f7579; width: min(590px, 80%); margin: 14px auto 16px; }
.cabecalho p { font-size: 24px; line-height: 1.2; letter-spacing: 1px; margin: 0; }
.acoes { display: flex; justify-content: space-between; width: min(850px, 90%); margin: 40px auto 95px; gap: 20px; }
.botao { min-width: 230px; text-align: center; border: 1px solid #a9adb1; background: #d8d9da; border-radius: 9px; padding: 15px 20px; font-weight: 700; font-size: 13px; color: #484848; box-shadow: 0 4px 2px #0002; }
.botao:hover { background: #ededed; }
.lista { display: flex; flex-direction: column; align-items: center; gap: 72px; }
.item { width: min(730px, 100%); padding: 14px 22px 25px; min-height: 222px; border-radius: 10px; border: 1px solid #a5a8ad; background: #d4d6d8; box-shadow: 0 3px 2px #0003; }
.item h2 { font: 18px Georgia, 'Times New Roman', serif; font-weight: 400; margin: 0 0 18px; }
.itemCorpo { display: flex; align-items: center; gap: 45px; }
.itemCorpo img { width: 215px; height: 135px; object-fit: contain; border: 1px solid #d1d1d1; border-radius: 12px; box-shadow: 0 3px 2px #0003; background: white; }
.info { display: flex; flex-direction: column; gap: 20px; }
.controles { display: flex; align-items: center; gap: 25px; }
.controles button { width: 48px; height: 44px; border: 1px solid #b3b8be; border-radius: 6px; background: #d5d7da; box-shadow: 0 3px 1px #0003; font-size: 39px; font-weight: 700; line-height: 32px; padding: 0; display: grid; place-items: center; }
.controles button:hover { background: #edf0f2; }
.controles span { min-width: 20px; font: 16px Georgia, serif; text-align: center; }
.info p { margin: 0; font: 18px Georgia, 'Times New Roman', serif; }
.total { text-align: center; font-size: 19px; margin: 42px 0 0; color: #42464a; }
.vazio { padding: 42px; text-align: center; background: #ddd; border-radius: 12px; }
.vazio a { display: inline-block; margin-top: 10px; text-decoration: underline; }
@media (max-width: 640px) {
  .pagina { padding-top: 45px; }
  .cabecalho h1 { font-size: 50px; }
  .cabecalho p { font-size: 18px; }
  .acoes { width: 100%; flex-wrap: wrap; justify-content: center; margin: 34px auto 55px; }
  .botao { min-width: 180px; font-size: 12px; }
  .lista { gap: 25px; }
  .item { padding: 15px; min-height: 0; }
  .item h2 { font-size: 15px; }
  .itemCorpo { gap: 15px; }
  .itemCorpo img { width: min(42%, 170px); height: 108px; }
  .controles { gap: 9px; }
  .controles button { width: 33px; height: 33px; font-size: 27px; line-height: 27px; }
  .info { gap: 15px; }
  .info p { font-size: 13px; }
}
