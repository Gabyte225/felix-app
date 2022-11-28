import "./HeroBanner.css";

function HeroBanner({ className, children, title }) {
  return (
    <div className={className}>
      {title}
      {children}
    </div>
  );
}

export default HeroBanner;
