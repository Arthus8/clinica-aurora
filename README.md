# Clínica Aurora — Projeto 01

Landing page estática para uma **clínica fictícia**, desenvolvida com HTML, CSS e JavaScript, sem frameworks, backend, banco de dados ou instalação de dependências.

**Status desta versão:** código e documentação preparados. A publicação no GitHub, a hospedagem online, a gravação do vídeo e o PDF com os links reais continuam pendentes. Os resultados dos testes estão em [docs/testes.md](docs/testes.md).

> **Internet para as fotos:** as oito fotografias são carregadas do Pexels. Elas não estão incluídas como arquivos locais. Sem conexão, a página mostra avisos no lugar das fotos. Confira o carregamento de todas elas antes da apresentação; a foto de cada membro da equipe é requisito obrigatório.

**Limite dos testes:** foram verificados a estrutura dos arquivos e o comportamento da interface em uma cópia carregada na memória do Chromium. As políticas deste ambiente bloquearam a abertura direta por `file://` e HTTP local; essas duas formas de execução, a política CSP em funcionamento e o carregamento real das fotos ainda precisam ser conferidos no seu navegador. Os testes não comprovam uma publicação online.

## Identificação acadêmica

| Campo | Preencher antes da entrega |
|---|---|
| Aluno(a) | PENDENTE |
| Matrícula | PENDENTE |
| Disciplina | PENDENTE |
| Professor(a) | PENDENTE |
| Repositório | PENDENTE — link real após publicação |
| Vídeo de até 5 minutos | PENDENTE — link real após gravação e publicação |
| Site online (opcional) | PENDENTE — link real após implantação |

## Execução — sem terminal

1. Extraia **todo** o ZIP. Não execute o HTML de dentro da pasta compactada.
2. Abra a pasta `clinica-aurora`.
3. Dê dois cliques em `index.html` ou use **Abrir com → navegador**.
4. Mantenha a conexão com a internet para carregar as fotografias.

Não precisa instalar Node.js, Python, Docker ou um banco de dados. As pastas `assets` e `docs` devem permanecer na mesma estrutura. A página também pode ser servida como conteúdo estático por um servidor web.

## O que foi implementado

| Requisito do enunciado | Onde conferir |
|---|---|
| Título da aba | `<title>` em `index.html` |
| Pelo menos duas imagens de serviços | Quatro fotografias na seção `#servicos` |
| Descrição dos serviços | Quatro cards: consultas, exames, nutrição e acompanhamento |
| Equipe fictícia com pelo menos três membros, foto e cargo | Seção `#equipe`, com três perfis e fotografias distintas |
| Pelo menos dois níveis de cabeçalhos | `h1`, `h2` e `h3` na página |
| Formulário com nome, e-mail, cidade e estado | Seção `#contato`, com campos obrigatórios e seleção de estado |
| Formulário sem processamento após envio | Simulação visual, sem transmissão de dados ou processamento em servidor |

Também há menu adaptado para telas pequenas, textos alternativos, rótulos de formulário, foco visível, atalho para o conteúdo e respeito à preferência de redução de movimento. Esses recursos não representam uma certificação completa de acessibilidade.

## Como o código funciona

**`index.html`** contém o conteúdo e sua estrutura semântica. Usa `header`, `nav`, `main`, `section`, `article`, `form` e `footer`. Os links com `#` levam às seções na própria página.

**`assets/css/style.css`** define identidade visual, tipografia do sistema, espaçamentos, cards e adaptação às larguras de tela. As variáveis no início concentram as cores. Grid e Flexbox organizam o layout.

**`assets/js/main.js`** controla o menu móvel, intercepta o envio do formulário e mostra o aviso da simulação. Os campos são validados no navegador. Não há gravação em JSON, cookies, `localStorage`, envio por e-mail ou chamada de API. As únicas dependências externas da landing page são as fotografias carregadas pelas tags `img`.

**Falha de JavaScript:** o menu continua disponível, o botão de simulação permanece desabilitado e a política `form-action 'none'` bloqueia submissões nativas. Não remova essa proteção sem revisar o comportamento do formulário.

