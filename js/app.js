const STORAGE_KEY = "odontogestao_mvp_v1";

const DADOS_INICIAIS = {
  pacientes: [
    { id: 1, nome: "Ana Paula Ferreira", cpf: "123.456.789-00", telefone: "(61) 99123-4567", queixa: "Dor aguda no dente siso inferior" },
    { id: 2, nome: "Carlos Eduardo Mendes", cpf: "234.567.890-11", telefone: "(61) 98234-5678", queixa: "Avaliação para limpeza e profilaxia" },
    { id: 3, nome: "Fernanda Costa Lima", cpf: "345.678.901-22", telefone: "(61) 99345-6789", queixa: "Sensibilidade ao ingerir líquidos gelados" }
  ],
  triagens: [
    { id: 101, pacienteId: 1, prioridade: "Alta", observacao: "Paciente com edema leve; encaminhar para endodontia/cirurgia.", status: "Aguardando Agendamento" },
    { id: 102, pacienteId: 3, prioridade: "Média", observacao: "Suspeita de retração gengival ou cárie inicial.", status: "Triagem Pendente" }
  ],
  consultas: [
    { id: 201, pacienteId: 2, dentista: "Dra. Camila Martins (Clínica Geral)", data: "2026-12-03", hora: "14:00", status: "Agendado" }
  ],
  prontuarios: [
    {
      id: 301,
      pacienteId: 2,
      data: "2026-11-20 10:30",
      dentista: "Dra. Camila Martins",
      procedimento: "Anamnese Inicial",
      descricao: "Paciente sem alergias medicamentosas relatadas. Encaminhado para profilaxia completa."
    }
  ]
};

let db = carregarDados();

function carregarDados() {
  const salvo = localStorage.getItem(STORAGE_KEY);
  if (!salvo) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DADOS_INICIAIS));
    return JSON.parse(JSON.stringify(DADOS_INICIAIS));
  }
  return JSON.parse(salvo);
}

function salvarDados() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  renderizarTudo();
}

function resetarDadosDemo() {
  localStorage.removeItem(STORAGE_KEY);
  db = carregarDados();
  renderizarTudo();
  notificar("Dados de demonstração restaurados!");
}

function notificar(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function abrirAba(nomeAba, btn) {
  document.querySelectorAll(".tab-content").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(`aba-${nomeAba}`).classList.add("active");
  btn.classList.add("active");
}

function mudarPerfil() {
  const perfil = document.getElementById("perfilSelect").value;
  notificar(`Perfil alterado para: ${perfil}`);
}

function nomePaciente(id) {
  const p = db.pacientes.find(item => item.id === Number(id));
  return p ? p.nome : "Paciente removido";
}

function queixaPaciente(id) {
  const p = db.pacientes.find(item => item.id === Number(id));
  return p ? p.queixa : "-";
}

// 1. PACIENTES
function cadastrarPaciente(e) {
  e.preventDefault();
  const novoId = Date.now();
  const paciente = {
    id: novoId,
    nome: document.getElementById("pacNome").value.trim(),
    cpf: document.getElementById("pacCpf").value.trim(),
    telefone: document.getElementById("pacTelefone").value.trim(),
    queixa: document.getElementById("pacQueixa").value.trim()
  };

  db.pacientes.push(paciente);
  db.triagens.push({
    id: novoId + 1,
    pacienteId: novoId,
    prioridade: "Normal",
    observacao: "Aguardando avaliação do Dentista da Triagem.",
    status: "Triagem Pendente"
  });

  e.target.reset();
  salvarDados();
  notificar("Paciente cadastrado e enviado para a fila de triagem!");
}

function enviarParaTriagem(pacienteId) {
  const jaNaFila = db.triagens.some(t => t.pacienteId === pacienteId && t.status !== "Concluído");
  if (jaNaFila) {
    notificar("Este paciente já está ativo na fila de triagem.");
    return;
  }
  db.triagens.push({
    id: Date.now(),
    pacienteId,
    prioridade: "Normal",
    observacao: "Reencaminhado para triagem.",
    status: "Triagem Pendente"
  });
  salvarDados();
  notificar("Paciente inserido na fila de triagem!");
}

// 2. TRIAGEM
function atualizarTriagem(triagemId, prioridade) {
  const item = db.triagens.find(t => t.id === triagemId);
  if (!item) return;
  const obs = prompt("Observação clínica da triagem:", item.observacao);
  if (obs !== null) {
    item.prioridade = prioridade;
    item.observacao = obs.trim() || item.observacao;
    item.status = "Aguardando Agendamento";
    salvarDados();
    notificar("Triagem atualizada!");
  }
}

function irParaAgendamento(pacienteId, triagemId) {
  const item = db.triagens.find(t => t.id === triagemId);
  if (item) item.status = "Concluído";
  salvarDados();
  document.getElementById("agPaciente").value = pacienteId;
  const btnAgenda = document.querySelectorAll(".tab-btn")[2];
  abrirAba("agenda", btnAgenda);
  notificar("Selecione o dentista e horário para concluir o agendamento.");
}

// 3. AGENDAMENTO
function agendarConsulta(e) {
  e.preventDefault();
  const consulta = {
    id: Date.now(),
    pacienteId: Number(document.getElementById("agPaciente").value),
    dentista: document.getElementById("agDentista").value,
    data: document.getElementById("agData").value,
    hora: document.getElementById("agHora").value,
    status: "Agendado"
  };
  db.consultas.push(consulta);
  salvarDados();
  notificar("Consulta agendada com sucesso!");
}

function alterarStatusConsulta(consultaId, novoStatus) {
  const c = db.consultas.find(item => item.id === consultaId);
  if (!c) return;
  c.status = novoStatus;
  salvarDados();
  notificar(`Status da consulta alterado para: ${novoStatus}`);
}

// 4. PRONTUÁRIO
function registrarProntuario(e) {
  e.preventDefault();
  const pacienteId = Number(document.getElementById("prontPaciente").value);
  const agora = new Date().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });

  db.prontuarios.unshift({
    id: Date.now(),
    pacienteId,
    data: agora,
    dentista: document.getElementById("perfilSelect").value,
    procedimento: document.getElementById("prontProcedimento").value.trim(),
    descricao: document.getElementById("prontDescricao").value.trim()
  });

  document.getElementById("prontProcedimento").value = "";
  document.getElementById("prontDescricao").value = "";
  salvarDados();
  notificar("Evolução salva no prontuário eletrônico!");
}

