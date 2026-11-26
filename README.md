# APS
análise e projeto de sistemasAPS

https://juscielsl.github.io/APS/

## 📋 Resumo do Projeto

O **Sistema de Gestão de Clínica Odontológica (SIGCO)** é uma aplicação web desenvolvida na disciplina de **Análise e Projeto de Sistemas (APS)** do Centro Universitário do Distrito Federal (UDF). O objetivo do sistema é substituir fichas e prontuários físicos por um fluxo clínico digitalizado e integrado entre recepção e dentistas.

### Escopo Entregue no MVP
* **Cadastro de Pacientes:** Registro completo com encaminhamento automático para a fila de triagem.
* **Triagem & Lista de Espera:** Avaliação inicial realizada pelo dentista triador com classificação de prioridade clínica.
* **Agendamento de Consultas:** Marcação por especialista com controle de presença, remarcações e faltas.
* **Prontuário Eletrônico:** Registro cronológico das evoluções clínicas de cada atendimento.

---

## 🏗️ Arquitetura de Repositórios e Hospedagem

Para manter a separação entre **documentação acadêmica/portal estático** e **aplicação em produção**, o projeto foi estruturado em dois ambientes integrados:

1. **Portal & Documentação (`JuscielSL/APS` + GitHub Pages):**  
   Concentra o levantamento de requisitos, matriz de priorização MoSCoW, diagramas UML, artefatos da pasta `/MVP` (PITCH e vídeo) e a página de apresentação publicada em [juscielsl.github.io/APS](https://juscielsl.github.io/APS/).
2. **Código-Fonte & Deploy Contínuo (`davidbdev21/SIGCO---UDF-` + Vercel):**  
   O código-fonte da aplicação encontra-se versionado no repositório de desenvolvimento da equipe ([acessar repositório do código](https://github.com/davidbdev21/SIGCO---UDF-)) para integração direta com a **Vercel**, garantindo build automatizado, ambiente de produção estável e suporte nativo à estrutura do projeto.

### 🔗 Links Rápidos e Acesso de Teste
* **Aplicação Online (Vercel):** [COLE_AQUI_O_LINK_DA_VERCEL]
* **Credenciais de Demonstração:**
  * **Recepção:** `recepcao@clinica.com` | Senha: `123456` *(troque pelos dados reais)*
  * **Dentista:** `dentista@clinica.com` | Senha: `123456` *(troque pelos dados reais)*
* **Entregáveis do MVP (PITCH e Vídeo):** [Acessar pasta `/MVP`](./MVP)

