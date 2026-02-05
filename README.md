🧪 QA Automation Framework — Playwright + Allure

Framework de automatización E2E desarrollado como challenge técnico, utilizando Playwright Test, Page Object Model, fixtures reutilizables y Allure Report para trazabilidad y evidencia.

🚀 Tech Stack

Node.js

Playwright Test

Allure Report

JavaScript (ESM)

GitHub Actions (CI/CD)

📂 Project Structure
project-root
├── tests
│   ├── cart.spec.js
│   └── fixtures
│       └── auth.fixture.js
├── pages
│   ├── LoginPage.js
│   └── ProductsPage.js
├── data
│   ├── users.js
│   └── products.js
├── playwright.config.js
├── package.json
└── README.md

🧠 Design Decisions

Page Object Model (POM)
Encapsula lógica de UI y reduce acoplamiento entre tests y selectors.

Fixtures personalizadas
Permiten reutilizar flujos de autenticación sin duplicar pasos.

Data-driven testing
Usuarios y productos desacoplados de los tests.

Allure Report
Evidencia visual, screenshots en fallos y métricas por ejecución.

CI/CD con GitHub Actions
Ejecución automática por browser y almacenamiento de reportes.

▶️ Test Execution
npm install
npx playwright install
npm test

📊 Allure Report
npm run allure:generate
npm run allure:open

🤖 CI/CD

Los tests se ejecutan automáticamente en cada push o pull request.
Los reportes Allure se generan y almacenan como artifacts del pipeline.