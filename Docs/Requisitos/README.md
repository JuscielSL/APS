# 🦷 Sistema de Gestão de Clínica Odontológica

> **Ficha de Elicitação de Requisitos — REQ-001**

![UDF](https://img.shields.io/badge/UDF-Engenharia%20de%20Software-blue)
![Requisito](https://img.shields.io/badge/Requisito-REQ--001-green)
![Prioridade](https://img.shields.io/badge/MoSCoW-Must%20Have-red)

---

## 📋 Informações Gerais

| Campo           | Informação                                             |
| --------------- | ------------------------------------------------------ |
| **Projeto**     | Sistema de Gestão de Clínica Odontológica              |
| **Disciplina**  | Engenharia de Software — Análise e Projeto de Sistemas |
| **Instituição** | UDF Centro Universitário                               |
| **Turma**       | D2                                                     |
| **Data**        | 10/09/2026                                             |
| **Versão**      | 1.0                                                    |
| **Requisito**   | REQ-001 (RF01)                                         |

### 👥 Grupo

|  # | Integrante                    |
| -: | ----------------------------- |
|  1 | Jusciel Da Silva Lopes        |
|  2 | David Barauna Brito           |
|  3 | Kevin Felipe                  |
|  4 | Felipe Nascimento             |
|  5 | André Francisco Pereira Abreu |
|  6 | Gecinaldo Junio Vieira Coelho |

---

# 1. 🎯 Identificação do Projeto

### Nome do projeto

**Sistema de Gestão de Clínica Odontológica**

### Objetivo do projeto

Desenvolver um sistema para facilitar o gerenciamento de pacientes, dentistas e agendamentos, contribuindo para a organização dos processos, redução de erros e melhoria do atendimento.

### Contexto e escopo

O sistema contempla o **cadastro de pacientes, a Lista de Espera por especialidade e a organização do fluxo de triagem e encaminhamento de pacientes**.

---

# 2. 👤 Stakeholder e Fonte

| Campo                         | Informação                                                                   |
| ----------------------------- | ---------------------------------------------------------------------------- |
| **Stakeholder**               | Dentista da Triagem                                                          |
| **Relação com o projeto**     | Profissional responsável pela avaliação inicial e encaminhamento do paciente |
| **Contato ou setor**          | Clínica odontológica universitária / Triagem                                 |
| **Técnica e data**            | Levantamento de requisitos do projeto — 10/09/2026                           |
| **Responsável pelo registro** | Grupo de desenvolvimento                                                     |

---

# 3. ⚙️ Requisito Elicitado

## REQ-001 — Cadastro de Pacientes e Lista de Espera

### 📝 Necessidade relatada

> Necessidade de organizar o cadastro de pacientes e manter uma Lista de Espera centralizada por especialidade.

### 📌 Descrição consolidada

> **O sistema deve permitir o cadastro de pacientes e a gestão de uma Lista de Espera por especialidade.**

### 💡 Justificativa / Benefício

Centralizar a entrada de pacientes e facilitar a triagem e o encaminhamento, reduzindo a desorganização no primeiro contato.

### 🏷️ Tipo

**Requisito Funcional**

### 🔗 Dependências ou dúvidas

Depende da definição das especialidades e dos dados mínimos do cadastro.

Relacionado à **necessidade N03** e ao **fluxo de triagem**.

---

# 4. 📜 Regras de Negócio

| ID         | Regra relacionada                                                                                                 | Fonte / Validação                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| **RN-001** | Se o paciente acumular duas faltas não justificadas, deve ser automaticamente excluído do programa de tratamento. | RN01 — Controle de agenda e lista de espera. |
| **RN-002** | Um paciente só pode ser agendado para tratamento clínico após passar obrigatoriamente pela triagem inicial.       | RN02 — Processo de ingresso do paciente.     |

> As regras de negócio representam políticas, condições e limites que devem ser respeitados pelo sistema.

---

# 5. ⭐ Prioridade — MoSCoW

### 🔴 Must Have — Essencial

**REQ-001 → Must Have**

### Justificativa

> É o ponto de partida essencial para organizar a entrada de pacientes na clínica e viabilizar a triagem e o encaminhamento.

---

# 6. ✅ Critérios de Aceitação

Os critérios de aceitação foram definidos para permitir a verificação objetiva do funcionamento do requisito.

| ID        | Dado / Quando                                                                                    | Então — Resultado Esperado                                                                      | Verificação                                                             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **CA-01** | Dado um paciente ainda não cadastrado, quando seus dados forem registrados.                      | O sistema deve criar o cadastro do paciente e permitir sua inclusão na Lista de Espera.         | Testar cadastro com dados válidos e verificar a criação do registro.    |
| **CA-02** | Dada uma Lista de Espera, quando o usuário selecionar uma especialidade.                         | O sistema deve apresentar os pacientes vinculados à especialidade selecionada.                  | Testar filtro por especialidade e conferir os resultados.               |
| **CA-03** | Dado um paciente cadastrado na Lista de Espera, quando seu status for atualizado após a triagem. | O sistema deve manter o registro atualizado para permitir o encaminhamento no fluxo da clínica. | Cadastrar, atualizar o status e verificar a persistência da informação. |

---

# 7. 🔍 Validação e Rastreabilidade

### Situação

🟡 **Pendente — aguardando validação do grupo.**

### Validado por / Data

> Não informado — aguardando validação do grupo.

### Observações / Decisões

* **REQ-001** corresponde ao **RF01**.
* Necessidade relacionada: **N03 — Lista de Espera**.
* Prioridade MoSCoW: **Must Have**.

### 🔗 Rastreabilidade

```text
N03 → RF01 → REQ-001
```

**Fonte:** levantamento de requisitos do projeto.

---

# 📊 Rastreabilidade do Requisito

| Necessidade               | Requisito Funcional | Requisito Elicitado | Prioridade   |
| ------------------------- | ------------------- | ------------------- | ------------ |
| **N03 — Lista de Espera** | **RF01**            | **REQ-001**         | 🔴 Must Have |

---

# 🗂️ Relação com o Projeto

O **REQ-001** está diretamente relacionado ao problema identificado no projeto: a dificuldade de organizar e controlar as informações dos pacientes e o fluxo de atendimento da clínica odontológica.

A implementação desse requisito permite centralizar o cadastro dos pacientes e organizar a **Lista de Espera por especialidade**, facilitando o processo de triagem e encaminhamento.

---

## 📁 Organização no GitHub

A ficha deve ser armazenada na pasta:

```text
docs/
└── requisitos/
    ├── ficha-elicitacao-REQ-001.md
    └── ficha-elicitacao-REQ-001.pdf
```

### Documentação de requisitos

* 📄 [Ficha de elicitação REQ-001](docs/requisitos/ficha-elicitacao-REQ-001.md)
* 📕 [Versão PDF](docs/requisitos/ficha-elicitacao-REQ-001.pdf)

> **Importante:** o ID utilizado no nome do arquivo deve corresponder ao ID registrado dentro da ficha.

---

## 👨‍💻 Projeto

**Sistema de Gestão de Clínica Odontológica**

**Disciplina:** Engenharia de Software — Análise e Projeto de Sistemas
**Instituição:** UDF Centro Universitário
**Turma:** D2
**Data:** 10/09/2026
**Versão:** 1.0

---

### 📚 Referência

REINEHR, Sheila. **Requisitos de Software**. Material de apoio utilizado na disciplina Engenharia de Requisitos.


