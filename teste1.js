var entrada = "";
var request = require('request');
var urljoin = require('url-join');

let nia = {

    //para consulta ao NIA - informações gerais

   consultaNIA: async (entrada) => {
       return new Promise(function(fullfill, reject){
        request({
            headers: {
                'Content-Type':'application/json',
                'X-Application-Key':'bbd0c730b3f901347f8a005056b925b3'
            },
            uri: 'https://mobile.api.bb.com.br/chatbot-ia/v1/dialogo',
            hostname: 'mobile.api.bb.com.br',
            port: 443,
            path: 'chatbot-ia/v1/dialogo',
            method: 'POST',
            rejectUnauthorized:false,
            body:JSON.stringify({
                "input":entrada,
                "tipo":"GOOGLE_ASSISTANT",
                "context":"{\"system\":{\"dialog_request_counter\":1,\"dialog_stack\":[{\"dialog_node\":\"root\"}],\"dialog_turn_counter\":1},\"conversation_id\":\"cb5a3af4-2536-4ab1-86ba-1528683a3604\"}"
            })}, function(error, response, body){
                if(error){
                    fullfill(error);
                }else{
                    fullfill(JSON.parse(body));  
                    //console.log(JSON.stringify(body.data.output));              
                }
            });
       });
   },

   //para emissão de senha e checkin

   emiteSenha: async (urlAg) => {
    return new Promise(function(fullfill, reject){
     var fullurl = urljoin('https://mobi2.desenv.bb.com.br/mov-centralizador/',urlAg);
        request({
            uri: fullurl,
            //uri: 'https://mobi2.desenv.bb.com.br/mov-centralizador/tela/EmissaoSenha/telaSenha?agencia=7984-7&contaCorrente=4010-X&titularidade=1&prefixoAgenciaAtendimento=0012&tipoAtendimento=17',
            hostname: 'mobi2.desenv.bb.com.br',
            port: 443,
            path: 'mov-centralizador/tela/EmissaoSenha/telaSenha',
            method: 'GET',
            rejectUnauthorized: false,
            }, 
            function(error, response, body){    
                if(error){
                    fullfill(error);
                }else{
                    fullfill(JSON.parse(body));
                    //url2 = campo.conteiner.telas[0].sessoes[0].celulas[3].componentes[0].protocolo.botaoDois.acao;
                    //console.log(url2);          
                }
            });
        });
    },

    //para buscar agencia e conta do cliente
    buscaAgCC: async (acesso) => {
        return new Promise(function(fullfill, reject){
            request({
                headers: {
                    'Authorization':'Bearer '+acesso
                },
                uri: 'https://api.desenv.bb.com.br/oauth/v2/account-info?gw-app-key=09c11ee0df840136edfb005056891bef',
                hostname: 'api.desenv.bb.com.br',
                port: 443,
                path: 'oauth/v2/account-info',
                method: 'GET',
                rejectUnauthorized:false,
                }, 
                function(error, response, body){    
                    if(error){
                        fullfill(error);
                    }else{
                        fullfill(JSON.parse(body));        
                    }
                });
            });
    }

};

module.exports = nia;


