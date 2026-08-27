# Ficha de Requisitos — Sistema de Restaurante

## Análise e Projeto de Sistemas

**Unidade:** II — Introdução à Análise e Projeto de Sistemas  
**Atividade:** Transformação do levantamento do sistema em requisitos funcionais e não funcionais  
**Sistema:** Sistema de Restaurante  
**Versão:** 1.0

---

# 1. Identificação do Sistema

| Campo | Preenchimento |
|---|---|
| **Nome do sistema** | Sistema de Restaurante |
| **Objetivo** | Gerenciar clientes, produtos, pedidos, pagamentos e acompanhamento dos pedidos realizados no restaurante. |
| **Público-alvo** | Clientes, garçons, funcionários do restaurante e administradores. |
| **Responsável pelo levantamento** | Grupo de estudantes |
| **Versão** | 1.0 |

---

# 2. Requisitos Funcionais

> Requisitos funcionais descrevem as funcionalidades ou serviços que o sistema deve oferecer.

## RF01 — Cadastrar cliente

| Campo | Descrição |
|---|---|
| **Identificação** | RF01 |
| **Descrição** | O sistema deve permitir que funcionários cadastrem clientes para facilitar o registro e acompanhamento dos pedidos. |
| **Prioridade** | Alta |
| **Critérios de aceitação** | 1. Permitir informar nome, telefone e e-mail do cliente. 2. Não permitir cadastro sem nome. 3. Informar ao funcionário quando o cadastro for concluído. |
| **Exemplo** | O funcionário informa os dados do cliente e seleciona "Cadastrar". O sistema valida os dados e registra o novo cliente. |

---

## RF02 — Cadastrar produto

| Campo | Descrição |
|---|---|
| **Identificação** | RF02 |
| **Descrição** | O sistema deve permitir que o administrador cadastre produtos disponíveis no restaurante. |
| **Prioridade** | Alta |
| **Critérios de aceitação** | 1. Permitir informar nome, descrição, categoria e preço do produto. 2. Não permitir cadastro sem nome e preço. 3. Exibir confirmação após o cadastro. |
| **Exemplo** | O administrador cadastra um prato chamado "Hambúrguer Artesanal", informa sua descrição, categoria e preço. |

---

## RF03 — Registrar pedido

| Campo | Descrição |
|---|---|
| **Identificação** | RF03 |
| **Descrição** | O sistema deve permitir que o garçom registre pedidos realizados pelos clientes. |
| **Prioridade** | Alta |
| **Critérios de aceitação** | 1. Permitir selecionar a mesa ou cliente. 2. Permitir adicionar um ou mais produtos ao pedido. 3. Calcular automaticamente o valor total. 4. Registrar a data e o horário do pedido. |
| **Exemplo** | O cliente solicita um hambúrguer e uma bebida. O garçom seleciona os produtos no sistema e finaliza o pedido. O sistema calcula o valor total. |

---

## RF04 — Atualizar status do pedido

| Campo | Descrição |
|---|---|
| **Identificação** | RF04 |
| **Descrição** | O sistema deve permitir atualizar o status dos pedidos durante seu processamento. |
| **Prioridade** | Alta |
| **Critérios de aceitação** | 1. Permitir alterar o status do pedido. 2. Disponibilizar os status "Recebido", "Em preparo", "Pronto" e "Entregue". 3. Registrar a alteração do status. |
| **Exemplo** | Após receber um pedido, o funcionário altera seu status para "Em preparo". Quando a cozinha terminar o pedido, o status é alterado para "Pronto". |

---

## RF05 — Registrar pagamento

| Campo | Descrição |
|---|---|
| **Identificação** | RF05 |
| **Descrição** | O sistema deve permitir registrar o pagamento de um pedido realizado pelo cliente. |
| **Prioridade** | Alta |
| **Critérios de aceitação** | 1. Apresentar o valor total do pedido. 2. Permitir selecionar a forma de pagamento. 3. Registrar o pagamento realizado. 4. Identificar o pedido como pago após a confirmação. |
| **Exemplo** | Após consumir os produtos, o cliente solicita a conta. O funcionário informa que o pagamento foi realizado por cartão e o sistema registra o pedido como pago. |

