import { notFound } from "next/navigation";
import { posts } from "@/app/data/posts";
import Image from "next/image";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { Metadata } from "next";
import { inter } from "@/app/ui/fonts";

// ✅ SEO: Generar OpenGraph por post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return {};

  const fullUrl = `https://www.casateconmigo.ec/articulos/${post.slug}`;
  const fullImg = `https://www.casateconmigo.ec${post.img}`;

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: fullUrl,
      type: "article",
      siteName: "Cásate Conmigo",
      images: [
        {
          url: fullImg,
          width: 1200,
          height: 630,
          alt: post.alt,
        },
      ],
      locale: "es_EC",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [fullImg],
    },
  };
}

const socialMedia = [
  { app: "icon-[uim--facebook-f]" },
  { app: "icon-[fa6-brands--whatsapp]" },
  { app: "icon-[pajamas--x]" },
  { app: "icon-[dashicons--linkedin]" },
  { app: "icon-[mdi--telegram]" },
];

export default function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const getRandomPosts = (excludeSlug: string, count: number) => {
    const filtered = posts.filter((p) => p.slug !== excludeSlug);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const shareUrl = `https://www.casateconmigo.ec/articulos/${post.slug}`;
  const shareText = encodeURIComponent(`${post.title} — ${post.summary}`);

  const shareLinks = [
    {
      name: "Facebook",
      icon: "icon-[uim--facebook-f]",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "WhatsApp",
      icon: "icon-[fa6-brands--whatsapp]",
      href: `https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "X",
      icon: "icon-[pajamas--x]",
      href: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "LinkedIn",
      icon: "icon-[dashicons--linkedin]",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Telegram",
      icon: "icon-[mdi--telegram]",
      href: `https://t.me/share/url?url=${encodeURIComponent(
        shareUrl
      )}&text=${shareText}`,
    },
  ];

  return (
    <div
      className={`${inter.className} text-black sm:max-w-screen-md sm:mx-auto`}
    >
      {/* HEADER */}
      <div className="p-6 sm:px-6 sm:py-8">
        <nav className="flex items-center text-sm text-zinc-600 mb-6">
          <Link href="/" className="hover:text-zinc-900">
            Inicio
          </Link>
          <span className="mx-2 text-zinc-400">/</span>
          <Link href="/articulos" className="hover:text-zinc-900">
            Artículos
          </Link>
          <span className="mx-2 text-zinc-400">/</span>
          <span className="text-zinc-900">{post.title}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-semibold">{post.title}</h1>
        <p className="mt-2 text-lg sm:text-md whitespace-pre-line">
          {post.summary}
        </p>
        <h6 className="mt-4 text-sm text-zinc-500">
          por <strong className="text-black">Sandra Ortega</strong>
        </h6>
        <hr className="my-6" />

        {/* Íconos para compartir */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {shareLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Compartir en ${s.name}`}
              className="w-10 h-10 border border-myZinc flex justify-center items-center rounded-full"
            >
              <span className={`${s.icon} text-2xl text-myZinc`} />
            </a>
          ))}
        </div>
      </div>

      {/* Imagen 1 */}
      <Image
        src={post.img}
        alt={post.alt}
        width={3000}
        height={2000}
        className="w-full object-cover mt-4"
      />
      <div className="p-6 sm:space-y-6">
        <p className="mb-4 font-light leading-tight">{post.descriptionImg}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Imagen 2 */}
      <Image
        src={post.img2}
        alt={post.alt}
        width={3000}
        height={2000}
        className="w-full object-cover mt-4"
      />
      <div className="p-6 sm:space-y-6">
        <p className="mb-4 font-light leading-tight">{post.descriptionImg2}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content2 }} />
      </div>

      {/* Imagen 3 */}
      <Image
        src={post.img3}
        alt={post.alt}
        width={3000}
        height={2000}
        className="w-full object-cover mt-4"
      />
      <div className="p-6 sm:space-y-6">
        <p className="mb-4 font-light leading-tight">{post.descriptionImg3}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content3 }} />

        {/* Enlaces sugeridos */}
        {post.links && post.links.length > 0 && (
          <div className="mt-6 space-y-3">
            <h5 className="font-semibold">Enlaces a modelos sugeridos:</h5>
            {post.links.map((url, i) => (
              <Link
                key={i}
                href={url}
                rel="noopener noreferrer"
                className="block underline text-blue-600 hover:text-blue-800 font-semibold"
              >
                Ranking {i + 1} de nuestro post
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <hr />
        <div className="py-6 flex flex-col items-center">
          <h5>Compartir nota:</h5>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {shareLinks.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Compartir en ${s.name}`}
                className="w-10 h-10 border border-myZinc flex justify-center items-center rounded-full"
              >
                <span className={`${s.icon} text-2xl text-myZinc`} />
              </Link>
            ))}
          </div>
        </div>
        <hr />
      </div>

      {/* Otros posts */}
      <div className="p-6">
        <h6 className="text-lg font-medium">Otros post de interés:</h6>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {getRandomPosts(post.slug, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
