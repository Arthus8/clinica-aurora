# Relatório de testes — Clínica Aurora

**Resultado:** 31 verificações aprovadas de 31 executadas. 0 reprovadas nesta rodada. Isso não significa ausência de todo possível defeito.

**Ambiente:** Chromium 144.0.7559.96 em Linux. Data de referência da entrega: 17/09/2026.

## Método e limites

A estrutura HTML foi inspecionada programaticamente. A interface foi carregada em memória no Chromium com Playwright. Somente nessa cópia de teste, CSS e JavaScript locais foram embutidos no documento e a meta CSP foi retirada; os arquivos entregues mantêm os recursos externos locais e sua política de segurança original.

O navegador do ambiente bloqueou a navegação por `file://` e HTTP local com `ERR_BLOCKED_BY_ADMINISTRATOR`. Assim, **a abertura original do pacote por duplo clique/servidor e o funcionamento sob a CSP não foram validados**. Não foi executado teste de HTTP dos recursos publicados.

As oito fotografias do Pexels foram bloqueadas intencionalmente nos testes, verificando os avisos de indisponibilidade. **Não foi confirmado o carregamento real das fotos no navegador nem no site publicado.** A existência das tags de imagem não substitui essa conferência.

Foram verificadas larguras de 320, 375, 390, 430, 600, 760, 768, 1024 e 1440 pixels. A simulação do formulário foi observada quanto a navegação e novas requisições; a ausência de chamadas a armazenamento foi inspecionada no código. Não se trata de auditoria de segurança ou de acessibilidade completa.

## Casos executados

| Nº | Verificação | Resultado |
|---|---|---|
| 01 | Título e idioma | APROVADO |
| 02 | Hierarquia de cabeçalhos | APROVADO |
| 03 | Quatro serviços com foto e descrição | APROVADO |
| 04 | Três perfis fictícios com foto e cargo | APROVADO |
| 05 | Oito fotografias distintas declaradas | APROVADO |
| 06 | Quatro campos obrigatórios e 27 UFs | APROVADO |
| 07 | Âncoras internas válidas | APROVADO |
| 08 | Rótulos e textos alternativos | APROVADO |
| 09 | Recursos locais HTML/CSS/JS existentes | APROVADO |
| 10 | Avisos para todas as oito fotos indisponíveis | APROVADO |
| 11 | JavaScript inicializado e botão de simulação habilitado | APROVADO |
| 12 | Sem rolagem horizontal em 320px | APROVADO |
| 13 | Sem rolagem horizontal em 375px | APROVADO |
| 14 | Sem rolagem horizontal em 390px | APROVADO |
| 15 | Sem rolagem horizontal em 430px | APROVADO |
| 16 | Sem rolagem horizontal em 600px | APROVADO |
| 17 | Sem rolagem horizontal em 760px | APROVADO |
| 18 | Sem rolagem horizontal em 768px | APROVADO |
| 19 | Sem rolagem horizontal em 1024px | APROVADO |
| 20 | Sem rolagem horizontal em 1440px | APROVADO |
| 21 | Menu móvel: abrir, Escape, foco, âncora e clique externo | APROVADO |
| 22 | FAQ operável pelo teclado | APROVADO |
| 23 | Preferência por redução de movimento | APROVADO |
| 24 | Validação e simulação sem transmissão; ausência de chamadas de persistência | APROVADO |
| 25 | Nenhum erro JavaScript não tratado | APROVADO |
| 26 | DOM carregado com CSS e JavaScript originais embutidos para teste | APROVADO |
| 27 | Sem JavaScript: conteúdo/menu disponíveis e envio desabilitado | APROVADO |
| 28 | HTML original declara política que bloqueia envio nativo | APROVADO |
| 29 | Editor do PDF inicia como modelo pendente | APROVADO |
| 30 | Editor: validação HTTPS, repositório, texto seguro e revalidação | APROVADO |
| 31 | Editor reiniciado sem os dados demonstrativos de teste | APROVADO |

## Revisão visual

Foram renderizadas as interfaces para computador e celular com o cenário de fotos indisponíveis. A inspeção identificou a junção das palavras “com” e “uma” no título do contato em tela pequena; foi acrescentado o espaço necessário e os testes foram repetidos. Os PDFs de planejamento e de modelo são revisados por renderização separadamente.

## Roteiro de conferência no ambiente final

| Ação do aluno | Resultado esperado |
|---|---|
| Extrair todo o ZIP e abrir `index.html` no navegador | Estilos carregados, menu utilizável e simulação habilitada |
| Manter internet e percorrer serviços e equipe | Quatro fotos de serviços e três fotos individuais visíveis; hero também carregado |
| Testar campos vazios, e-mail inválido e nome composto só por espaços | Navegador impede a simulação e informa o campo a revisar |
| Preencher Pessoa de Teste / teste@example.com / Cidade de Teste / UF | Aviso de demonstração, sem envio, cadastro ou agendamento |
| Reduzir a janela e usar Tab, Enter e Escape | Sem conteúdo cortado; controles e menu utilizáveis |
| Abrir o repositório, vídeo e site opcional em janela anônima | Acesso sem solicitação de permissão |
| Preencher `docs/entrega.html` e imprimir o documento atualizado | PDF com identificação correta e dois links reais clicáveis |
| Conferir a duração do vídeo | No máximo cinco minutos |

## Pendências — não concluídas por esta entrega

- Abertura do pacote original por file:// e HTTP, incluindo execução sob sua política CSP.
- Carregamento real das oito fotografias pela internet.
- Validação no navegador e equipamento do aluno; auditoria completa de acessibilidade não realizada.
- Publicação e teste do repositório e do site online.
- Gravação do vídeo e conferência de duração e acesso.
- Geração e conferência do PDF final com links reais.

As URLs de exemplo usadas internamente no teste do editor não foram salvas no PDF-modelo nem nos campos da aplicação. O PDF-modelo continua identificado como pendente.

Evidência detalhada em `resultados-testes.json`.
