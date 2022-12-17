# Proyecto backend para aprender Node, Express, Docker, JWT, ORM 


## Montar el entorno de desarollo

```bash
npm run dev
```

## Montar servicios docker

<b> Montar base de datos: </b>

```bash
docker compose up -d postgres
```

<b> Montar pgadmin: </b>

```bash
docker compose up -d pgadmin
```



## Comandos utiles en docker

<b> ver contenedores: </b>

```bash
docker compose ps
```

<b> Ejecutar bash para un servicio: </b>

```bash
docker compose exec <<container>> bash
```

<b> Inspeccionar un servicio: </b>

```bash
docker inspect <<container_id>> 
```

## Instalar sequelize y como usarlo
Sequelize es un ORM que nos permite tratar la data sin necesidad de escribir querys sql

<b> Instalar sequelize: </b>

```bash
npm install --save sequelize
```

<b> Instalar drivers para postgres: </b>
```bash
npm install --save pg pg-hstore
```
