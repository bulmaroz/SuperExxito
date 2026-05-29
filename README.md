# Super Exxito — Carnicería y Abarrotes

Sitio web moderno para **Carnicería y Abarrotes Super Exxito**, construido con React y Vite.

## Características

- Hero con imágenes de la tienda
- Catálogo filtrable (carnes, cortes para asar, abarrotes)
- Promociones y especial de domingo (barbacoa y menudo)
- Testimonios de clientes
- Contacto, horarios y mapa embebido
- Diseño responsive (móvil, tablet y escritorio)

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite en la terminal (normalmente `http://localhost:5173`).

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run preview` | Vista previa del build |

## Personalización

- **Productos:** `src/data/products.js`
- **Testimonios:** `src/data/testimonials.js`
- **Mapa:** actualiza la URL del iframe en `src/components/Contact.jsx` con la ubicación real en Google Maps
- **Contacto:** teléfono, dirección y correo en `src/components/Contact.jsx`

## Imágenes

Las fotos de la fachada están en `public/images/`. Puedes reemplazarlas manteniendo los mismos nombres o actualizar las rutas en `Hero.jsx`.

