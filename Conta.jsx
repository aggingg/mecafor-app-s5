.pagina { width: min(1200px, 100%); min-height: calc(100vh - 82px); margin: auto; padding: 32px 36px 100px; }
.cabecalho { color: var(--texto-acento); text-align: center; }
.cabecalho h1 { font-size: clamp(55px, 6.8vw, 90px); line-height: 1.05; letter-spacing: 1px; margin: 0; }
.linha { width: min(565px, 80%); height: 1px; background: #717a80; margin: 16px auto 24px; }
.cabecalho p { font-size: 24px; letter-spacing: 1px; line-height: 1.2; margin: 0; }
.opcoes { width: min(680px, 100%); border: 0; padding: 0; margin: 100px auto 95px; display: grid; gap: 48px; }
.opcao { display: flex; align-items: center; width: 100%; min-height: 106px; border: 1px solid #96999d; border-radius: 9px; background: #d8d8d8; color: #737373; cursor: pointer; transition: background .15s, border-color .15s; }
.opcao:hover { background: #e1e1e1; }
.opcao input { position: absolute; opacity: 0; width: 1px; height: 1px; }
.opcao:focus-within { outline: 3px solid #707980; outline-offset: 3px; }
.selecionada { background: #e5e6e7; border-color: #59666d; }
.faixa { height: 58px; width: 1px; background: #b9b9b9; margin-left: 88px; margin-right: 33px; }
.nome { font-size: 16px; }
.check { margin-left: auto; padding-right: 30px; font-size: 28px; color: #4e5b62; }
.aviso { margin: -53px auto 58px; max-width: 690px; text-align: center; color: #4e575b; font-size: 14px; }
.separador { height: 1px; background: #808080; margin-bottom: 28px; }
.links { display: flex; flex-direction: column; align-items: center; gap: 56px; }
.links a { display: grid; place-items: center; width: min(600px, 100%); min-height: 104px; border-radius: 8px; background: #dcdcdc; box-shadow: 0 3px 2px #0002; font-size: clamp(17px, 2.1vw, 27px); font-weight: 700; color: #4a4a4a; text-align: center; padding: 16px; }
.links a:hover { background: #eeeeee; }
.oculto { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
@media (max-width: 640px) {
  .pagina { padding: 30px 20px 70px; }
  .cabecalho h1 { font-size: clamp(43px, 10vw, 60px); }
  .cabecalho p { font-size: 19px; }
  .opcoes { margin: 70px auto 75px; gap: 27px; }
  .opcao { min-height: 83px; }
  .faixa { margin-left: 33px; margin-right: 25px; height: 43px; }
  .links { gap: 28px; }
  .links a { min-height: 75px; font-size: 17px; }
}
