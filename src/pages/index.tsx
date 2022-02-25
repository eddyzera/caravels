import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello world
      <Link href={'/login'}>
        <a> login </a>
      </Link>
    </div>
  )
}
