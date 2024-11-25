// Função para validar os inputs antes de criar a campanha
function validarInputs() {
    const tipoSanguineo = document.getElementById("tipo-sangue").value;
    const regiaoColeta = document.getElementById("regiao").value;
    const dataInicio = document.getElementById("data-inicio").value;
    const dataFim = document.getElementById("data-final").value;
    const horarioPrimeiraColeta = document.getElementById("horario-inicio").value;
    const horarioUltimaColeta = document.getElementById("horario-final").value;
    const tempoColeta = document.getElementById("tempo-coleta").value;
    const quantidadeAtendimentos = document.getElementById("atendentes-simultaneos").value;

    const incentivoCheckbox = document.getElementById("incentivoCheckbox").checked;
    const descricaoIncentivo = document.getElementById("descricaoIncentivo").value;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!tipoSanguineo || !regiaoColeta || !dataInicio || !dataFim ||
        !horarioPrimeiraColeta || !horarioUltimaColeta || !tempoColeta || !quantidadeAtendimentos) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // Valida se a data de início é anterior à data de fim
    if (new Date(dataInicio) > new Date(dataFim)) {
        alert("A data de início deve ser anterior à data de fim.");
        return false;
    }

    // Valida se a quantidade de atendimentos é um número positivo
    if (quantidadeAtendimentos <= 0) {
        alert("A quantidade de atendimentos deve ser um número positivo.");
        return false;
    }

    // Verifica se o campo de incentivo está marcado e se a descrição está preenchida
    if (incentivoCheckbox && !descricaoIncentivo) {
        alert("Por favor, forneça uma descrição do incentivo.");
        return false;
    }

    // Verifica se a descrição do incentivo está preenchida sem o checkbox marcado
    if (!incentivoCheckbox && descricaoIncentivo) {
        alert("Para fornecer uma descrição do incentivo, o checkbox deve estar marcado.");
        return false;
    }

    return true; // Todos os campos estão válidos
}

// Função para criar campanha
function criarCampanha() {
    if (validarInputs()) {
        // Se todos os campos estão válidos, exibe uma mensagem de sucesso
        alert("Campanha criada com sucesso!");

        // lógica para enviar os dados para um servidor
    }
}

// Adiciona o evento de clique ao botão "Continuar"
document.querySelector(".botao-continuar").addEventListener("click", function (event) {
    event.preventDefault(); // Previne o envio do formulário
    criarCampanha();
});