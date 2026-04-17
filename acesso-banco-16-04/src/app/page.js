'use-client'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="livros">Livros</Link>
      <Link href="editoras">Editora</Link>
    </>
  );
}
