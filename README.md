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

## 🌐 Multi-Browser Execution

El framework soporta ejecución en múltiples navegadores:

- Chromium
- Firefox
- WebKit

Ejemplo:
```bash
BROWSER=firefox npm test
```

## 📊 Reportes

El proyecto utiliza **Allure Report** para visualizar resultados de ejecución.

Incluye:
- Escenarios ejecutados
- Evidencias visuales
- Screenshots en fallos
- Videos (si aplica)

### Generar reporte
```bash
npm run report:generate
npm run report:open
```

## 🔄 CI/CD

El proyecto cuenta con integración CI/CD usando **GitHub Actions**.

El pipeline:
- Ejecuta los tests automáticamente en cada PR
- Corre en múltiples navegadores
- Genera reportes Allure
- Publica evidencias como artefactos

Esto permite detectar fallos de forma temprana y mantener la calidad del código.

## 🗂️ Manejo de Data

El proyecto utiliza data externa en formato JSON para manejar usuarios y credenciales.

Esto permite:
- Separar datos de la lógica de tests
- Facilitar el data-driven testing
- Escalar escenarios sin modificar steps

## 👤 Autor
### Farid Atala
###### QA Automation Engineer

## 🧠 Nota para el evaluador
El objetivo del proyecto no es solo automatizar un flujo, sino demostrar criterio técnico, diseño escalable y foco en estabilidad, siguiendo prácticas reales de automatización en entornos productivos.