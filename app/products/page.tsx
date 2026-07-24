import Link from "next/link";
import { ClosingCta, PageIntro } from "../components";

const celebrations = [
  "Birthday Parties",
  "Baby Showers",
  "Gender Reveals",
  "Weddings",
  "Graduations",
  "School Events",
  "Corporate Events",
  "Grand Openings",
  "Holiday Parties",
  "Something Else",
];

const recommendations = [
  {
    event: "Birthday",
    intro: "Playful, personal, and ready for the camera.",
    products: ["Organic Garland", "Balloon Bouquet", "Number Stack", "Balloon Backdrop", "Cake Table Accent"],
  },
  {
    event: "Baby Shower",
    intro: "Soft palettes, beautiful layers, and a sweet welcome.",
    products: ["Organic Garland", "Balloon Wall", "Welcome Sign Accent", "Centerpieces", "Backdrop Installation"],
  },
  {
    event: "School",
    intro: "High-energy spirit for stages, entrances, and big milestones.",
    products: ["Balloon Columns", "Entrance Garland", "Stage Installation", "Spirit Displays"],
  },
  {
    event: "Corporate",
    intro: "Brand-forward décor with a polished point of view.",
    products: ["Branded Columns", "Organic Installations", "Custom Vinyl Logos", "Step & Repeat Backdrops", "Grand Opening Décor"],
  },
];

const addOns = [
  "Marquee Letters",
  "Custom Vinyl",
  "Backdrops",
  "Balloon Walls",
  "LED Signs",
  "Floral Accents",
  "Fringe Walls",
  "Color Matching",
];

export const metadata = {
  title: "Products",
  description:
    "Explore custom balloon décor, grab-and-go options, and full-service installations from Tied & True.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Party pieces with presence."
        body="From grab-and-go balloon bouquets to full-scale custom installations, we offer balloon décor for celebrations of every size."
        tone="yellow"
      />

      <section className="shop-celebrations">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Shop by celebration</p>
          <h2>What are we celebrating?</h2>
        </div>
        <div className="celebration-tags">
          {celebrations.map((item, index) => (
            <Link href="/book" key={item} className={`tag tag-${(index % 4) + 1}`}>
              {item} <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="recommendations-section">
        <div className="section-heading">
          <p className="eyebrow">A little inspiration</p>
          <h2>Popular picks, sorted by party.</h2>
        </div>
        <div className="recommendations-list">
          {recommendations.map((item, index) => (
            <details key={item.event} open={index === 0}>
              <summary>
                <span>0{index + 1}</span>
                <h3>{item.event}</h3>
                <b aria-hidden="true">+</b>
              </summary>
              <div>
                <p>{item.intro}</p>
                <ul>
                  {item.products.map((product) => (
                    <li key={product}>{product}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="custom-section">
        <div>
          <p className="eyebrow">Why custom?</p>
          <h2>Made for your colors, your space, your moment.</h2>
        </div>
        <div className="custom-grid">
          {["Custom Color Palettes", "Sized for Your Space", "Designed From Scratch", "Professionally Crafted"].map(
            (item, index) => (
              <article key={item}>
                <span aria-hidden="true">{["●", "◆", "✦", "▲"][index]}</span>
                <h3>{item}</h3>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="compare-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Pickup vs. installation</p>
          <h2>Choose your kind of easy.</h2>
        </div>
        <div className="compare-grid">
          <article>
            <p className="eyebrow">Pickup &amp; DIY</p>
            <h3>Prepared by us. Styled by you.</h3>
            <ul>
              <li>Best for smaller décor</li>
              <li>Ready at your scheduled pickup time</li>
              <li>Simple setup guidance included</li>
              <li>Great for homes and intimate venues</li>
            </ul>
            <Link className="text-link" href="/book">
              Ask about pickup <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article>
            <p className="eyebrow">Full service</p>
            <h3>Designed, delivered, and installed.</h3>
            <ul>
              <li>Best for statement installations</li>
              <li>Custom proposal for your exact space</li>
              <li>Professional delivery and setup</li>
              <li>You simply show up and celebrate</li>
            </ul>
            <Link className="text-link" href="/book">
              Book an installation <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="addons-section">
        <p className="eyebrow">Popular add-ons</p>
        <h2>A little extra never hurt.</h2>
        <div>
          {addOns.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <ClosingCta
        title="Let’s Create Something Beautiful Together"
        body="Have a color palette, Pinterest board, or big idea? Send it our way."
      />
    </>
  );
}
