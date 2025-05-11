# Componente Personalizado: `<tarjeta-usuario>`

Este proyecto forma parte de la asignatura programación Integrativa. Se ha desarrollado un componente personalizado reutilizable utilizando **Web Components**, **Custom Elements** y **Shadow DOM**.

Dicho objeticvo de la tarea es poder crear un componente personalizado funcional e independiente que represente una **tarjeta de perfil de usuario**, permitiendo insertar elementos dinámicos como imagen, nombre y descripción, sin afextar el estilo del resto de la página.

## 📦 Archivos incluidos

- `index.html`: Página de ejemplo que utiliza el componente.
- `script.js`: Código del componente `<tarjeta-usuario>`.
- `docs/`: Carpeta con capturas de pantalla del componente en uso.

## 💡 Uso

Para usar el componente en tu proyecto HTML:

```html
<tarjeta-usuario>
  <img slot="imagen" src="img/perfil.jpg" alt="Mi foto" />
  <h2 slot="titulo">Toapanta Paez Darwin Andrés</h2>
  <p slot="contenido">Estudiante de Programación Integrativa</p>
</tarjeta-usuario>
