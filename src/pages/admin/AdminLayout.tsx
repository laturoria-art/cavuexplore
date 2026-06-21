import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { LayoutDashboard, FileText, Users, Tag, Mail, LogOut, ExternalLink } from "lucide-react";

const AdminLayout = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
      isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
    }`;

  return (
    <div className="min-h-screen bg-background flex">
      <aside className="w-64 border-r border-border p-6 flex flex-col gap-2 sticky top-0 h-screen">
        <Link to="/" className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">P</span>
          </div>
          <span className="font-bold font-serif">Perspective</span>
        </Link>

        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Admin</p>
        <NavLink to="/admin" end className={navClass}>
          <LayoutDashboard className="w-4 h-4" /> Inicio
        </NavLink>
        <NavLink to="/admin/articles" className={navClass}>
          <FileText className="w-4 h-4" /> Artículos
        </NavLink>
        <NavLink to="/admin/authors" className={navClass}>
          <Users className="w-4 h-4" /> Autores
        </NavLink>
        <NavLink to="/admin/categories" className={navClass}>
          <Tag className="w-4 h-4" /> Categorías
        </NavLink>
        <NavLink to="/admin/subscribers" className={navClass}>
          <Mail className="w-4 h-4" /> Suscriptores
        </NavLink>

        <div className="mt-auto space-y-2 pt-6 border-t border-border">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ExternalLink className="w-4 h-4" /> Ver sitio
          </Link>
          <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4" /> Cerrar sesión
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
