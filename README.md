

<img src="images/brandy.png" width="10%">

# Espresso Microservice Base
Plantilla Microservicio NodeJS con Express y conección a Postgres con CRUD Básico y autenticación JWT.
## Como usar
```
$ npm install 
$ npm start
```

## Variables
```
Crear .env
Basarse en archivo env_sample
```

## Docker
```
$ docker build -t expresso-app .
$ docker run -d -p 3000:3000 --name expresso-app
```