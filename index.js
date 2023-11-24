document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var formData = new FormData(event.target); // Lê os dados do formulário

    var banco = {
        name: formData.get('fname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        initialBalance: formData.get('amount'),
        deposit: formData.get('deposit'),
        withdrawal: formData.get('withdrawal')
    };

    // Implemente aqui a lógica para processar os dados e criar a conta no banco de dados
    console.log('Conta aberta:', banco);
});