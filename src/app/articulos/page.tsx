import { Metadata } from "next";
import { posts } from "@/app/data/posts";
import PostCard from "@/components/PostCard";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Articulos - Cásate Conmigo",
};

export default function Articulos() {
  return (
    <div className={` ${inter.className} text-black px-6`}>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-start gap-y-2 mt-10 sm:items-center sm:text-center">
          <p className="px-2 py-1 bg-zinc-200 text-xs">Todo sobre</p>
          <h1 className="font-semibold text-4xl">Anillos De Boda</h1>
          <p className="w-10/12 text-sm sm:w-10/12">
            Encontrarás artículos inspiradores para acompañarte en uno de los
            momentos más importantes de tu vida.
          </p>
        </div>
      </div>
      <div className="w-11/12">
        <h3 className="my-4 sm:hidden">Artículos:</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-0 sm:scale-75 mb-8 sm:mb-0">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
