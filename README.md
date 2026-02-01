🧪 QA Automation Challenge – Playwright + Cucumber
📌 Descripción

Este proyecto implementa un mini framework de automatización E2E para un flujo básico de e-commerce, utilizando Playwright, Cucumber (BDD) y Node.js.

El objetivo principal no es la complejidad del flujo, sino demostrar:

Buenas prácticas de automatización

Correcta arquitectura

Código mantenible, estable y escalable

🛠️ Tecnologías utilizadas

Node.js

Playwright

Cucumber

JavaScript

Page Object Model (POM)

📂 Estructura del proyecto
project-root/
├── features/
│   ├── login.feature
│   └── steps/
│       ├── login.steps.js
│       └── hooks.js
├── pages/
│   ├── LoginPage.js
│   └── ProductsPage.js
├── config/
│   ├── env.js
│   └── playwright.config.js
├── cucumber.js
├── package.json
└── README.md

⚙️ Instalación

Clonar el repositorio

Instalar dependencias:

npm install


Instalar navegadores de Playwright:

npx playwright install

▶️ Ejecución de tests

Ejecutar todos los escenarios:

npm test


Por defecto los tests se ejecutan en modo headless.

🧠 Decisiones técnicas

Page Object Model:
Se utiliza POM para separar la lógica de interacción con la UI de los steps, mejorando la mantenibilidad y reutilización.

Cucumber + BDD:
Los escenarios están escritos en lenguaje de negocio para facilitar la lectura y comprensión.

Hooks de Cucumber:
El ciclo de vida del navegador (inicialización y cierre) se maneja mediante hooks Before y After, desacoplando esta responsabilidad de los steps.

Selectores estables:
Se priorizó el uso de id y data-test para evitar tests frágiles.

Auto-waiting de Playwright:
Se evitó el uso de esperas artificiales (waitForTimeout), aprovechando el auto-waiting natural y assertions explícitas con expect.

🚫 Estabilidad y flakiness

No se utilizan sleeps ni timeouts fijos.

Las validaciones se realizan mediante assertions claras y explícitas.

Se aprovecha el comportamiento nativo de Playwright para esperar estados de la UI.

🚀 Posibles mejoras

Manejo de variables de entorno por ambiente.

Ejecución cross-browser.

Reportes HTML.

Integración con CI/CD.

Manejo de datos externos (fixtures).

## 🚀 Advanced Capabilities

- Parallel execution across multiple browsers (Chromium, Firefox, WebKit)
- Allure reporting with screenshots, videos and traces
- Externalized test data (users, products)
- Negative and edge case scenarios
- CI integration with GitHub Actions


✅ Conclusión

Este proyecto está diseñado como una base sólida y extensible para pruebas automatizadas E2E, priorizando buenas prácticas, claridad y estabilidad sobre la complejidad del flujo.

🎯 Nota final

Este framework está preparado para escalar incorporando nuevos flujos y escenarios sin necesidad de modificar la arquitectura base.