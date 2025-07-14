import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext.jsx";

import "../styles/Global.css";

export default function Admin() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="admin">
      <p>Componente Admin</p>
    </div>
  );
}
