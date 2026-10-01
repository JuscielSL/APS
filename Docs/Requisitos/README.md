Ficha de Elicitação de Requisitos
Engenharia de Software | Análise e Projeto de Sistemas | UDF Centro Universitário
Grupo/integrantes: __________________________________________ Turma: ______________ Data: ____/____/______ Versão: 1.0
Preencha uma ficha por requisito. Registre a necessidade na linguagem do stakeholder e valide termos ambíguos.
1. Identificação do projeto
Campo Preenchimento
Nome do projeto
Objetivo do projeto Problema a resolver e resultado esperado:
Contexto e escopo Processo ou serviço contemplado:
2. Stakeholder e fonte
Campo Preenchimento
Stakeholder (nome ou papel)
Relação com o projeto Usuário, cliente, gestor, especialista ou outro:
Contato ou setor
Técnica e data Entrevista, observação, questionário, oficina ou documento:
Responsável pelo registro
3. Requisito elicitado
Campo Preenchimento
ID do requisito REQ-001
Necessidade relatada
Descrição consolidada O sistema deve...
Justificativa ou benefício
Tipo Funcional / qualidade / restrição
Dependências ou dúvidas
Jusciel Da Silva Lopes; David Barauna Brito; Kevin Felipe; Felipe Nascimento; André Francisco Pereira
Abreu; Gecinaldo Junio Vieira Coelho D2 10/09/2026
Sistema de Gestão de Clínica Odontológica
Desenvolver um sistema para facilitar o gerenciamento de pacientes, dentistas e agendamentos, contribuindo para a organização dos processos,
redução de erros e melhoria do atendimento.
Cadastro de pacientes, Lista de Espera por especialidade e organização do fluxo de triagem e encaminhamento de pacientes.
Dentista da Triagem
Profissional responsável pela avaliação inicial e encaminhamento do paciente.
Clínica odontológica universitária / Triagem
Levantamento de requisitos do projeto — 10/09/2026
Grupo de desenvolvimento
REQ-001 (RF01)
Necessidade de organizar o cadastro de pacientes e manter uma Lista de Espera centralizada por especialidade.
O sistema deve permitir o cadastro de pacientes e a gestão de uma Lista de Espera por especialidade.
Centralizar a entrada de pacientes e facilitar a triagem e o encaminhamento, reduzindo a desorganização no primeiro contato.
Funcional
Depende da definição das especialidades e dos dados mínimos do cadastro. Relacionado à necessidade N03 e ao fluxo de triagem.
Ficha de Elicitação de Requisitos • Análise e Projeto de Sistemas 2
4. Regras de negócio
ID Regra relacionada Fonte / validação
RN-001
RN-002
Registre políticas, condições e limites do domínio. Se não houver regra identificada, indique isso.
5. Prioridade
[ ] Must have (essencial) [ ] Should have (importante) [ ] Could have (desejável) [ ] Won’t have nesta versão
Justificativa: __________________________________________________________________________________
6. Critérios de aceitação
ID Dado/Quando Então (resultado esperado) Verificação
CA-01
CA-02
CA-03
Os critérios devem ser verificáveis e indicar o resultado esperado.
7. Validação e rastreabilidade
Campo Preenchimento
Situação [ ] Pendente [ ] Validado [ ] Necessita revisão
Validado por / data
Observações / decisões
Links relacionados Issue, protótipo, caso de uso ou fonte:
Exemplo breve (fictício)
Projeto: agendamento de atendimento acadêmico. Stakeholder: estudante. REQ-001: O sistema deve permitir ao
estudante autenticado reservar um horário disponível. RN-001: um horário não recebe duas reservas ativas. Prioridade:
Must have. CA-01: dado um horário livre, quando a reserva for confirmada, então o sistema a registra e retira o horário da
disponibilidade.
Como organizar no GitHub
1. Crie a pasta docs/requisitos/ no repositório.
2. Salve a ficha como docs/requisitos/ficha-elicitacao-REQ-001.md; use um arquivo por requisito. Adicione o PDF na
mesma pasta se necessário.
3. Use Add file > Upload files ou Create new file e registre um commit descritivo.
4. No README.md da raiz, inclua o trecho abaixo e confira os links após publicar:
## Documentação de requisitos- [Ficha de elicitação REQ-001](docs/requisitos/ficha-elicitacao-REQ-001.md)- [Versão PDF](docs/requisitos/ficha-elicitacao-REQ-001.pdf)
5. Confira se o ID do nome do arquivo coincide com o ID da ficha. Registre revisões em novos comm
