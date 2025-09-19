export default function Figure({
  src,
  alt,
  caption
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="not-prose my-8">
      <img 
        src={src} 
        alt={alt} 
        className="w-full rounded-xl shadow-md object-cover" 
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}