import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>TOP PAGE</h1>
      <div>
        <Link href='/customer'>会員ページ</Link>
      </div>
    </main>
  );
}
