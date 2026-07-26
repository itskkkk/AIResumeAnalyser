import { Navigate, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedShell() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--ink-muted)] text-sm">
        Loading...
      </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;
  return <AppShell />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedShell />,
    children: [

    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);