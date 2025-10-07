# 🍊 OranX

Aplicación web inspirada en **X (Twitter)**, desarrollada con HTML, CSS y JavaScript.
En OranX, los usuarios pueden iniciar sesión con distintos perfiles predefinidos y compartir sus pensamientos en forma de **“naranjitos”**, análogos a los tweets.
También pueden leer los naranjitos de otros usuarios, dejar comentarios y dar likes.

🌐 Demo desplegada en: [OranX](https://oranx.netlify.app) 

A web application inspired by **X (Twitter)**, built with HTML, CSS, and JavaScript.
Users can log in with predefined accounts to post “naranjitos” (tweets), like others’ posts, and view or comment on existing ones.

🌐 Demo deployed in: [OranX](https://oranx.netlify.app)

---

## 📑 Tabla de Contenidos / Table of Contents

[🚀 Tecnologías utilizadas / Built With](#tecnologias) </br>
[🎨 Diseño / Design](#diseno)</br>
[🧩 Funcionalidades principales / Main Features](#funcionalidades)</br>
[📥 Instalación y uso / Installation & Usage](#instalacion)</br>
[📸 Capturas / Screenshots](#capturas)</br>
[👩‍💻 Autora / Author](#autora)</br>

---

<a name="tecnologias"></a>

## 🚀 Tecnologías utilizadas / Built With

**HTML5**

* Estructura del proyecto.
* Project structure.

**CSS3**

* Diseño visual, layout y animaciones.
* Visual design, layout, and animations.

**JavaScript (ES6+)**

* Lógica, renderizado dinámico y gestión del DOM.
* Logic, dynamic rendering, and DOM manipulation.

**Fetch API**

* Consumo de una API REST para autenticación y obtención de usuarios.
* REST API fetching for authentication and users.

---

<a name="diseno"></a>

## 🎨 Diseño / Design

El diseño de OranX recrea la experiencia minimalista de X (Twitter), adaptada a un entorno más visual y colorido, con una estética inspirada en **naranjas y tonos cítricos**.
Los avatares, botones y emojis refuerzan la identidad divertida y fresca de la plataforma.

The design recreates the minimalist experience of Twitter, reimagined with bright orange tones and playful visual identity.

---

<a name="funcionalidades"></a>

## 🧩 Funcionalidades principales / Main Features

### 🔹 Inicio de sesión / Login

* Los usuarios pueden iniciar sesión con cualquiera de las siguientes combinaciones:
  *(ejemplo)*

  * **Usuario:** Paquito → **Contraseña:** Paquito123
  * **Usuario:** Paquita → **Contraseña:** Paquita123
  * *(y más perfiles disponibles)*
* Validación mediante **fetch** a una API mock ([https://users-api-mu.vercel.app](https://users-api-mu.vercel.app)).
* Mensaje de error si las credenciales son incorrectas.

### 🔹 Publicación de Naranjitos / Post Naranjitos

* Una vez logueado, el usuario puede escribir su “naranjito” en un input.
* Publica al presionar **Enter** o haciendo clic en el botón con el icono de una naranja.
* El nuevo naranjito se renderiza dinámicamente en la interfaz sin recargar la página.

### 🔹 Interacciones / Interactions

* ❤️ **Likes interactivos:**

  * Clic → suma/resta un like.
  * Cambio de icono vacío a lleno.
* 💬 **Comentarios:**

  * Cada naranjito puede desplegar o contraer sus comentarios.
  * Se muestran con avatar, nombre y arroba del comentarista.
* 🔁 **Renaranjeos:**

  * (Funcionalidad visual placeholder para futuras versiones).

### 🔹 Datos precargados / Seeded Data

* Los naranjitos iniciales se generan automáticamente tras el login.
* Contienen frases sobre tecnología, programación y desarrollo web.
* Algunos incluyen comentarios simulados de otros usuarios.

### 🔹 Layout Responsivo / Responsive Layout

* Adaptado a distintos tamaños de pantalla (desktop, tablet, móvil).
* Estructura de tarjetas verticales con separación visual clara.

---

<a name="instalacion"></a>

## 📥 Instalación y uso / Installation & Usage

1. **Clonar el repositorio / Clone the repository**

   ```bash
   git clone https://github.com/tuusuario/oranx.git
   ```

2. **Entrar al directorio / Enter directory**

   ```bash
   cd oranx
   ```

3. **Abrir en navegador / Open in browser**

   * Puedes abrir directamente el `index.html` en tu navegador favorito.
   * También puedes usar una extensión como *Live Server* (VS Code).

---

<a name="capturas"></a>

## 📸 Capturas / Screenshots

### 🖥️ Desktop:

* Login:

  <img width="737" height="800" alt="image" src="https://github.com/user-attachments/assets/11861658-fc52-4851-a83a-2bca94cc9eb2" />
  
* Vista de naranjitos:
  <img width="1531" height="840" alt="image" src="https://github.com/user-attachments/assets/99500a1b-b6f1-4d96-9ee8-1bf9e041d792" />


### 📱 Mobile:

<img width="270" height="478" alt="image" src="https://github.com/user-attachments/assets/246620c8-ea14-443a-be46-5c26a192d456" />


---

<a name="autora"></a>

## 👩‍💻 Autora / Author

Proyecto desarrollado por **Lucía Carrera** ✨</br>
Project developed by **Lucía Carrera** ✨

<img width="32" height="32" alt="image" src="https://github.com/user-attachments/assets/25c6a90f-c9e1-4c9b-9083-b351d83c26e2" /> GitHub: [@Luccargui](https://github.com/Luccargui) </br>
<img width="32" height="32" alt="image" src="https://github.com/user-attachments/assets/7d6cf970-cb61-4a08-8bf8-75ed27d3b9a1" /> LinkedIn: [Lucía Carrera Guillén](https://www.linkedin.com/in/lucia-carrera-guillen/)

---

**OranX — La red social más jugosa del código 🍊**
