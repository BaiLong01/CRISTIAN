# Pruebas automatizadas del Formulario de Contacto

Este proyecto contiene pruebas automatizadas para el formulario de contacto desarrollado en el ejercicio anterior.

## Herramienta de prueba utilizada

Se utilizó **[Playwright](https://playwright.dev/)**, una herramienta moderna para pruebas end-to-end en aplicaciones web. Playwright permite automatizar navegadores y verificar el comportamiento de la interfaz de usuario.

## Instalación de dependencias

Para instalar Playwright y sus dependencias, ejecuta en la terminal desde la carpeta del proyecto:

```sh
npm init playwright
```

Esto instalará Playwright siguiendo una serie de pasos que aparecerán en la consola y descargará los navegadores necesarios para las pruebas.

## Ejecución de las pruebas

Se crea un script para testear dos pruebas, una válida y otra inválida de envío de datos.

```sh
npx playwright test tests/formulario.spec.ts
```

Para ejecutar las pruebas, usa el siguiente comando en la terminal:

```sh
npx playwright test
```

Asegúrate de que tu servidor local (por ejemplo, XAMPP) esté corriendo y que la URL configurada en el script de pruebas sea accesible.

---
```// filepath: c:\xampp\htdocs\CRISTIAN\EXERCICIO-2\README.md
# Pruebas automatizadas del Formulario de Contacto

Este proyecto contiene pruebas automatizadas para el formulario de contacto desarrollado en el ejercicio anterior.

## Herramienta de prueba utilizada

Se utilizó **[Playwright](https://playwright.dev/)**, una herramienta moderna para pruebas end-to-end en aplicaciones web. Playwright permite automatizar navegadores y verificar el comportamiento de la interfaz de usuario.

## Instalación de dependencias

Para instalar Playwright y sus dependencias, ejecuta en la terminal desde la carpeta del proyecto:

```sh
npm install -D @playwright/test
npx playwright install
```

Esto instalará Playwright y descargará los navegadores necesarios para las pruebas.

## Ejecución de las pruebas

Para ejecutar las pruebas, usa el siguiente comando en la terminal:

```sh
npx playwright test
```

Esto buscará y ejecutará todos los archivos de prueba (`*.spec.ts`) en la carpeta `tests`.

Si quieres ejecutar solo el archivo de pruebas del formulario:

```sh
npx playwright test tests/formulario.spec.ts
```

Asegúrate de que tu servidor local (por ejemplo, XAMPP) esté corriendo y que la URL configurada en el script de pruebas sea accesible.

---