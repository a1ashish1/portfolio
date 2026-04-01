export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 sm:gap-4 my-6 sm:my-8 ${className}`}
      aria-hidden="true"
    >
      <div className="flex-1 max-w-[100px] sm:max-w-[140px] h-px bg-gradient-to-r from-transparent to-bio-gold-light/70" />
      <span className="text-bio-gold-light text-base sm:text-lg select-none">
        ❖
      </span>
      <div className="flex-1 max-w-[100px] sm:max-w-[140px] h-px bg-gradient-to-l from-transparent to-bio-gold-light/70" />
    </div>
  );
}
