# Mi Ecommerce

<div align="center">
  <h1>Mi Ecommerce</h1>
  <p>Plataforma de comercio electrónico basada en Saleor y React Storefront.</p>
  
  [🏠 Sitio Web](https://mi-ecommerce.com/) • [📚 Documentación](https://docs.mi-ecommerce.com/) • [📰 Blog](https://blog.mi-ecommerce.com/) • [🐦 Twitter](https://twitter.com/miecommerce)
  
  [🔎 Explorar Código](https://github.com/mi-ecommerce/mi-ecommerce-platform)
</div>

---

## 🚀 Acerca de Mi Ecommerce

### ¿Qué es Mi Ecommerce?
Mi Ecommerce es una plataforma moderna de comercio electrónico que combina el poder de Saleor con la flexibilidad de React Storefront, ofreciendo un entorno optimizado para tiendas en línea de alto rendimiento.

### Características
- **Saleor Core GraphQL API** - Backend de comercio electrónico rápido y escalable
- **React Storefront** - Frontend optimizado para rendimiento en dispositivos móviles
- **Panel de Administración** - Gestión intuitiva de productos, pedidos y clientes
- **Mailpit** - Interfaz para pruebas de correo
- **Jaeger** - Monitorización de rendimiento (APM)
- **Bases de Datos & Caché** - PostgreSQL y Redis configurados para alto rendimiento

> 💡 **Nota:** Este repositorio está diseñado exclusivamente para desarrollo local y no debe usarse en producción. Para pruebas en vivo, visita nuestra demo.

---

## 🛠 Requisitos
- **Docker**
- **Node.js** (para ejecutar el frontend con React Storefront)

---

## 📦 Instalación

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/mi-ecommerce/mi-ecommerce-platform.git
```

### 2️⃣ Configurar Docker
#### Windows/MacOS:
- Agregar la carpeta `mi-ecommerce-platform` a las carpetas compartidas en Docker (Preferences → Resources → File sharing).
- Asegurarse de asignar al menos **5 GB de RAM** en Docker (Preferences → Resources → Advanced).

#### Linux:
- No se requiere configuración adicional.

### 3️⃣ Iniciar la plataforma
```sh
cd mi-ecommerce-platform
docker compose run --rm api python3 manage.py migrate
docker compose run --rm api python3 manage.py populatedb --createsuperuser
docker compose up
```

### 🛠 Superusuario creado:
- **Usuario:** `admin@example.com`
- **Contraseña:** `admin`

---

## 🌍 Dónde se ejecuta la aplicación

| Servicio | URL |
|----------|--------------------------|
| Backend (Saleor API) | [http://localhost:8000](http://localhost:8000) |
| Panel de Administración | [http://localhost:9000](http://localhost:9000) |
| React Storefront (Frontend) | [http://localhost:3000](http://localhost:3000) |
| Jaeger (APM) | [http://localhost:16686](http://localhost:16686) |
| Mailpit (Correo de prueba) | [http://localhost:8025](http://localhost:8025) |

---

## ❓ Troubleshooting

### 🛑 Problemas de espacio o errores de compilación
Si hay errores por falta de espacio o problemas de compilación tras una actualización, sigue estos pasos:

#### 1️⃣ Detener los contenedores:
```sh
docker compose stop
```

#### 2️⃣ Eliminar volúmenes antiguos:
⚠️ **Advertencia:** Esto eliminará la base de datos. Si deseas conservar los datos, borra solo los servicios problemáticos.
```sh
docker compose rm
```

#### 3️⃣ Reconstruir los contenedores:
```sh
docker compose build
```

#### 4️⃣ Volver a ejecutar la aplicación:
```sh
docker compose up
```

### 🚀 Falta de espacio en Docker
Si el problema persiste, limpia la caché de Docker:
```sh
docker system prune
```
⚠️ **Esto eliminará:**
- Contenedores detenidos
- Redes no utilizadas
- Imágenes huérfanas
- Caché de compilación

### 🔄 Resetear la base de datos
Si hay problemas con migraciones tras actualizar versiones:
```sh
docker compose down --volumes db
```
⚠️ **Esto eliminará TODOS los datos de la base de datos.**

---

## 🎯 Cómo ejecutar solo partes de la aplicación

### Backend y worker:
```sh
docker compose up api worker
```

### Frontend y backend juntos:
```sh
docker compose up
```

---

## 📩 Feedback
Si tienes preguntas o sugerencias, participa en nuestras **[Discusiones de GitHub](https://github.com/mi-ecommerce/mi-ecommerce-platform/discussions)**.

---

## 📜 Licencia
Este proyecto es open source y se puede usar libremente bajo los términos de la **licencia MIT**.

📩 **Para soporte personalizado o integraciones avanzadas, contáctanos en** contacto@mi-ecommerce.com

---

🚀 **Desarrollado con ❤️ por Mi Ecommerce** 🚀

