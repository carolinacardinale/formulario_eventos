document.getElementById('emailForm').addEventListener('submit', function(event) {
    // Impedir o envio do formulário
    event.preventDefault();
    
    // Selecionar o campo de e-mail e o elemento de erro
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    
    // Regular expression for validating an Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Limpar qualquer mensagem de erro anterior
    emailError.textContent = '';

    // Verificar se o valor do e-mail corresponde ao padrão
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Por favor, insira um endereço de e-mail válido.';
        emailInput.focus();
    } else {
        alert('E-mail válido!');
        // Aqui você pode enviar o formulário se quiser, ou realizar outras ações
        // event.target.submit(); // Descomente esta linha para submeter o formulário
    }
});