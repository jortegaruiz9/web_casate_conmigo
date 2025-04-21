import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="bg-myZinc flex flex-col overflow-hidden shadow-md transition hover:scale-[1.01]">
      <Link href={`/articulos/${post.slug}`} className="flex flex-col h-full">
        {/* Etiqueta */}
        <div className="absolute mt-3 ml-3 z-10">
          <span className="bg-white text-xs font-semibold px-3 py-1 shadow">
            {post.label}
          </span>
        </div>

        {/* Imagen */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={post.img}
            alt={post.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-between h-full p-4 space-y-2">
          <div>
            {post.age && (
              <h4 className="text-sm text-zinc-400 mb-1">{post.age}</h4>
            )}
            <h2 className="text-white font-semibold text-base leading-tight line-clamp-2">
              {post.title}
            </h2>
            <p className="text-neutral-400 text-sm line-clamp-3">{post.text}</p>
          </div>

          {/* Botón */}
          <div className="pt-2 flex justify-end">
            <span className="inline-block bg-white text-black px-3 py-1  text-sm font-medium hover:bg-myZinc hover:text-white transition">
              Ver artículo completo
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
