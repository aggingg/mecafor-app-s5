# Mecafor — Loja em React + Vite

Projeto baseado nas 7 telas enviadas: inicial, cadastro/login, equipamentos industriais, máquinas industriais, sobre nós, carrinho e formas de pagamento.

## Como usar no VS Code

1. Extraia este ZIP e abra a pasta `mecafor-vite` no VS Code.
2. Abra o terminal do VS Code: **Terminal > Novo Terminal**.
3. Digite `npm install` (apenas na primeira vez).
4. Digite `npm run dev`.
5. Abra o endereço do terminal (geralmente `http://localhost:5173/`).

> Se você já tem um projeto Vite aberto: copie `src/` e `public/images/` para dentro dele, substituindo os arquivos com mesmo nome. Não é necessário recriar o projeto.

## Onde colocar as imagens?

**Todas as imagens ficam em `public/images/`**. Nesta entrega, a pasta já vem preenchida com recortes **provisórios em baixa resolução**, extraídos das suas próprias prints. Substitua cada recorte pela foto original com o **mesmo nome**: o site vai atualizar automaticamente.

| Arquivo em `public/images/` | Onde aparece |
| --- | --- |
| `logo-mecafor.png` | Página inicial, login/cadastro e sobre nós |
| `simbolo-mecafor.png` | Logo pequeno no topo das páginas |
| `marca-dagua.svg` | Símbolo cinza clarinho no fundo (incluso e não precisa trocar) |
| `epi-completo.png` | Equipamentos: primeiro item |
| `epi-construcao.png` | Equipamentos: segundo item |
| `epi-profissional.png` | Equipamentos: terceiro item (e carrinho) |
| `epi-basico.png` | Equipamentos: quarto item |
| `epi-seguranca.png` | Equipamentos: quinto item |
| `epi-completo-2.png` | Equipamentos: sexto item |
| `epi-manutencao.png` | Equipamentos: sétimo item |
| `maquina-envasadora.png` | Máquinas: primeiro item |
| `maquina-arqueadora.png` | Máquinas: segundo item (e carrinho) |
| `maquina-seladora.png` | Máquinas: terceiro item |
| `maquina-arqueadora-semi.png` | Máquinas: quarto item |
| `maquina-encapsuladora.png` | Máquinas: quinto item |
| `maquina-seladora-l.png` | Máquinas: sexto item (e carrinho) |

### E se a minha imagem tiver outro nome?

Você pode editar o nome ou caminho da imagem dentro de `src/data/produtos.js`:

```js
{
  id: 'epi-profissional',
  nome: 'Kit de EPIs Profissional',
  preco: 249.90,
  imagem: '/images/epi-profissional.png', // MUDE AQUI para seu arquivo
  descricao: '...',
}
```

Para trocar a logo do topo, edite `src/App.jsx` (procure `simbolo-mecafor.png`). Para trocar a logo grande, edite `src/pages/Inicio.jsx`, `Conta.jsx` e `Sobre.jsx` (procure `logo-mecafor.png`). Para trocar a marca d'água, edite o final de `src/App.module.css`.

**Sugestão:** imagens JPG ou PNG, com fundo claro e resolução ideal de aproximadamente 800×600 ou maior.

## Estrutura dos arquivos

```text
mecafor-vite/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/                <-- COLOQUE SUAS IMAGENS AQUI
└── src/
    ├── main.jsx
    ├── index.css               <-- estilos gerais
    ├── App.jsx                 <-- rotas, cabeçalho, carrinho
    ├── App.module.css
    ├── data/
    │   └── produtos.js         <-- nomes, fotos e preços
    ├── components/
    │   ├── CategoriaTitulo.jsx
    │   ├── CategoriaTitulo.module.css
    │   ├── CardProduto.jsx
    │   └── CardProduto.module.css
    └── pages/
        ├── Inicio.jsx
        ├── Inicio.module.css
        ├── Conta.jsx
        ├── Conta.module.css
        ├── Produtos.jsx
        ├── Produtos.module.css
        ├── Maquinas.jsx
        ├── Maquinas.module.css
        ├── Sobre.jsx
        ├── Sobre.module.css
        ├── Carrinho.jsx
        ├── Carrinho.module.css
        ├── Pagamento.jsx
        └── Pagamento.module.css
```

## Navegação e comportamentos

- A tela **ACESSAR** leva ao login/cadastro.
- **Ver produtos sem entrar** leva ao catálogo.
- A aba **EPIs** leva aos equipamentos; a aba **Máquinas** leva ao maquinário.
- Cada produto tem botão **Adicionar ao carrinho**.
- O **Carrinho** mostra itens e permite aumentar e diminuir quantidades, recalculando os valores.
- **Finalizar compra** abre a tela de **Formas de pagamento**.
- Você pode escolher Pix, crédito ou débito.
- As rotas usam `#/...` (funcionam no Vite sem instalar React Router).
- O carrinho é salvo no navegador usando `localStorage`. Na primeira visita, ele começa com 3 exemplos como na sua print. Para começar vazio, troque `CARRINHO_EXEMPLO` em `src/App.jsx` por `[]` e limpe a chave `mecafor_carrinho` do armazenamento local do navegador.

## Importante

Este é um **protótipo front-end funcional de navegação e carrinho**. O login/cadastro é visual (sem gravar senhas) e **não existe cobrança real nem processamento de pagamento**. Para vender de verdade, será necessário conectar um backend seguro, autenticação e um provedor de pagamento. Os preços e nomes são exemplos transcritos das prints e podem ser editados em `src/data/produtos.js`.
