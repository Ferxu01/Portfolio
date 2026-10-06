# Guía de Commits y Convenciones de Código

Este proyecto utiliza la especificación de **Conventional Commits** (`@commitlint/config-conventional`), la cual está automatizada mediante **Husky** y **Commitlint**.

---

## 🎯 ¿Por qué utilizamos Conventional Commits?

1. **Historial limpio y legible:** Permite entender qué cambios introdujo cada commit sin necesidad de revisar el código.
2. **Automatización de Versiones (Semantic Versioning):** Facilita la generación automática de notas de lanzamiento (_changelogs_) y versiones (`MAJOR.MINOR.PATCH`).
3. **Validación Automática:** Husky rechazará cualquier commit que no siga estas reglas antes de guardarlo en Git.

---

## ✍️ Estructura de un Mensaje de Commit

La estructura básica de un commit debe seguir este patrón:

```text
<tipo>[ámbito opcional]: <descripción corta en minúsculas>

[cuerpo opcional]

[pie de página opcional]
```

### Ejemplos directos:

- `feat(auth): agrega inicio de sesión con Google`
- `fix(navbar): corrige desalineación en dispositivos móviles`
- `docs: actualiza la guía de despliegue en README.md`
- `style: reconfigura las reglas de sangría en prettier`

---

## 📌 Tipos de Commit Permitidos (`types`)

| Tipo           | Propósito                                                                                 | Ejemplo                                                   |
| :------------- | :---------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| **`feat`**     | Una nueva funcionalidad para el usuario.                                                  | `feat(skills): añade sección de tecnologías`              |
| **`fix`**      | Solución a un error o bug existente.                                                      | `fix(contact): resuelve fallo al enviar el formulario`    |
| **`docs`**     | Cambios exclusivamente en la documentación.                                               | `docs: añade especificación de conventional commits`      |
| **`style`**    | Cambios de formato que no afectan la lógica del código (espacios, comas, prettier).       | `style: aplica formato en componentes de angular`         |
| **`refactor`** | Cambio en el código que no corrige un bug ni añade funcionalidad (mejora interna).        | `refactor(services): optimiza llamada a API de proyectos` |
| **`perf`**     | Cambio que mejora el rendimiento de la aplicación.                                        | `perf(images): optimiza carga diferida (lazy loading)`    |
| **`test`**     | Añadir pruebas faltantes o corregir pruebas existentes.                                   | `test(footer): añade pruebas unitarias para enlaces`      |
| **`build`**    | Cambios que afectan el sistema de compilación o dependencias externas (npm, angular cli). | `build: actualiza angular a versión 22`                   |
| **`ci`**       | Cambios en los archivos de configuración de integración continua (GitHub Actions).        | `ci: añade chequeo de linter en pipeline de deploy`       |
| **`chore`**    | Tareas rutinarias que no modifican código de producción ni tests.                         | `chore: actualiza archivo .gitignore`                     |
| **`revert`**   | Revierte un commit anterior.                                                              | `revert: revierte "feat: añade tema oscuro"`              |

---

## 🎯 Ámbito u Opcional (`scope`)

El ámbito especifica qué parte del código se ha visto afectada. Se escribe entre paréntesis inmediatamente después del tipo:

- `feat(portfolio): ...`
- `fix(hero-section): ...`
- `ci(github-actions): ...`

---

## 💥 Cambios Disruptivos (_Breaking Changes_)

Cuando un cambio rompe la compatibilidad con versiones anteriores, se indica agregando un signo de exclamación **`!`** antes de los dos puntos o añadiendo `BREAKING CHANGE:` en el pie de página.

### Ejemplo con `!`:

```text
feat(api)!: cambia el formato de respuesta del endpoint de proyectos
```

### Ejemplo con pie de página:

```text
feat(api): cambia el formato de respuesta del endpoint de proyectos

BREAKING CHANGE: La propiedad 'title' ahora se llama 'projectName'.
```

---

## 🚫 Errores Comunes Rechazados por Commitlint

Commitlint bloqueará tu commit si cometes alguno de los siguientes errores:

1. **Uso de Mayúscula Inicial:**
   - ❌ `feat: Agrega nueva sección`
   - ✅ `feat: agrega nueva sección`

2. **Punto Final al final del título:**
   - ❌ `fix: soluciona error de margen.`
   - ✅ `fix: soluciona error de margen`

3. **Tipo no reconocido:**
   - ❌ `update: cambia estilos del botón`
   - ✅ `style: cambia estilos del botón`

4. **Mensaje demasiado genérico:**
   - ❌ `fix: arreglos`
   - ✅ `fix(ui): ajusta padding del contenedor principal`
