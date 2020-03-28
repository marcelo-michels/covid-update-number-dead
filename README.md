# covid-update-number-dead
- Função lambda que manda e-mail com total de mortos no Brasil para o meu e-mail a cada 30 minutos
- Assim passo a receber notificações push do e-mail com o numero de mortos por codiv-19 no Brasil

## Resultado
![](assets/mail.png)

## Dependencias
`` npm i -g serverles ``  
`` npm install ``  


## Fazer deploy no AWS Lambda
`` serverles deploy``


## Configurar um dominio para o e-mail utilizado no AWS SES
- Para enviar e-mail com AWS SES é necessario realizar a autorização de seu dominio para isso.
![](assets/aws-ses.png)
