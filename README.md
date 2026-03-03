# 🧪 QA Automation Challenge – Playwright

Proyecto de automatización E2E utilizando Playwright Test, con generación de reportes en Allure y ejecución en GitHub Actions.

## 📌 Stack Tecnológico
- Node.js 20
- Playwright Test
- Allure Reporter
- GitHub Actions (CI)
- Page Object Model (POM)
- Autenticación reutilizable con storageState

## 📂 Estructura del Proyecto

``` bash
.
├── tests/
│   ├── setup/
│   │   └── auth.setup.js
│   ├── cart.spec.js
│   └── ...
├── pages/
│   ├── LoginPage.js
│   └── ProductsPage.js
├── data/
│   ├── users.js
│   └── products.js
├── storage/
│   └── auth.json
├── playwright.config.js
├── package.json
└── .github/workflows/playwright.yml
```

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Farid1396/playwright-challenge.git
cd playwright-challenge
```

Instalar dependencias:

```bash
npm install
```

Instalar navegadores:

```bash
npx playwright install
```

## ▶️ Ejecución de Tests

Ejecutar todos los tests

```bash
npm test
```

Ejecutar en modo UI
```bash
npm run test:ui
```

Ejecutar Smoke
```bash
npm run test:smoke
```

Ejecutar Regression
```bash
npm run test:regression
```

## 🔐 Autenticación Reutilizable

Se utiliza un proyecto setup en Playwright para:

1. Loguear al usuario

2. Generar storage/auth.json

3. Reutilizar sesión en tests dependientes

Configuración en playwright.config.js:
```js
projects: [
  {
    name: 'setup',
    testMatch: /.*\.setup\.js/
  },
  {
    name: 'chromium',
    use: {
      browserName: 'chromium',
      storageState: 'storage/auth.json'
    },
    dependencies: ['setup']
  },
  {
    name: 'firefox',
    use: {
      browserName: 'firefox',
      storageState: 'storage/auth.json'
    },
    dependencies: ['setup']
  }
]
```

## 📊 Reportes Allure

Generar reporte:
```bash
npm run allure:generate
```

Abrir reporte:
```bash
npm run allure:open
```

El reporte incluye:
- Screenshots en fallos
- Video en fallos
- Trace en reintentos
- Ejecución por navegador

## 🔄 CI – GitHub Actions

Pipeline configurado para:
- Instalar dependencias
- Instalar navegadores
- Ejecutar tests en:
  - Chromium
  - Firefox
- Generar reporte Allure
- Subir reporte como artifact

Archivo:
```bash
.github/workflows/playwright.yml
```

## 🧠 Buenas Prácticas Implementadas
- Page Object Model
- Separación de data de test
- Autenticación desacoplada
- Configuración específica para CI (headless automático)
- Matrix de navegadores
- Reportería avanzada

## 📈 Mejoras Futuras
- Publicación automática de Allure en GitHub Pages
- Persistencia de history en Allure
- Integración con Slack o Teams
- Dockerización del entorno

## 👤 Autor
Farid – QA Automation Engineer