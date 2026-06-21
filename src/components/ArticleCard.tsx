import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  size?: "small" | "large";
  index?: string | number;
}

const ArticleCard = ({ slug, title, category, date, image, size = "small", index }: ArticleCardProps) => {
  const getCategoryClass = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("financ")) return "tag-financing";
    if (normalized.includes("estilo") || normalized.includes("lifestyle")) return "tag-lifestyle";
    if (normalized.includes("comunidad") || normalized.includes("community")) return "tag-community";
    if (normalized.includes("bienestar") || normalized.includes("wellness")) return "tag-wellness";
    if (normalized.includes("viaje") || normalized.includes("travel")) return "tag-travel";
    if (normalized.includes("creativ")) return "tag-creativity";
    if (normalized.includes("crecimiento") || normalized.includes("growth")) return "tag-growth";
    return "tag-lifestyle";
  };

  return (
    <Link
      to={`/article/${slug}`}
      className={`group relative block rounded-[2.5rem] overflow-hidden card-hover ${
        size === "large" ? "col-span-1 md:col-span-2 row-span-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-[2.5rem]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className={`px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md ${getCategoryClass(category)} bg-opacity-80`}>
              {category}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white border border-white/30">
              {date}
            </span>
          </div>
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              {index !== undefined && (
                <span className="text-white/50 text-xs font-medium tracking-wider block mb-3">{index}</span>
              )}
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl leading-tight tracking-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 floating-button">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
