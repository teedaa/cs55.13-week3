// Import Next.js Head component to set page-level <head> elements (title, meta tags)
import Head from 'next/head';

//Line 2: Import Link for client-side navigation between pages with prefetching and SPA-like transitions
import Link from 'next/link';

// Default-exported React page component; Next.js treats this function as the page rendered at the route "/posts/first-post"; exporting it as default makes Next.js discover and route it.
export default function FirstPost() {
  // Function body returns JSX that defines the page layout
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}