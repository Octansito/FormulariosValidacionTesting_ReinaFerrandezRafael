import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
/** Page Login de Pawpets que controla la inserción de datos por
 * parte del usuario * y maneja el estado de inicio de sesión. Además, se da el toque estético de la protectora
 * @returns el page
 * */
function Login() {
  /**Estado para guardar la información introducia por el usuario en la celda usuario */
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  //Estado para guardar la ifnroamcioón introducida por el usuario en contraseña
  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  //Llama a la función login() del AuthContext para marcar al usuario coomo autenticado
  const { login } = useAuth();
  //Si el usuario es correcto, se empleará para navegar como auntenticado
  const navigate = useNavigate();

  //Función para enviar el formulario de autenticación
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorUser(false);
    setErrorPass(false);
    //Comprobación de campos vacios
    const userVacio = user.trim() === "";
    const passVacio = pass.trim() === "";
    //Si lo están se pintan en rojo
    if (userVacio || passVacio) {
      if (userVacio) setErrorUser(true);
      if (passVacio) setErrorPass(true);
      console.log("Completa usuario y contraseña.");
      return;
    }

    if (user.trim() === "admin" && pass.trim() === "1234") {
      login();
      navigate("/admin", { replace: true });
    } else {
      setErrorUser(true);
      setErrorPass(true);
      console.log("Credenciales incorrectas");
    }
  };

  return (
    <section className="max-w-md mx-auto p-6">
      <div className="bg-[var(--colorsecondary)] border border-[var(--colorgrey-5)] shadow-[var(--dropshadow)] rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Accede a tu cuenta</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            Usuario:
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              autoComplete="username"
              className={`border rounded px-3 py-2 ${
                errorUser
                  ? "border-[var(--colorerror)] focus:ring-2 focus:ring-[var(--colorerror)]"
                  : "border-[var(--colorgrey-5)] focus:ring-2 focus:ring-[var(--colorprimary)]"
              }`}
            />
          </label>

          <label className="flex flex-col gap-1">
            Contraseña:
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autoComplete="current-password"
              className={`border rounded px-3 py-2 ${
                errorPass
                  ? "border-[var(--colorerror)] focus:ring-2 focus:ring-[var(--colorerror)]"
                  : "border-[var(--colorgrey-5)] focus:ring-2 focus:ring-[var(--colorprimary)]"
              }`}
            />
          </label>

          <button
            type="submit"
            className="rounded px-4 py-2 font-semibold border border-[var(--colorblack-1)] bg-[var(--colorcta)] hover:bg-[var(--colorcta-hover)]"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
