type CardProps = {
    title: string;
    description: string;
    link: string;
    color?: string;
  };
  
  const COLORS:any = {
    green: {
      bg: "bg-green-900/5 border border-green-700/5 hover:border-green-500/60 hover:shadow-green-500/30",
      text: "text-green-400",
      link: "text-green-500 hover:text-green-400",
    },
    orange: {
      bg: "bg-violet-900/5 border border-violet-700/5 hover:border-violet-500/60 hover:shadow-violet-500/30",
      text: "text-violet-600",
      link: "text-violet-500 hover:text-violet-400",
    },
  };
  
  const Card = ({ title, description, link, color = "green" }: CardProps) => {
    const styles = COLORS[color] || COLORS.green;
  
    return (
      <div className={`w-80 h-auto rounded-lg shadow-lg p-6 transition-all duration-300 backdrop-blur-md ${styles.bg}`}>
        <h2 className={`text-2xl font-bold tracking-wide mb-3 ${styles.text}`}>{title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={`font-semibold ${styles.link}`}>
          Link
        </a>
      </div>
    );
  };
  
  
  export default Card;
  