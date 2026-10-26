// Para trocar uma foto, mantenha o nome de arquivo e substitua em public/images/.
// Caso prefira outro nome, altere apenas a propriedade "imagem" abaixo.
export const equipamentos = [
  {
    id: 'epi-completo',
    nome: 'Kit de EPIs',
    preco: 128.90,
    imagem: '/images/epi-completo.png',
    descricao: 'Proteção completa para o trabalho: luvas, óculos, protetor auricular, máscara e colete refletivo. Ideal para indústrias, obras e manutenção.',
  },
  {
    id: 'epi-construcao',
    nome: 'Kit de EPIs',
    preco: 178.90,
    imagem: '/images/epi-construcao.png',
    descricao: 'Proteção e segurança para o trabalho: capacete, luvas, óculos de proteção, protetor auricular e colete refletivo. Ideal para indústrias, obras e manutenção.',
  },
  {
    id: 'epi-profissional',
    nome: 'Kit de EPIs Profissional',
    preco: 249.90,
    imagem: '/images/epi-profissional.png',
    descricao: 'Proteção e segurança para o trabalho: capacete, botas, luvas, óculos de proteção, protetores auriculares, máscaras respiratórias e máscara de solda. Ideal para indústrias, obras, soldagem e manutenção.',
  },
  {
    id: 'epi-basico',
    nome: 'Kit de EPIs Básico',
    preco: 119.90,
    imagem: '/images/epi-basico.png',
    descricao: 'Proteção e segurança para o trabalho: capacete, luvas, óculos de proteção e protetor auricular. Ideal para indústrias, obras e manutenção.',
  },
  {
    id: 'epi-seguranca',
    nome: 'Kit de Segurança e Ferramentas',
    preco: 159.90,
    imagem: '/images/epi-seguranca.png',
    descricao: 'Praticidade e proteção para o trabalho: capacete, luvas, furadeira, alicates, chaves e trena. Ideal para construção civil, reparos e manutenção.',
  },
  {
    id: 'epi-completo-2',
    nome: 'Kit de EPIs Completo',
    preco: 149.90,
    imagem: '/images/epi-completo-2.png',
    descricao: 'Proteção e segurança para o trabalho: luvas, óculos de proteção, protetor auricular, máscara respiratória e colete refletivo. Ideal para indústrias, obras e manutenção.',
  },
  {
    id: 'epi-manutencao',
    nome: 'Kit de EPIs para Manutenção',
    preco: 139.90,
    imagem: '/images/epi-manutencao.png',
    descricao: 'Proteção e segurança para o trabalho: óculos de proteção, luvas, protetor auricular, máscara respiratória e colete refletivo. Ideal para indústrias, oficinas e manutenção.',
  },
]

export const maquinas = [
  {
    id: 'maquina-envasadora',
    nome: 'Envasadora Automática de 2 Bicos para Pós com Esteira Transportadora – VSFI-30A 220V ou 380V',
    preco: 23275.69,
    imagem: '/images/maquina-envasadora.png',
  },
  {
    id: 'maquina-arqueadora',
    nome: 'Arqueadora Automática SPCI-50AD com Esteira Centralizadora Motorizada - Supplypack',
    preco: 250000.00,
    imagem: '/images/maquina-arqueadora.png',
  },
  {
    id: 'maquina-seladora',
    nome: 'Máquina para Embalagem de E-Commerce SPD-70E - Supplypack',
    preco: 85000.00,
    imagem: '/images/maquina-seladora.png',
  },
  {
    id: 'maquina-arqueadora-semi',
    nome: 'Arqueadora Semiautomática SPT-10 Supplypack',
    preco: 56683.68,
    imagem: '/images/maquina-arqueadora-semi.png',
  },
  {
    id: 'maquina-encapsuladora',
    nome: 'Encapsuladora Automática com Painel Digital Rg-Sy800 Ref: 38347',
    preco: 349990.00,
    imagem: '/images/maquina-encapsuladora.png',
  },
  {
    id: 'maquina-seladora-l',
    nome: 'Seladora em L Automática - BSF5640LG 220V',
    preco: 61658.92,
    imagem: '/images/maquina-seladora-l.png',
  },
]

export const todosProdutos = [...equipamentos, ...maquinas]

export const buscarProduto = (id) => todosProdutos.find((p) => p.id === id)

export const formatarPreco = (preco) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
