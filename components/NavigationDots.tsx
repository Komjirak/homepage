interface NavigationDotsProps {
  total: number;
  active: number;
  onNavigate: (index: number) => void;
}

export const NavigationDots = ({ total, active, onNavigate }: NavigationDotsProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className={`nav-dot ${i === active ? "nav-dot-active" : "nav-dot-inactive"}`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
};
