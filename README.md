# 🧪 QA Automation Challenge

#### Playwright + Cucumber + Node.js

## 📌 Descripción

Este proyecto automatiza un flujo end-to-end representativo utilizando Playwright, Cucumber (BDD) y Node.js, aplicando buenas prácticas de automatización, diseño modular y foco en estabilidad.

El flujo cubre:

- Login exitoso
- Agregado de producto al carrito
- Validaciones funcionales
- Logout
- Cobertura de escenarios negativos (login inválido)

## 🧰 Stack Tecnológico

- Node.js
- Playwright
- Cucumber (BDD)
- JavaScript (ES Modules)
- @playwright/test (assertions)

## 📁 Estructura del Proyecto
```
project-root/
├── features/
│   ├── pages/            # Page Objects
│   │   ├── LoginPage.js
│   │   └── ProductsPage.js
│   ├── steps/            # Step Definitions
│   │   ├── hooks.js
│   │   ├── login.steps.js
│   │   └── products.steps.js
│   └── login.feature     # Feature files (Gherkin)
│
├── config/
│   └── env.js             # Variables de entorno / data
│
├── playwright.config.js
├── cucumber.js
├── package.json
└── README.md
```

## ▶️ Instalación
### 1️⃣ Clonar el repositorio
``` bash
git clone <repo-url>
cd project-root
```

### 2️⃣ Instalar dependencias
``` bash
npm install
```

### 3️⃣ Instalar navegadores de Playwright
``` bash
npx playwright install
```
### ▶️ Ejecución de Tests

Ejecutar todos los escenarios:
``` bash
npm test
```

#### Los tests se ejecutan en navegador real usando el auto-waiting de Playwright, sin waits artificiales.

## 🧠 Decisiones Técnicas
### ✅ Page Object Model (POM)
- Separación clara entre lógica de negocio y steps
- Los Page Objects encapsulan:
  - Selectores
  - Acciones 
  - Validaciones

### ✅ Cucumber + BDD
- Steps organizados por funcionalidad
- Escenarios legibles para perfiles técnicos y no técnicos
- Facilita extensión futura del framework

### ✅ Manejo de Esperas
- Uso exclusivo del auto-waiting de Playwright
- expect(locator) para sincronización natural
- ❌ No se usa waitForTimeout

### ✅ Selectores
- Preferencia por:
  - data-test 
  - IDs 
  - Selectores semánticos
- Evitando XPath genérico

### ✅ Hooks
- Inicialización y cierre del navegador centralizados
- Contexto compartido mediante World de Cucumber

### ❌ Escenarios Negativos
El proyecto incluye validación de:
- Login con credenciales inválidas
- Visualización de mensajes de error 

Esto permite evaluar:
- Manejo correcto de errores
- Assertions claras
- Estabilidad del framework

## 🚀 Posibles Mejoras
Con más tiempo, el proyecto podría extenderse con:
- 🔁 Ejecución paralela y multi-browser
- 📊 Reportes avanzados (Allure / HTML)
- 🧪 Manejo de data más robusto (JSON / fixtures)
- ⚠️ Mayor cobertura de edge cases
- 🔄 Integración CI/CD (GitHub Actions)
- 📸 Screenshots y videos en fallos

## 👤 Autor
### Farid Atala
###### QA Automation Engineer

## 🧠 Nota para el evaluador
El objetivo del proyecto no es solo automatizar un flujo, sino demostrar criterio técnico, diseño escalable y foco en estabilidad, siguiendo prácticas reales de automatización en entornos productivos.