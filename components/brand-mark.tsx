type BrandMarkProps = {
  className?: string;
  withWordmark?: boolean;
  compact?: boolean;
};

export function BrandMark({ className = "", withWordmark = true, compact = false }: BrandMarkProps) {
  return (
    <div className={`brand-lockup${compact ? " brand-lockup--compact" : ""} ${className}`.trim()}>
      <svg
        aria-hidden="true"
        className="brand-lockup__icon"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="brand-lockup__network" stroke="currentColor" strokeWidth="1.8">
          <path d="M32 6 52 17.5v29L32 58 12 46.5v-29L32 6Z" />
          <path d="M32 16 43 22.5v19L32 48 21 41.5v-19L32 16Z" />
          <path d="M32 6v10M52 17.5l-9 5M52 46.5l-9-5M32 58V48M12 46.5l9-5M12 17.5l9 5" />
          <circle cx="32" cy="6" r="2.6" fill="currentColor" />
          <circle cx="52" cy="17.5" r="2.6" fill="currentColor" />
          <circle cx="52" cy="46.5" r="2.6" fill="currentColor" />
          <circle cx="32" cy="58" r="2.6" fill="currentColor" />
          <circle cx="12" cy="46.5" r="2.6" fill="currentColor" />
          <circle cx="12" cy="17.5" r="2.6" fill="currentColor" />
          <circle cx="32" cy="16" r="2.2" fill="currentColor" />
          <circle cx="43" cy="22.5" r="2.2" fill="currentColor" />
          <circle cx="43" cy="41.5" r="2.2" fill="currentColor" />
          <circle cx="32" cy="48" r="2.2" fill="currentColor" />
          <circle cx="21" cy="41.5" r="2.2" fill="currentColor" />
          <circle cx="21" cy="22.5" r="2.2" fill="currentColor" />
        </g>
        <path
          className="brand-lockup__initial"
          d="M29.4 18.5h5.2v4.1h-1.5v18.8h1.5v4.1h-5.2v-4.1h1.5V22.6h-1.5v-4.1Z"
        />
        <path className="brand-lockup__initial-stroke" d="M26 18.5h12" strokeWidth="1.8" />
        <path className="brand-lockup__initial-stroke" d="M26 45.5h12" strokeWidth="1.8" />
      </svg>
      {withWordmark ? (
        <div className="brand-lockup__wordmark">
          <strong>INTELLIGENCIA</strong>
          <span>Technology Consulting & Management</span>
        </div>
      ) : null}
    </div>
  );
}
