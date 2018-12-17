# BB Assistant - Actions on Google - Actions SDK

Repositório para BB Assistant Actions on Google - Actions SDK

## Instruções

### Steps
1. Use o [Actions on Google Console](https://console.actions.google.com) para criar um novo projeto com um nome de sua escolha e clique *Create Project*.
1. Clique *Skip*, no canto superior direito. Não é preciso escolher nenhuma categoria nesta etapa.
1. No menu à esquerda sob o título *BUILD*, clique em *Actions*. Clique em *Add Your First Action* e escolha o idioma.
1. Faça o deploy da aplicação no servidor escolhido, e utilize o código em *index.js*, para escolha do deploy em Firebase ou outro servidor. Ajuste o código se necessário. Adicione ou exclua arquivos ao projeto, de acordo com a necessidade do servidor.
1. Atualize o arquivo, `actions.json`, substituindo o endpoint do webhook adequado.
1. [Instale o gactions CLI](https://developers.google.com/actions/tools/gactions-cli) se ainda não o tiver.
1. rode o seguinte comando, na pasta onde se encontra o `gactions` e o `actions.json`: `gactions update --action_package actions.json --project <YOUR_PROJECT_ID>`.
1. Vá ao [Actions on Google Console](https://console.actions.google.com), no menu à esquerda sob o título *Test*, clique em *Simulator*.

Para maiores detalhes sobre deploy do projeto, acesse a [documentação](https://developers.google.com/actions/sdk/deploy-fulfillment).

## Referências
* Actions on Google (documentação): [https://developers.google.com/actions/](https://developers.google.com/actions/).
