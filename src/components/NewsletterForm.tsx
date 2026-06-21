import { useState, FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Props {
  source?: string;
  variant?: "rounded" | "stacked";
}

const NewsletterForm = ({ source = "site", variant = "rounded" }: Props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const { error } = await supabase
      .from("subscribers")
      .insert({ email: email.trim().toLowerCase(), source });
    setLoading(false);
    if (error) {
      if (error.code === "23505") toast.error("Ese correo ya está suscrito.");
      else toast.error("No pudimos suscribirte. Revisa el correo.");
      return;
    }
    toast.success("¡Gracias por suscribirte!");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-4 ${
        variant === "rounded" ? "max-w-md mx-auto" : "max-w-md mx-auto"
      }`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu correo electrónico"
        className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all disabled:opacity-60 disabled:hover:scale-100"
      >
        {loading ? "Enviando..." : "Suscribirme"}
      </button>
    </form>
  );
};

export default NewsletterForm;
