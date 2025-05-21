# Enlaces de interés para acceder al GitHub

GitHub pages

https://bailong01.github.io/CRISTIAN/EXERCICIO-1/


https://github.com/BaiLong01/CRISTIAN

Dentro de ese repositorio estarán ambas ramas de los ejercicios llamadas:

CRISTIAN/
│
├── exercicio-1      # Ejercicio con el formulario y su README.md
├── exercicio-2      # Ejercicio con el formulario, el script de playwright, su README.md y demás.

# Formulario de Contacto con Bootstrap 5

Este proyecto consiste en un formulario de contacto desarrollado con HTML y Bootstrap 5, que permite a los usuarios enviar su nombre, correo electrónico y un mensaje.

## ¿Qué hace el formulario?

El formulario recopila tres datos obligatorios:
- **Nombre**
- **Correo electrónico**
- **Mensaje** (mínimo 40 y máximo 500 caracteres)

Al enviar el formulario, si todos los campos son válidos, muestra un mensaje de éxito y limpia los campos.

## ¿Cómo funciona la validación?

La validación se realiza completamente del lado del cliente utilizando las clases y atributos de Bootstrap 5:
- Todos los campos son obligatorios (`required`).
- El campo mensaje requiere una longitud mínima de 40 caracteres y máxima de 500 (`minlength` y `maxlength`).
- Si algún campo no es válido, se muestra un mensaje de error específico debajo del campo correspondiente.
- El formulario no se envía hasta que todos los campos sean válidos.

## Estructura de archivos

```
EXERCICIO-1/
│
├── index.html      # Página principal con el formulario y la validación
├── README.md       # Este archivo de documentación
└── .gitignore      # Archivos y carpetas ignorados por Git (opcional)
```

## Vista previa

El formulario es responsivo y utiliza los estilos de Bootstrap 5 para una mejor experiencia de usuario.