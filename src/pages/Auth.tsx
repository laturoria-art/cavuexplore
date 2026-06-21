import { useState, FormEvent, useEffect } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const Auth = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { session } = useAuth();
  const redirect = params.get("redirect") ?? "/admin";

  useEffect(() => {
    if (session) navigate(redirect, { replace: true });
  }, [session, navigate, redirect]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}${redirect}`,
          data: { full_name: fullName },
        },
      });
      setLoading(false);
      if (error) return toast.error(error.message);
      toast.success("¡Cuenta creada! Iniciando sesión…");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) return toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold font-serif">Perspective</span>
          </Link>
          <h1 className="text-3xl font-semibold mb-2">
            {mode === "signin" ? "Inicia sesión" : "Crea tu cuenta"}
          </h1>
          <p className="text-muted-foreground">
            {mode === "signin" ? "Accede al panel de administración." : "El primer usuario registrado se convierte en administrador."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-card p-8 rounded-2xl">
          {mode === "signup" && (
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-2">Correo</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contraseña</label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-60"
          >
            {loading ? "Procesando…" : mode === "signin" ? "Entrar" : "Crear cuenta"}
          </button>
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="w-full text-sm text-muted-foreground hover:text-foreground"
          >
            {mode === "signin" ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </button>
        </form>

        <Link to="/" className="block text-center text-sm text-muted-foreground hover:text-foreground">
          ← Volver al sitio
        </Link>
      </div>
    </div>
  );
};

export default Auth;
