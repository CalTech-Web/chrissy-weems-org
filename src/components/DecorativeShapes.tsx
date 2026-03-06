export function BlobShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M45.2,-62.4C57.3,-52.2,65,-36.5,69.4,-19.9C73.8,-3.3,74.9,14.2,68.5,28.3C62.1,42.4,48.2,53.1,33.3,60.3C18.4,67.5,2.5,71.2,-14.3,69.6C-31.1,68,-48.8,61.1,-59.4,48.5C-70,35.9,-73.5,17.5,-72.1,0.8C-70.7,-15.9,-64.4,-31.2,-53.5,-41.5C-42.6,-51.8,-27.1,-57.1,-11.1,-58.4C4.9,-59.7,33.1,-72.6,45.2,-62.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function SparkleDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z"
      />
    </svg>
  );
}

export function WaveSeparator({
  className,
  flip,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z"
      />
    </svg>
  );
}

export function DiagonalCut({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <polygon fill="currentColor" points="0,80 1440,0 1440,80" />
    </svg>
  );
}

export function FloatingRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
