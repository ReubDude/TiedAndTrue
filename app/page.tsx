import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "./components";

const celebrations = [
  "Birthday Parties",
  "Baby Showers",
  "Gender Reveals",
  "Weddings",
  "Bridal Showers",
  "Graduations",
  "School Events",
  "Corporate Events",
  "Grand Openings",
  "Holiday Parties",
];

const favorites = [
  { number: "01", title: "Organic garlands", note: "Color-matched and made for your space" },
  { number: "02", title: "Balloon bouquets", note: "Small footprint, instant celebration" },
  { number: "03", title: "Statement installs", note: "Big-impact moments built from scratch" },
  { number: "04", title: "Branded displays", note: "Polished décor for schools and businesses" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Custom balloon décor • DFW</p>
          <h1>
            Making Moments <em>Worth</em> Celebrating
          </h1>
          <p className="hero-body">
            Whether you&apos;re celebrating a birthday, welcoming a new baby, hosting
            a corporate event, or planning a school celebration, Tied &amp; True
            turns ordinary spaces into unforgettable moments.
          </p>
          <div className="button-row">
            <Link className="button button-dark" href="/book">
              Request a quote <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/products">
              View our work <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="hero-note">Proudly serving Dallas–Fort Worth</p>
        </div>
        <div className="hero-art">
          <Image
            alt="Tied and True logo made from glossy pink balloon lettering"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
            src="/brand/logo-cream.jpg"
          />
          <span className="hero-sticker">Good times, tied up nicely</span>
        </div>
      </section>

      <div className="celebration-marquee" aria-label="Celebrations we decorate">
        <div>
          {[...celebrations, ...celebrations].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <b aria-hidden="true">✦</b>
            </span>
          ))}
        </div>
      </div>

      <section className="statement-section">
        <p className="eyebrow">Every celebration</p>
        <div className="statement-grid">
          <h2>Every Celebration Deserves Something Special</h2>
          <p>
            No two celebrations are exactly alike, and your balloons shouldn&apos;t be
            either. Whether you&apos;re planning something intimate or over-the-top,
            we&apos;ll create a design perfectly tailored to your event.
          </p>
        </div>
      </section>

      <section className="experience-section">
        <div className="section-heading">
          <p className="eyebrow">Choose your experience</p>
          <h2>We make the magic. You pick the pace.</h2>
        </div>
        <div className="experience-grid">
          <article className="experience-card pickup-card">
            <span className="card-number">01</span>
            <div>
              <p className="eyebrow">Pickup &amp; DIY</p>
              <h3>Grab it. Style it. Celebrate.</h3>
              <p>
                Perfect for smaller celebrations, our grab-and-go garlands,
                bouquets, and centerpieces make decorating easy.
              </p>
              <Link className="text-link" href="/products">
                Explore pickup options <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
          <article className="experience-card install-card">
            <span className="card-number">02</span>
            <div>
              <p className="eyebrow">Professional installation</p>
              <h3>You arrive. We handle the wow.</h3>
              <p>
                We&apos;ll deliver, install, and style everything, transforming your
                space while you focus on the celebration.
              </p>
              <Link className="text-link" href="/book">
                Book an installation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="favorites-section">
        <div className="favorites-intro">
          <p className="eyebrow">Party favorites</p>
          <h2>Big feeling. Beautiful details.</h2>
          <p>
            From a single number stack to a room-changing installation, each piece
            is thoughtfully designed and professionally crafted.
          </p>
          <Link className="button" href="/products">
            Explore products
          </Link>
        </div>
        <div className="favorites-list">
          {favorites.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="process-heading">
          <p className="eyebrow">How it works</p>
          <h2>From big idea to best day ever.</h2>
        </div>
        <ol className="process-list">
          <li>
            <span>1</span>
            <div>
              <h3>Tell us about your event</h3>
              <p>Share your date, location, inspiration, and vision.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h3>We&apos;ll create something beautiful</h3>
              <p>Receive a custom design and personalized proposal.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <h3>Celebrate</h3>
              <p>We handle the details so you can make the memories.</p>
            </div>
          </li>
        </ol>
      </section>

      <ClosingCta />
    </>
  );
}
