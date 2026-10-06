# Guía de CI/CD, Calidad de Código y Despliegue Automatizado

Este proyecto cuenta con una pipeline automatizada de Integración y Despliegue Continuo (CI/CD) utilizando **GitHub Actions** y **Vercel**, respaldada por herramientas de calidad de código en local (**Husky**, **Lint-Staged**, **ESLint** y **Prettier**).

---

## 🛠️ Arquitectura de Calidad y Despliegue

La estrategia de calidad de software está dividida en dos niveles:

```
[ Desarrollador ]
       │
       ├─► 1. Local (Pre-commit Hook - Husky & Lint-Staged)
       │      ├─ Formateo automático (npm run format / Prettier)
       │      └─ Corrección y validación de Linter (npm run lint / ESLint)
       │
       │  git push origin master
       ▼
[ Repositorio GitHub ]
       │
       ├─► 2. Pipeline de CI/CD (.github/workflows/deploy.yml)
       │
       ▼
[ GitHub Actions Runner ]
       │
       ├─ 1. Checkout del código
       ├─ 2. Setup Node.js (v22)
       ├─ 3. Instalación estricta de dependencias (npm ci)
       ├─ 4. Verificación de Formato (prettier --check)
       ├─ 5. Verificación de Linter (npm run lint)
       ├─ 6. Pruebas unitarias (npm test)
       │
       ▼ (Si todas las validaciones resultan exitosas)
[ Vercel CLI Deployment ]
       │
       ├─ 1. vercel pull (Descarga variables de entorno)
       ├─ 2. vercel build --prod (Compilación optimizada)
       └─ 3. vercel deploy --prebuilt --prod (Despliegue en producción)
```

---

## 🧼 Herramientas de Calidad de Código Integradas

### 1. Nivel Local: Husky + Lint-Staged

Antes de permitir guardar un commit en Git, **Husky** intercepta el evento y ejecuta los hooks definidos:

- **`npm run format` / `prettier`:** Formatea automáticamente los archivos HTML, TS, SCSS y JSON.
- **`npm run lint` / `eslint`:** Comprueba la sintaxis y buenas prácticas de TypeScript y Angular.
- **`lint-staged`:** Optimiza la verificación ejecutando el linter y formateador **únicamente en los archivos modificados**, reduciendo el tiempo de espera.

### 2. Nivel Servidor: CI/CD en GitHub Actions

En el servidor de integración continua se ejecuta la verificación en modo lectura (`--check`):

- Si algún archivo no cumple con el formato de Prettier o falla en las reglas de ESLint, la pipeline se cancela automáticamente y **no realiza el despliegue**.
- Evita que código con mal formato o errores sintácticos llegue a producción.

---

## ⚡ Optimización de Build (Angular + Vercel)

El proceso de despliegue utiliza `vercel build --prod`, el cual:

- Invoca el compilador de producción de Angular (`ng build --configuration production`).
- Aplica **Tree-Shaking** (elimina código no utilizado) y **Minificación** de JS/CSS.
- Genera fragmentación de paquetes (_Bundle Splitting_) para rendimiento óptimo.
- Con la bandera `--prebuilt`, se suben únicamente los artefactos compilados de la carpeta `dist/`, ahorrando espacio y evitando transferir `node_modules` o código fuente a Vercel.

---

## 🔑 Configuración de Secretos en GitHub

Para que GitHub Actions autorice el despliegue a Vercel, ve a tu repositorio en **Settings > Secrets and variables > Actions** y registra:

| Nombre del Secreto  | Descripción                   | Ubicación / Origen                           |
| ------------------- | ----------------------------- | -------------------------------------------- |
| `VERCEL_TOKEN`      | Token de API personal         | Vercel > Account Settings > Tokens           |
| `VERCEL_ORG_ID`     | Identificador de organización | Archivo `.vercel/project.json` (`orgId`)     |
| `VERCEL_PROJECT_ID` | Identificador del proyecto    | Archivo `.vercel/project.json` (`projectId`) |

---

## 📋 Comandos Útiles para Desarrollo

```bash
# Servidor de desarrollo local
npm start

# Validar formato y calidad manualmente
npm run format      # Aplica Prettier en todo el proyecto
npm run lint        # Revisa reglas de ESLint
```

---

## 🚀 Flujo para Desplegar Cambios

1. Modifica tu código normalmente.
2. Haz el commit local:
   ```bash
   git add .
   git commit -m "feat: agrega nueva sección al portfolio"
   ```
   _(Husky ejecutará automáticamente el formateo y linter antes de confirmar el commit)._
3. Sube tus cambios a la rama principal:
   ```bash
   git push origin master
   ```
4. Monitorea el progreso del despliegue en la pestaña **Actions** de tu repositorio en GitHub.
