# covid-update-number-dead
- Função lambda que manda e-mail com Atualização de casos e mortos no Brasil para o meu e-mail a cada 1 hora
- Assim passo a receber notificações push do e-mail com as atualizações

## Resultado
![](assets/mail.png)

## Dependencias
`` npm i -g serverles ``  
`` npm install ``  


## Fazer deploy no AWS Lambda
`` serverless deploy``


## Configurar um dominio para o e-mail utilizado no AWS SES
- Para enviar e-mail com AWS SES é necessario realizar a autorização de seu dominio para isso.
![](assets/aws-ses.png)
