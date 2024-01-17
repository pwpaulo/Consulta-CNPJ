function validarCnpj(cnpj){
    $.ajax({
        'url':'https://receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''),
        'type': 'GET', 
        'dataType': 'jsonp',
        'success': function(dado){ 
            
            if (dado == undefined){
                alert(dado.nome + '' + dado.message)
            } else {
                document.getElementById('razaoSocial').value = dado.nome;
                document.getElementById('fantasia').value = dado.fantasia;
                document.getElementById('abertura').value = dado.abertura;
                document.getElementById('situacao').value = dado.situacao;
                document.getElementById('endereco').value = dado.logradouro;
                document.getElementById('municipio').value = dado.municipio;
                document.getElementById('estado').value = dado.uf;
                document.getElementById('telefone').value = dado.telefone;
            }
            
        }

    })
}