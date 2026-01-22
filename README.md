# Alke Wallet - Billetera Virtual (MPA)

**Alke Wallet** es una aplicación web de gestión financiera que permite a los usuarios simular las operaciones de una billetera digital.

Este proyecto fue desarrollado para el bootcamp **Talento Digital**, utilizando tecnologías fundamentales de frontend para gestionar la lógica de negocio y la persistencia de datos en el navegador.

---

## Funcionalidades

- **Acceso y Registro:** Sistema de creación de cuentas y validación de credenciales.
- **Dashboard Personalizado:** Visualización del saldo actual y resumen de las últimas 6 transacciones.
- **Depósitos en Línea:** Formulario para ingresar fondos con validación de montos positivos.
- **Transferencias entre Usuarios:** Envío de dinero buscando destinatarios por correo electrónico, generando registros automáticos para emisor y receptor.
- **Historial Detallado:** Vista completa de movimientos con un motor de búsqueda por descripción.

---

## Tecnologías Utilizadas

- **HTML5:** Estructura de las múltiples vistas del sitio.
- **CSS3:** Estilos personalizados para la interfaz.
- **Bootstrap 5.3:** Framework para el diseño responsivo y componentes de UI (Modales, Dropdowns, Tablas).
- **jQuery 3.7:** Manipulación del DOM y manejo de eventos en cada página.
- **JavaScript (ES6):** Lógica de cálculos, filtrado de datos y gestión de la persistencia.
- **LocalStorage:** Uso de la API del navegador para mantener la sesión y los datos vivos al navegar entre las distintas páginas `.html`.

---

## Ejecución del Proyecto

Sigue estos pasos para visualizar y probar la aplicación en tu entorno local:

1. Descarga o Clona el repositorio: Asegúrate de tener todas las carpetas (assets, pages) y el archivo index.html en el mismo directorio raíz.

2. Abrir el proyecto: Al ser un proyecto de frontend estático, no necesitas instalar Node.js ni servidores externos. Simplemente haz doble clic en el archivo index.html para abrirlo en tu navegador preferido.

3. Carga de Datos Iniciales: Al abrir la aplicación por primera vez, el archivo data.js cargará automáticamente 4 usuarios de prueba y un historial de transacciones en tu localStorage.

4. Prueba de Usuario (Login): Puedes ingresar con las siguientes credenciales de ejemplo:

Email: snow@gmail.com

Contraseña: 12345678Aa

---

## Detalles Técnicos

- Persistencia entre páginas: Aunque el sitio se recarga al cambiar de vista, el estado del usuario y sus transacciones se recuperan en cada carga mediante el objeto currentUser almacenado en el localStorage.

- Validaciones: Se utilizan expresiones regulares (Regex) para asegurar que el registro de usuarios cumpla con formatos de correo válidos y contraseñas seguras (mínimo 8 caracteres, incluyendo mayúsculas y números).

- Lógica de Transferencia: La aplicación garantiza la integridad de los datos creando dos registros por cada transferencia: un egreso para quien envía y un ingreso para quien recibe.

---

Desarrollado para: Talento Digital

Autor: Camilo Sanchez
