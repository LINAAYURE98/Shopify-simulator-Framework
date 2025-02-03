# Proyecto Frontend

## Desarrolladora
Lina Maria Ayure Lara

## Inicio Rápido

### Pre-requisitos
- Node.js
- npm

### Instalación
1. Instala las dependencias del proyecto:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run start
```

El proyecto estará disponible en `http://localhost:3000`

## Guía para Desarrolladores

### Configuración de Webpack
El proyecto utiliza Webpack para compilar los archivos SASS y JavaScript ubicados en la carpeta `src`. Los archivos compilados se generan en la carpeta `public` y son referenciados por las vistas.

Para activar la compilación en tiempo real:
```bash
npm run watch
```

### Estructura del Proyecto

#### SASS (`src/sass/`)
La estructura de SASS está organizada de la siguiente manera:

- `base/variables`: Contiene variables globales para:
  - Colores
  - Tipografías
  - Breakpoints responsive

Para utilizar estas variables en otros archivos SASS, es necesario importarlas usando `@use`.

#### Componentes SASS (`src/sass/sections/`)
Cada componente tiene su propio archivo SASS, incluyendo:
- header
- footer
- top-bar
- Otros componentes específicos del diseño

#### JavaScript (`src/js/`)
El archivo JavaScript principal contiene tres funciones principales:

1. **Gestión de Marquees**
   - Maneja la funcionalidad de dos o más marquees en el desarrollo

2. **Control del Header en Scroll**
   - Administra la clase para el comportamiento del header durante el scroll

3. **Carrusel Responsive**
   - Controla la funcionalidad del carrusel tanto en versión móvil como desktop

4. **Header Responsive**
- Controla la funcionalidad del Header tanto en versión móvil

### Notas sobre el Código
- Se ha priorizado un código limpio y autoexplicativo
- Se minimizó el uso de comentarios para mantener el código más legible
- La estructura del proyecto sigue una organización lógica y clara

## Soporte

Si tienes dudas o preguntas sobre el desarrollo, por favor contacta a la desarrolladora.