Pruebas que se van a realizar de testeo para comporbar qué hace un usuario en PAWPETS y que deberían funcionar:

#Informe de Testing - Rafael Reina Ferrández

## Actividad 1

- ** Reto: Integración: ** Comprobación de que al escribir en el buscador del catálogo se filtra correctamente la lista de animales (nombre/raza), mostrando solo los que coinciden y ocultando el resto.

- **Prompt IA:**

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
