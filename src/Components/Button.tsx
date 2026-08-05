type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  };
  
  export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
  }: ButtonProps) {
    const styles =
      variant === "primary"
        ? "bg-orange-500 hover:bg-orange-600 text-white"
        : "border border-slate-700 hover:border-orange-500 text-white";
  
    if (href) {
      return (
        <a
          href={href}
          className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${styles}`}
        >
          {children}
        </a>
      );
    }
  
    return (
      <button
        onClick={onClick}
        className={`rounded-xl px-6 py-3 font-semibold transition ${styles}`}
      >
        {children}
      </button>
    );
  }