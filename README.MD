
# Proyecto Stocks  Market - MERN - Backend

Este es el backend del proyecto **Stocks Market**, una plataforma para seguimiento de acciones bursátiles con funcionalidades como watchlist personalizable y manejo dinámico de datos. El backend gestiona la lógica de negocio, persistencia de datos y la comunicación con la base de datos.

Para explorar el proyecto completo, por favor revisa también el [repositorio del frontend](https://github.com/InefableDude/frontend-mern-stocks).

## 🌟 Caracteristicas

- API RESTful para manejar acciones y watchlists.
- Conexión y modelado de datos usando **MongoDB** y **Mongoose**.
- Configuración de variables de entorno para adaptabilidad en diferentes entornos.
- Soporte para CORS para integrarse fácilmente con el frontend
## Tech Stack
- **Node.js**: Entorno de ejecución de JavaScript.
- **Express**: Framework para crear la API.
- **Mongoose**: ODM para trabajar con MongoDB.
- **dotenv**: Gestión de variables de entorno.
- **cors**: Habilitación de comunicación segura entre dominios.
- **body-parser**: Procesamiento de cuerpos de solicitud.
- **nodemon**: Reinicio automático del servidor durante el desarrollo.
## Instalation

#### Requisitos previos
- Node.js instalado (versión 14 o superior).
- MongoDB configurado y en ejecución.


#### Pasos para instalar el proyecto

1. Clona este repositorio:

```bash
  git clone https://github.com/InefableDude/backend-mern-stocks
  cd backend-stocks
```

2. Instala las dependencias:

```bash
  npm install
```
3. Configura las variables de entorno:
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```env
  PORT=5555
  mongoDBURL=<INSERTAR TU BASE DE MongoDB>
```

4. Ejecutar el servidor:
Para desarrollo:
```bash
  npm run dev
```
Para produccion:
```bash
  npm run start
```

### Rutas de la API
- GET /api/stocks: Lista todos los stocks.
- PUT /api/stocks/:id: Agrega el stock a la watchlist.
## Autor

- [@InefableDude](https://github.com/InefableDude)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https:///)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/baruch-rafael-rodriguez-covarrubias-3b793a2a5)


## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)