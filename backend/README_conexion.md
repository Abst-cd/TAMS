npm install
npm install cors
npm install dotenv

# Cómo conectar el backend con el frontend

Hola! Aquí te dejo lo básico para que el frontend hable con el backend:

1. Entra a la carpeta del backend y pon esto en la terminal:

  npm install

2. Para prender el backend, usa:

  node server.js

  El backend corre en http://localhost:3000 (o el puerto que tenga).

3. Los endpoints que puedes usar:
  - /api/auth (para login y registro)
  - /api/tasks (para tareas)

4. Desde el frontend, haz peticiones con fetch o axios. Ejemplo:

  fetch('http://localhost:3000/api/tasks')
    .then(res => res.json())
    .then(data => console.log(data));

  Si necesitas login, manda el token en el header:

  fetch('http://localhost:3000/api/tasks', {
    headers: {
     'Authorization': 'Bearer TU_TOKEN_AQUI'
    }
  })

5. Si el frontend está en otro puerto, pon CORS en el backend:

  npm install cors
