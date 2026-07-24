import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/book", label: "Book" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Tied and True home">
        <span>Tied</span>
        <span className="wordmark-amp">&amp;</span>
        <span>True</span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="button button-small desktop-quote" href="/book">
        Request a quote
      </Link>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-burst" aria-hidden="true">
        <span>CELEBRATE</span>
      </div>
      <div className="footer-grid">
        <div>
          <Link className="wordmark wordmark-light" href="/">
            <span>Tied</span>
            <span className="wordmark-amp">&amp;</span>
            <span>True</span>
          </Link>
          <p>Thoughtfully designed balloon décor for moments worth celebrating.</p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow">Local love</p>
          <p>Oak Cliff based</p>
          <p>Serving Dallas–Fort Worth</p>
          <Link className="text-link light-link" href="/book">
            Start planning <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tied &amp; True Balloons</span>
        <span>Made for good times.</span>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  body,
  tone = "cream",
}: {
  eyebrow: string;
  title: string;
  body: string;
  tone?: "cream" | "pink" | "blue" | "yellow";
}) {
  return (
    <section className={`page-intro tone-${tone}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro-copy">{body}</p>
      <span className="floating-dot dot-one" aria-hidden="true" />
      <span className="floating-dot dot-two" aria-hidden="true" />
    </section>
  );
}

export function ClosingCta({
  title = "Let’s Create Something Worth Celebrating",
  body = "Tell us what you’re dreaming up. We’ll bring the color, the creativity, and the wow.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="closing-cta">
      <div className="closing-copy">
        <p className="eyebrow">Your party starts here</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link className="button button-dark" href="/book">
          Request a quote <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="closing-art">
        <Image
          alt="Tied and True balloon lettering"
          fill
          sizes="(max-width: 800px) 100vw, 45vw"
          src="/brand/logo-pink.jpg"
        />
      </div>
    </section>
  );
}
