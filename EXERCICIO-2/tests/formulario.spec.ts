import { test, expect } from '@playwright/test';

const URL = 'http://localhost/CRISTIAN/EXERCICIO-1/index.html'; // Ajusta la URL si es necesario

test.describe('Formulario de Contacto', () => {
    test('debe enviar el formulario correctamente y mostrar mensaje de éxito', async ({ page }) => {
        await page.goto(URL);

        await page.fill('#nombre', 'Juan Pérez');
        await page.fill('#email', 'juan@example.com');
        await page.fill('#mensaje', 'Este es un mensaje de prueba que cumple con el mínimo de 40 caracteres para validar el formulario.');

        await page.click('button[type="submit"]');

        // Espera y comprueba que el mensaje de éxito sea visible
        const mensajeExito = page.locator('#mensajeExito');
        await expect(mensajeExito).toBeVisible();
        await expect(mensajeExito).toHaveText(/Tu mensaje ha sido enviado con éxito/);
    });

    test('debe mostrar errores si se intenta enviar el formulario vacío', async ({ page }) => {
        await page.goto(URL);

        await page.click('button[type="submit"]');

        // Espera a que aparezcan los mensajes de error de Bootstrap
        const nombreInput = page.locator('#nombre');
        const emailInput = page.locator('#email');
        const mensajeTextarea = page.locator('#mensaje');

        await expect(nombreInput).toHaveClass(/is-invalid/);
        await expect(emailInput).toHaveClass(/is-invalid/);
        await expect(mensajeTextarea).toHaveClass(/is-invalid/);

        // El mensaje de éxito NO debe estar visible
        await expect(page.locator('#mensajeExito')).toBeHidden();
    });
});