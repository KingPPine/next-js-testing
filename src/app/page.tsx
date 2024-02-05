import Link from "next/link"

export default function home() {
    return (
        <>
            <h1>Home Page</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </>
    )
}