---

# 3. Requisitos Não Funcionais

> Requisitos não funcionais descrevem características de qualidade, restrições e condições que o sistema deve atender.

## RNF01 — Segurança

| Campo | Descrição |
|---|---|
| **Identificação** | RNF01 |
| **Descrição** | O sistema deve controlar o acesso às funcionalidades de acordo com o perfil de cada funcionário. |
| **Prioridade** | Alta |
| **Critérios de aceitação** | 1. Funcionários devem realizar login para acessar funções restritas. 2. Apenas administradores podem cadastrar ou excluir produtos. 3. Senhas devem ser armazenadas de forma segura. |
| **Exemplo** | Um garçom pode registrar pedidos, mas não pode excluir produtos do cardápio. |

---

## RNF02 — Usabilidade

| Campo | Descrição |
|---|---|
| **Identificação** | RNF02 |
| **Descrição** | O sistema deve possuir uma interface simples e intuitiva, permitindo que os funcionários realizem suas tarefas com facilidade. |
| **Prioridade** | Alta |
| **Critérios de aceitação** | 1. Os botões e menus devem possuir nomes claros. 2. Os campos obrigatórios devem ser identificados. 3. O sistema deve apresentar mensagens claras em caso de erro. |
| **Exemplo** | Caso o funcionário tente registrar um pedido sem selecionar nenhum produto, o sistema deve informar que pelo menos um produto precisa ser selecionado. |

---

## RNF03 — Desempenho

| Campo | Descrição |
|---|---|
| **Identificação** | RNF03 |
| **Descrição** | O sistema deve processar operações comuns rapidamente para não prejudicar o atendimento aos clientes. |
| **Prioridade** | Alta |
| **Critérios de aceitação** | Consultas de produtos e registros de pedidos devem apresentar resposta em até 3 segundos em condições normais de utilização. |
| **Exemplo** | Ao adicionar um produto ao pedido, o sistema deve atualizar o valor total em até 3 segundos. |

---

# 4. Resumo dos Requisitos

| Código | Requisito | Tipo | Prioridade |
|---|---|---|---|
| **RF01** | Cadastrar cliente | Funcional | Alta |
| **RF02** | Cadastrar produto | Funcional | Alta |
| **RF03** | Registrar pedido | Funcional | Alta |
| **RF04** | Atualizar status do pedido | Funcional | Alta |
| **RF05** | Registrar pagamento | Funcional | Alta |
| **RNF01** | Segurança | Não funcional | Alta |
| **RNF02** | Usabilidade | Não funcional | Alta |
| **RNF03** | Desempenho | Não funcional | Alta |

---

# 5. Conclusão

O Sistema de Restaurante tem como objetivo facilitar o gerenciamento das principais atividades realizadas no estabelecimento, como cadastro de clientes e produtos, registro de pedidos, acompanhamento do preparo e registro de pagamentos.

Os requisitos funcionais definem as funcionalidades que o sistema deverá oferecer, enquanto os requisitos não funcionais estabelecem características de qualidade, como segurança, usabilidade e desempenho.

Os requisitos levantados servirão como base para a próxima etapa do projeto, que será a identificação e especificação dos **casos de uso** e a elaboração dos **diagramas UML**.

---

# 6. Integrantes do Grupo

- **Nome:** Jusciel Da Silva Lopes______________________________________
- **Nome:** Felipe Nascimento Rocha______________________________________
- **Nome:** David Barauna Brito______________________________________
- **Nome:** Kevin Felipe Barreto Gloria______________________________________
- **Nome:** Gecinaldo Junio Vieira Coelho______________________________________
- **Nome:** André Francisco Pereia Abreu______________________________________
---

# 7. Data

**Data da atividade:** 20/08/2026
