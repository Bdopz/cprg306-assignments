import Link from "next/link";

export default function Home() {
  return (
    <main>

    <h1 className="m-2">CPRG 306: Web Development 2 - Assignments</h1>
    <ul className="m-2">
      <li>
        <Link href="/week-2">Week 2</Link>
      </li>
      <li>
        <Link href="/week-3">Week 3</Link>
      </li>
    </ul>

    </main>
  );
}
