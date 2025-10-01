// Import Next.js Head component to manage the document head (title, meta tags)
import Head from 'next/head';
// Import the page Layout (default export) and a named export `siteTitle` used for the document title
import Layout, { siteTitle } from '../components/layout';
// Import CSS module to apply scoped styles
import utilStyles from '../styles/utils.module.css';
 
// Default-exported React page component; Next.js treats this as the root page "/"
export default function Home() {
  // Function body returns JSX that defines the home page layout
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Teda. I'm a Computer Science student at Santa Rosa Junior college.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}