// RENDERIZAÇÃO
function renderizarTudo() {
  // Stats
  const aguardando = db.triagens.filter(t => t.status !== "Concluído").length;
  const agendadas = db.consultas.filter(c => c.status === "Agendado").length;
  const faltas = db.consultas.filter(c => c.status === "Faltou").length;

  document.getElementById("statsGrid").innerHTML = `
    <div class="stat-card"><span>Pacientes Totais</span><strong>${db.pacientes.length}</strong></div>
    <div class="stat-card"><span>Na Lista de Espera</span><strong>${aguardando}</strong></div>
    <div class="stat-card"><span>Consultas Agendadas</span><strong>${agendadas}</strong></div>
    <div class="stat-card"><span>Faltas Registradas</span><strong>${faltas}</strong></div>
  `;

  // Tabela Pacientes
  document.getElementById("listaPacientes").innerHTML = db.pacientes.map(p => `
    <tr>
      <td><strong>${p.nome}</strong><br><small style="color:#64748b">${p.cpf}</small></td>
      <td>${p.telefone}</td>
      <td>${p.queixa}</td>
      <td><button class="btn-sm" onclick="enviarParaTriagem(${p.id})">+ Fila Triagem</button></td>
    </tr>
  `).join("");

  // Tabela Triagem
  document.getElementById("listaTriagem").innerHTML = db.triagens.map(t => {
    const classePill = t.prioridade === "Alta" ? "pill-alta" : t.prioridade === "Média" ? "pill-media" : "pill-normal";
    return `
      <tr>
        <td><strong>${nomePaciente(t.pacienteId)}</strong></td>
        <td>${queixaPaciente(t.pacienteId)}</td>
        <td><span class="pill ${classePill}">${t.prioridade}</span></td>
        <td>${t.observacao}</td>
        <td>${t.status}</td>
        <td>
          <button class="btn-sm" onclick="atualizarTriagem(${t.id}, 'Alta')">Prioridade Alta</button>
          <button class="btn-sm" onclick="atualizarTriagem(${t.id}, 'Média')">Média</button>
          <button class="btn-sm" onclick="irParaAgendamento(${t.pacienteId}, ${t.id})">Agendar →</button>
        </td>
      </tr>
    `;
  }).join("");

  // Selects de Pacientes
  const optionsPacientes = db.pacientes.map(p => `<option value="${p.id}">${p.nome}</option>`).join("");
  const selectAg = document.getElementById("agPaciente");
  const selectPront = document.getElementById("prontPaciente");
  const prevPront = selectPront.value;

  selectAg.innerHTML = optionsPacientes;
  selectPront.innerHTML = optionsPacientes;
  if (prevPront) selectPront.value = prevPront;

  // Tabela Agenda
  document.getElementById("listaAgenda").innerHTML = db.consultas.map(c => `
    <tr>
      <td><strong>${c.data.split("-").reverse().join("/")}</strong> às ${c.hora}</td>
      <td>${nomePaciente(c.pacienteId)}</td>
      <td>${c.dentista}</td>
      <td><span class="pill ${c.status === "Atendido" ? "pill-ok" : c.status === "Faltou" ? "pill-alta" : "pill-normal"}">${c.status}</span></td>
      <td>
        <button class="btn-sm" onclick="alterarStatusConsulta(${c.id}, 'Atendido')">Atendido</button>
        <button class="btn-sm" onclick="alterarStatusConsulta(${c.id}, 'Faltou')">Faltou</button>
      </td>
    </tr>
  `).join("");

  renderizarHistoricoProntuario();
}

function renderizarHistoricoProntuario() {
  const pacienteId = Number(document.getElementById("prontPaciente").value);
  const registros = db.prontuarios.filter(r => r.pacienteId === pacienteId);
  const container = document.getElementById("historicoProntuario");

  if (registros.length === 0) {
    container.innerHTML = `<p class="hint">Nenhum registro clínico encontrado para este paciente.</p>`;
    return;
  }

  container.innerHTML = registros.map(r => `
    <div class="timeline-item">
      <small>${r.data} — Registrado por: ${r.dentista}</small>
      <strong>${r.procedimento}</strong>
      <p style="margin-top:0.35rem; font-size:0.9rem;">${r.descricao}</p>
    </div>
  `).join("");
}

// Define data padrão de hoje no campo de agendamento e inicializa
document.getElementById("agData").valueAsDate = new Date();
renderizarTudo();
