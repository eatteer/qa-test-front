# Reglas de negocio

## Registro

1. Todos los campos deben ser diligenciados
2. El nombre debe estar compuesto por dos palabras referentes al nombre
y el apellido
3. El correo debe cumplir con el estandar de una dirección y no puede estar repetido
en la base de datos
4. La contraseña debe tener mínimo ocho carácteres (No se especifica longitud máxima)
5. Debe tener mínimo una mayúscula
6. Debe tener mínimo una minúscula
7. Debe tener mínimo un número
8. Debe tener mínimo un carácter especial
9. Al repetir la contraseña se debe informar si ambos campos coinciden

## Inicio de sesión

1. El usuario debe poder iniciar sesión con el correo y la contraseña con la que se registró
2. Todos los campos deben estar correctamente diligenciados
3. Al ingresar a la plataforma se debe de ver el nombre del usuario
4. La plataforma debe permitir cerra la sesión

## Bugs a generar en registro

El usuario se registra correctamente cuando la contraseña no cumple las reglas de negocio
establecidas. Al realizar pruebas en el formulario de registro de usuario, se ha identificado
que la funcionalidad de validación de contraseña no está cumpliento con las reglas del negocio
establecidas:

1. Al ingresar una contraseña con menos de ocho carácteres, el sistema no muestra un mensaje de
error indicando que la contraseña debe tener un mínimo de ocho carácteres
2. Se ha verificado que el sistema permite registrar una contraseña sin cumplir con los requisitos
mínimos de tener al menos una letra mayúscula, una letra mínuscula, un número y un carácter especial.
No se muestra un mensaje de error correspondiente al no cumplir con estas reglas

El usuario registra correctamente cuando el email es invalido y está duplicado: Durante las pruebas
realizadas en el formulario de registro de usuario, se ha identificado que el sistema permite registrar
usuarios exitosamente a pesar de las siguientes irregularidades:

1. Correo invalido: El sistema permite el registro exitoso de usuarios incluso cuando se ingresa un
correo que no cumple con el formato valido de una dirección de correo
2. Correo duplicado: El sistema permite registrar usuario exitosamente utilizando un correo que ya ha
sido registrado previamente por otro usuario

### Resumen

1. Permitir menos de ocho carácteres y no mostrar un mensaje de error
2. No validar al menos un requisito para la contraseña
3. Permitir registro con correo invalido
4. Permitir registro con correo duplicado
