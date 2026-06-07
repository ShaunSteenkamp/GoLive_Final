import floralBorder from "@/assets/floral-border-bottom.png";

interface FloralDividerProps {
  className?: string;
  flip?: boolean;
}

const FloralDivider = ({ className = "", flip = false }: FloralDividerProps) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img
        src={floralBorder}
        alt="Floral divider with Cape fynbos flowers"
        className={`w-full h-auto max-h-24 object-contain ${flip ? "scale-y-[-1]" : ""}`}
        loading="lazy"
      />
    </div>
  );
};

export default FloralDivider;
