interface EmbedFrameProps {
  src: string;
  title: string;
  height?: number;
}

export default function EmbedFrame({ src, title, height = 600 }: EmbedFrameProps) {
  return (
    <div className="overflow-hidden rounded border border-border transition-all hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
      <iframe
        src={src}
        title={title}
        width="100%"
        className="h-[400px] sm:h-[500px] md:h-[600px]"
        style={{ border: "none" }}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
