import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="/shop"
      className="text-start  flex items-center mt-10 gap-x-4 text-2xl text-gray-400 mb-10"
    >
      <span className="icon-[mdi--arrow-collapse-left]" />
      Menú
    </Link>
  );
}