**Escopo:** não inclui agendamento, disponibilidade, CPF, login, APIs ou banco de dados. Esses itens pertencem aos outros projetos do enunciado.

## Publicação no GitHub

Crie um repositório público para o trabalho, sem incluir dados reais de pacientes. Pelo navegador, use **Add file → Upload files**, arraste o conteúdo da pasta e confirme o commit. O arquivo `index.html` deve ficar na raiz, ao lado de `README.md`, `assets` e `docs`; não envie apenas o ZIP.

Para a publicação opcional no **GitHub Pages**, abra **Settings → Pages → Build and deployment**, selecione **Deploy from a branch**, escolha a branch que contém os arquivos (normalmente `main`), a pasta **/(root)** e salve. Após a implantação, copie o endereço exibido pelo GitHub. Verifique também os caminhos das fotos, CSS e JavaScript no endereço publicado.

Fontes oficiais, consultadas em 17/09/2026:
- [Adicionar arquivos pelo navegador](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Configurar a origem de publicação do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Organização e marcos

O plano é uma **proposta de execução por semanas relativas**, não um registro de trabalho realizado no passado. Ajuste o cronograma às datas da disciplina.

| Marco | Momento | Entrega esperada |
|---|---|---|
| 1 | Semana 3 | EAP, escopo e planejamento de implementação |
| 2 | Semana 6 | Versão parcial com serviços, equipe e formulário, pronta para testes |
| 3 | Semana 9 | Versão revisada, repositório publicado, vídeo acessível e PDF com os links |

Leia [docs/planejamento.md](docs/planejamento.md) e `docs/EAP_e_Planejamento.pdf`. O plano de testes e seus limites estão em [docs/testes.md](docs/testes.md).

## Apresentação e PDF

O roteiro em [docs/roteiro-video.md](docs/roteiro-video.md) prevê aproximadamente **4 minutos e 40 segundos**. Grave sua própria explicação e demonstração; o vídeo não foi produzido por esta entrega.

Depois de publicar repositório e vídeo, abra **`docs/entrega.html`**, preencha os links e sua identificação, confira o acesso em janela anônima e use **Atualizar documento → Salvar em PDF**. O navegador deve salvar a área do documento, sem os controles de edição. Confira os links clicáveis no PDF resultante.

`docs/Modelo_Entrega_PENDENTE.pdf` é somente um modelo. **Não entregue esse arquivo com campos pendentes.**

## Estrutura

```text
clinica-aurora/
├── index.html
├── README.md
├── .nojekyll
├── .gitignore
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── docs.css
│   ├── js/
│   │   ├── main.js
│   │   └── entrega.js
│   └── img/
│       └── favicon.svg
└── docs/
    ├── planejamento.md
    ├── EAP_e_Planejamento.pdf
    ├── testes.md
    ├── resultados-testes.json
    ├── roteiro-video.md
    ├── entrega.html
    ├── Modelo_Entrega_PENDENTE.pdf
    ├── creditos.html
    └── fotografias.json
```

## Fotografias e adaptações

A lista das fotos e das fontes está em [docs/creditos.html](docs/creditos.html) e [docs/fotografias.json](docs/fotografias.json). Veja a [licença do Pexels](https://www.pexels.com/license/). Os nomes dos perfis não identificam as pessoas retratadas, e não se presume endosso ou vínculo profissional.

Para remover a dependência externa, salve cada foto pelo link de origem, coloque-a em `assets/img/`, substitua o respectivo `src` no HTML por um caminho relativo e teste novamente. Preserve os créditos. O pacote atual **não** executou essa conversão para fotos locais.

Antes de enviar, personalize a identificação, revise o código e consiga explicar as decisões. Registre as fontes e os recursos de apoio utilizados conforme as orientações da disciplina. Não acrescente dados pessoais reais, registros profissionais, depoimentos ou contatos fictícios que possam ser confundidos com atendimento verdadeiro.
