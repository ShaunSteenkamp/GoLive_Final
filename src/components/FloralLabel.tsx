interface FloralLabelProps {
  name: string;
  scientificName: string;
  imageSrc: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-40 h-40",
  lg: "w-56 h-56",
};

const FloralLabel = ({ name, scientificName, imageSrc, className = "", size = "md" }: FloralLabelProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src={imageSrc}
        alt={`${name} — ${scientificName}`}
        className={`${sizeClasses[size]} object-contain`}
        loading="lazy"
      />
      <p className="font-script text-sm text-muted-foreground mt-1">{scientificName}</p>
    </div>
  );
};

export default FloralLabel;
