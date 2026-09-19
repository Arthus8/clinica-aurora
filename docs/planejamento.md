# EAP e planejamento de implementação
## Clínica Aurora — Projeto 01: landing page estática

**Natureza:** proposta de planejamento para trabalho acadêmico individual. Sem datas absolutas: as semanas são relativas ao calendário da disciplina. **Responsável por todos os pacotes:** aluno(a), a identificar. **Estimativa proposta:** 36 horas em nove semanas; ajustar à disponibilidade e às orientações do professor.

## 1. Objetivo e limites

Apresentar uma clínica fictícia de forma clara, acolhedora e adequada a computadores e celulares. A solução deve permitir conhecer os serviços e a equipe e preencher um formulário demonstrativo.

Inclui: uma landing page, fotografias ilustrativas, conteúdo fictício, navegação responsiva, formulário sem envio, instruções, testes, repositório, vídeo e PDF com links. Não inclui: agendamentos, CPF, consulta de disponibilidade, APIs, autenticação, pagamento, banco de dados ou Docker.

Arquitetura: navegador → `index.html` → CSS/JavaScript locais; fotografias → Pexels por HTTPS. Não há backend. O formulário não transmite nem armazena dados; a validação e a mensagem de demonstração ocorrem no navegador.

## 2. EAP orientada a entregáveis

**1.0 Gestão e planejamento**
- **1.1 Escopo e matriz de requisitos:** requisitos do Projeto 01 e critérios de aceite documentados.
- **1.2 EAP e cronograma:** decomposição do trabalho, dependências, riscos e marcos definidos.

**2.0 Conteúdo e identidade visual**
- **2.1 Conteúdo institucional:** nome fictício, descrições de quatro serviços e três perfis fictícios com cargo.
- **2.2 Acervo visual e créditos:** seleção de fotografias, textos alternativos, fontes e aviso de ficção.

**3.0 Landing page implementada**
- **3.1 Estrutura HTML:** título de aba, seções, navegação e hierarquia de cabeçalhos.
- **3.2 Apresentação responsiva:** estilos, cores, tipografia, cards e adaptação a telas pequenas.
- **3.3 Formulário estático:** nome, e-mail, cidade e estado, com validação local e bloqueio de envio.
- **3.4 Interações de interface:** menu móvel, perguntas expansíveis e aviso para fotos indisponíveis.

**4.0 Qualidade e homologação**
- **4.1 Evidências funcionais:** roteiro e resultados de testes de navegação, campos e formulário.
- **4.2 Evidências visuais e de acesso:** verificação de telas, teclado, imagens, acesso aos arquivos publicados e redução de movimento.
- **4.3 Versão corrigida:** tratamento dos defeitos, repetição dos testes e registro das pendências remanescentes.

**5.0 Entrega e publicação**
- **5.1 Documentação de execução:** README, organização de pastas e instruções de apresentação.
- **5.2 Repositório publicado:** código-fonte e documentação acessíveis no GitHub; GitHub Pages opcional.
- **5.3 Vídeo publicado:** apresentação individual de até cinco minutos, acessível ao professor.
- **5.4 PDF final:** identificação e links reais do repositório e do vídeo, conferidos antes do envio.

### Dependências principais

`1.1 → 1.2 → 2.1/2.2 → 3.1 → 3.2/3.3/3.4 → 4.1/4.2 → 4.3 → 5.2 → 5.3 → 5.4`.

A documentação 5.1 acompanha o desenvolvimento. As evidências visuais locais podem começar durante 3.2; o teste de acesso público de 4.2 é repetido depois de 5.2 e 5.3.

## 3. Dicionário resumido da EAP

