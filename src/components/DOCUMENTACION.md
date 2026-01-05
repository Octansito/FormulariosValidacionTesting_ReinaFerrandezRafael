Pruebas que se van a realizar de testeo para comporbar qué hace un usuario en PAWPETS y que deberían funcionar:

#Informe de Testing - Rafael Reina Ferrández

## Actividad 1

- ** Reto: Integración: ** Comprobación de que al escribir en el buscador del catálogo se filtra correctamente la lista de animales (nombre/raza), mostrando solo los que coinciden y ocultando el resto.

- \**Prompt IA:*Actúa como profesor de testing en React. Quiero aprender a diseñar (no solo copiar) un test de integración con Vitest + React Testing Library para un catálogo que filtra una lista al escribir en un buscador.

Indícame qué debo revisar en el componente para saber si necesito wrappers como MemoryRouter o algún Provider.

Explícame cómo elegir el selector accesible correcto para el input (cuándo usar getByLabelText, getByRole o getByPlaceholderText) y qué información debo buscar en el JSX para decidirlo.

Dame un esqueleto de test siguiendo AAA (Arrange/Act/Assert) y ejemplos de 2–3 líneas clave, explicando el porqué de cada una.

Explícame la diferencia práctica entre getBy... y queryBy... y en qué caso usar cada uno.

Dime errores comunes (router, selectores que no encuentran nada, etc.) y cómo diagnosticarlos con screen.debug().\*

- **Explicación del Test:**

  - **Arrange:** Renderizo `<Catalogo />` envuelto en `MemoryRouter` porque el catálogo usa componentes con `Link` (react-router). Localizo el input del buscador con un selector accesible.
  - **Act:** Simulo que el usuario escribe con `userEvent.type(...)` para disparar una simulación de escritura.
  - **Assert:** Verifico que el animal que coincide aparece (con `getByText` o `getByRole`) y que otro animal no aparece usando `queryBy...`.
  - **Selector destacado:**
  - `getByPlaceholderText(/Buscar por nombre, raza.../i)` se usa porque el buscador tiene `placeholder`.
  - `queryBy...` se usa para comprobar ausencia.

Captura de pantalla:
![alt text](image.png)

## Actividad 2

- **Reto: Regresión: ** Comprobación de que el botón de favorito en una tarjeta cambia su estado al pulsarlo: cambia `aria-pressed` y el texto accesible (`aria-label`) de “Marcar como favorito” a “Quitar de favoritos”.

- \*Prompt IA: Actúa como profesor. No quiero que me lo hagas sin explicar ni quiero copiar y pegar: quiero aprender a diseñar el test.
  Guíame paso a paso para testear un botón ‘Favorito’ en React con Vitest + React Testing Library siguiendo AAA.

Dime qué tengo que mirar en el componente para decidir qué wrappers necesito (Router, Providers).

Dime qué atributos/elementos debo buscar para elegir el selector correcto (role, aria-label, aria-pressed).

Explícame qué interacción simulo y por qué conviene usar userEvent.setup().

Explícame qué asserts son los adecuados (estado inicial y estado final) y por qué.

Dame una estructura de test (esqueleto) y ejemplos de líneas clave, pero con explicación del porqué.\*

- **Explicación del Test:**

  **Arrange:** Renderizo `<PetCard />` con `MemoryRouter` (usa `Link`). Localizo el botón favorito con `getByRole("button", { name: /  Marcar como favorito/i })` porque el componente define `aria-label`.

  - **Act:** Simulo el click del usuario con `userEvent.click(...)`.
  - **Assert:** Compruebo que `aria-pressed` cambia de `false` a `true` y que ahora el botón tiene nombre accesible “Quitar de favoritos”.
  - **Selector destacado:**
    - `getByRole("button", { name: ... })` selecciona por rol accesible y nombre accesible.

Captura de pantalla:
![alt text](image-1.png)
![alt text](image-2.png)

## Actividad 3

- **Reto: Seguridad** Comprobar que el acceso a la ruta `/admin` está protegido:

  - Si NO hay autenticación, redirige y muestra Login.
  - Si SÍ hay autenticación, permite entrar y muestra la página de administración.

- \**Prompt IA:*Actúa como profesor. Quiero aprender a diseñar un test para una ruta protegida /admin en React Router con Vitest + React Testing Library, no solo copiar código.

Explícame qué debo revisar en mi proyecto para identificar cómo se decide la autenticación (localStorage, context, token, etc.).

Guíame sobre cómo simular navegación a /admin usando MemoryRouter y initialEntries, explicando por qué se usa.

Indícame cuándo y por qué debo envolver el render con AuthProvider (o el provider que use mi app) y qué pasa si no lo hago.

Propón los casos de prueba mínimos (no autenticado vs autenticado) y describe qué asserts debería hacer en cada caso.

Dame un esqueleto AAA (Arrange/Act/Assert) con ejemplos de 2–3 líneas clave, explicando el porqué (por ejemplo, findByRole vs getByRole).

Enumera errores típicos (Router/redirect/asíncrono) y cómo diagnosticarlos/solucionarlos (por ejemplo usando screen.debug()).\*

- **Explicación del Test:**
  - **Arrange:** Renderizo el router con `MemoryRouter initialEntries={["/admin"]}` para arrancar directamente en /admin. Envuelo con `AuthProvider` porque el control de acceso depende del contexto de autenticación.
  - **Act:** No hay interacción manual; la acción ocurre al renderizar.
  - **Assert:** Compruebo qué pantalla se renderiza usando `findByRole(...)`.
  - **Selector destacado:**
    - `findByRole(...)` espera a que aparezca el elemento.

Caputad de pantalla:
![alt text](image-3.png)
