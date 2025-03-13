import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  to?: string;
  external?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  to,
  external,
  className = "",
  ...props
}: ButtonProps) => {
  // Classes de base
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

  // Classes selon la variante
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-opacity-90 focus:ring-primary",
    secondary:
      "bg-secondary text-text-dark hover:bg-opacity-90 focus:ring-secondary",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  // Classes selon la taille
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Classe pour largeur complète
  const widthClass = fullWidth ? "w-full" : "";

  // Concaténation des classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  // Si un lien est fourni, renvoyer un composant Link
  if (to) {
    if (external) {
      return (
        <a
          href={to}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Sinon, renvoyer un bouton standard
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