| Pacote | Produto verificável | Critério de aceite |
|---|---|---|
| 1.1–1.2 | Plano e EAP | Seis requisitos obrigatórios mapeados e três marcos preservados |
| 2.1 | Conteúdo fictício | Quatro serviços descritos e três membros com nome e cargo |
| 2.2 | Seleção de imagens e créditos | Pelo menos duas imagens de serviços e uma foto por membro; fontes registradas |
| 3.1 | `index.html` | Título, idioma, `h1`, `h2`, `h3` e âncoras válidas |
| 3.2 | `style.css` | Sem rolagem horizontal nas larguras de teste; conteúdo legível |
| 3.3 | Formulário | Quatro campos obrigatórios, e-mail validado e nenhum envio/persistência |
| 3.4 | Interações | Menu abre/fecha; Escape fecha; FAQ funciona; aviso aparece se foto falhar |
| 4.1–4.3 | Relatório de testes | Casos executados documentados; defeitos e verificações pendentes explicitados |
| 5.1 | README | Uma pessoa consegue executar seguindo as instruções |
| 5.2 | Repositório e site opcional | Código acessível; na hospedagem opcional, página abre e carrega recursos |
| 5.3 | Vídeo | Até cinco minutos, demonstração clara e acesso sem solicitação de permissão |
| 5.4 | PDF | Dois links reais e identificação, sem placeholders |

## 4. Cronograma proposto

| Semana | Foco | Resultado esperado | Horas estimadas |
|---|---|---|---:|
| 1 | Requisitos e escopo | Seleção do Projeto 01 e matriz de requisitos | 3 |
| 2 | Conteúdo e desenho inicial | Nome, serviços, equipe e organização da página | 4 |
| 3 | Fechamento do plano | EAP e cronograma — **Marco 1** | 3 |
| 4 | HTML e estilos iniciais | Primeira versão navegável, com conteúdo e imagens | 6 |
| 5 | Responsividade e formulário | Layout adaptável e formulário demonstrativo | 5 |
| 6 | Integração e teste inicial | Versão parcial pronta para testes — **Marco 2** | 4 |
| 7 | Testes e correções | Evidências, revisão visual e ajustes | 4 |
| 8 | Documentação e publicação | README e GitHub; implantação online opcional | 4 |
| 9 | Apresentação e envio | Vídeo acessível e PDF com links — **Marco 3** | 3 |
| **Total** | | | **36** |

## 5. Aceite dos marcos

**Marco 1 — Semana 3:** escopo e exclusões claros; EAP orientada a entregáveis; responsáveis e dependências definidos; cronograma e riscos registrados.

**Marco 2 — Semana 6:** página navegável com conteúdo principal, equipe e formulário; arquivos organizados; roteiro de testes preparado. Ainda é aceitável haver ajustes visuais e defeitos não críticos documentados.

**Marco 3 — Semana 9:** requisitos obrigatórios verificados; correções aplicadas; instruções completas; código publicado; vídeo de até cinco minutos acessível; PDF com links reais. A aplicação online é opcional e não substitui a publicação do código.

## 6. Riscos e respostas

| Risco | Impacto | Resposta |
|---|---|---|
| Fotografias externas indisponíveis | Requisito de imagem/foto pode não ser atendido na avaliação | Verificar todas as fotos com internet e no site publicado; salvar cópias autorizadas localmente, atualizar caminhos e retestar se necessário |
| ZIP enviado como único conteúdo do repositório | Código não fica apresentado adequadamente e Pages não encontra a página na raiz | Publicar arquivos descompactados e conferir `index.html` na origem configurada |
| Formulário aparentar atendimento real | Usuário pode interpretar simulação como solicitação efetiva | Avisos de ficção, botão “Simular envio”, feedback explícito e ausência de processamento em servidor |
| Vídeo ou repositório restrito | Professor não consegue avaliar | Testar URLs em janela anônima e ajustar permissões antes do PDF |
| Aumento de escopo para agendamento/API | Atraso e maior risco de defeitos | Manter Projeto 01; registrar evoluções como trabalho futuro |

## 7. Checklist antes da entrega

- Identificação acadêmica preenchida e conteúdo revisado pelo aluno.
- Todas as fotografias visíveis, incluindo os três membros da equipe.
- Navegação, formulário, console e layout conferidos no ambiente final.
- Código e documentação publicados no GitHub.
- Vídeo gravado, publicado, com até cinco minutos e acesso liberado.
- PDF gerado com links reais; links do PDF abertos para conferência.
- Aplicação online conferida, caso apresentada para pontuação extra.

O planejamento não comprova a realização dos marcos. O status efetivamente verificado nesta versão consta em `testes.md`; a publicação e a gravação devem ser concluídas pelo aluno.
