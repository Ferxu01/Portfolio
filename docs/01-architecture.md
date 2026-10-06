# Arquitectura y Estructura del Proyecto

Este documento detalla los principios de diseño, la estructura de carpetas y los estándares adoptados para el mantenimiento y escalabilidad del portfolio.

---

## 🛠️ Stack Tecnológico

- **Framework:** Angular 22+ con TypeScript
- **Preprocesador de Estilos:** SCSS (Sass), utilizando la metodología CSS de BEM (Block Element Modifier)

---

## 📁 Estructura del Proyecto

```text
public/
├── assets/                     # Recursos estáticos (imágenes, iconos SVG)
│   ├── data/
│   ├── flags/
│   ├── profile/
│   ├── projects/
│   ├── logo/
│   └── technologies/
├── i18n/                       # Ficheros de traducciones a idiomas (es.json, en.json)
src/
├── app/
│   ├── components/             # Componentes funcionales (secciones principales)
│   │   ├── about/              # Sección de Sobre mí
│   │   ├── banner/             # Sección de Banner
│   │   ├── footer/             # Sección de Footer
│   │   ├── header/             # Sección de Header
│   │   ├── projects/           # Sección de Proyectos
│   │   ├── technologies/       # Sección de Stack Tecnológico
│   │   └── ...
│   ├── core/
│   └── pages/
└── styles/                     # Estilos globales y abstractos SCSS
    ├── abstracts/
    │   ├── _mixins.scss
        ├── _themes.scss        # Tema claro/oscuro
    │   └── _variables.scss     # Variables SCSS globales
    ├── base/
    │   └── _reset_.scss        # Estilos de reseteo en toda la aplicación
    ├── components/             # Estilos específicos de cada componente
    │   ├── _about_.scss
    │   ├── _banner_.scss
    │   └── ...
    └── styles.scss             # Entrada principal de estilos globales
```

---

## 🚀 Buenas Prácticas Generales

1. **Standalone Components:** Todos los componentes se definen de preferencia como componentes independientes (standalone).
2. **Lazy Loading:** Las imágenes e iconos de peso significativo se cargan de forma diferida (`loading="lazy"`).
3. **Optimización de Tipos:** Toda estructura de datos debe contar con una `interface` explícita definida en un archivo `.model.ts` o `.interface.ts`.
