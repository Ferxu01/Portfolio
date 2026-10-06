# Guía de Estilos y Metodología BEM

Adoptamos **BEM (Block Element Modifier)** para garantizar un CSS modular, mantenible y libre de colisiones de nombres o especificidad innecesaria.

---

## 🎨 Principios BEM

### 1. Bloque (`.block`)

Unidad autónoma que define un componente visual o una sección.
_Ejemplos:_ `.tech-section`, `.project-card`, `.main-stack`

### 2. Elemento (`.block__element`)

Partes dependientes del bloque que carecen de significado autónomo. Se unen al bloque con doble guion bajo (`__`).
_Ejemplos:_ `.tech-card__icon`, `.projects-section__title`

### 3. Modificador (`.block--modifier` o `.block__element--modifier`)

Define estados o variantes de estilo. Se unen con doble guion medio (`--`).
_Ejemplos:_ `.tech-card--active`, `.project-card__title--featured`

---

## 📝 Reglas Estrictas de BEM en el Proyecto

1. **Evitar la anidación profunda:** No encadenar elementos BEM (`.block__elem1__elem2` ❌). Mantener siempre la estructura de un solo nivel (`.block__elem2`343 ✅).
2. **Uso de Ampersand (`&`) en SCSS:** Estructurar el código SCSS aprovechando la anidación nativa de Sass:

```scss
// Ejemplo de estructura de bloque en SCSS
.tech-card {
  background-color: rgba(15, 23, 42, 0.6);
  border-radius: 1rem;

  &__icon-wrapper {
    width: 3.5rem;
    height: 3.5rem;
  }

  &__icon {
    width: 100%;
    object-fit: contain;
  }

  &__name {
    font-size: 0.9rem;
    color: #ffffff;
  }

  &:hover {
    transform: translateY(-4px);
  }
}
```

---

## 📱 Estrategia Responsive (`mixins.scss`)

Se utiliza el mixin `@include respond-to('breakpoint')` en lugar de `@media` dispersos para unificar los puntos de interrupción del diseño:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

```scss
.tech-group__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include respond-to('md') {
    grid-template-columns: repeat(4, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(5, 1fr);
  }
}
```
