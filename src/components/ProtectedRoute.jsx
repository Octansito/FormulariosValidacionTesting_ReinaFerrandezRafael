import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
/**
 * Componetne para proteger rutas privadas de la app comprobando el estaod de la autenticacion
 * @param {} param0 children que es el componente que se pretende proteger
 * @returns devuelve al /login o al contenido protegido  (Admin)
 */
function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  if (!isAuth) {
    /**Si no está autenticado te vas a login */
    return <Navigate to="/login" replace />;
  }
  /**Si está autenticado devuelveo el componente progetido */
  return children;
}

export default ProtectedRoute;
