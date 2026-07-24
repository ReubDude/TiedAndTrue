import Image from "next/image";
import { ClosingCta, PageIntro } from "../components";

const values = [
  {
    title: "Thoughtfully Designed",
    body: "Every palette, proportion, and finishing touch is chosen to make the whole room feel special.",
  },
  {
    title: "Easy From Start to Finish",
    body: "Clear communication, thoughtful planning, and a process designed to take one big thing off your plate.",
  },
  {
    title: "Celebrations of Every Size",
    body: "From a sweet pickup bouquet to a full-scale installation, the same care goes into every celebration.",
  },
];

const facts = [
  "Oak Cliff based",
  "Serving DFW",
  "Mom of two girls",
  "Runs on coffee",
  "Birthday party enthusiast",
  "Never leaves Target with one thing",
];

export const metadata = {
  title: "Meet Nicole",
  description:
    "Meet Nicole, the balloon-loving creator behind Tied & True Balloons in Oak Cliff.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Tied & True"
        title="Meet Nicole"
        body="The balloon-loving creator behind Tied & True—and your biggest cheerleader when it comes to celebrating life’s special moments."
        tone="blue"
      />

      <section className="about-story">
        <div className="about-art">
          <Image
            alt="Tied and True balloon lettering in butter yellow on a blue background"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 45vw"
            src="/brand/logo-blue.jpg"
          />
          <span className="about-caption">Oak Cliff made • Party approved</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Hi, I&apos;m Nicole</p>
          <h2>Beautiful balloons. Less stress. More celebrating.</h2>
          <p>
            What started as a few balloon requests from friends and family quickly
            snowballed into a full-fledged creative obsession. Turns out, I really
            love transforming ordinary spaces into celebrations.
          </p>
          <p>
            As an Oak Cliff mom of two girls, I know firsthand how much goes into
            planning birthdays, school events, baby showers, and all the moments
            worth celebrating. That&apos;s why my goal is simple: create beautiful
            balloon designs while making the process easy, stress-free, and
            actually fun.
          </p>
          <p>
            Whether it&apos;s a playful birthday party, a school event, a baby shower,
            or a polished corporate installation, I love creating designs that
            become part of the memories people take home.
          </p>
          <blockquote>
            “It&apos;s not really about the balloons—it&apos;s about how they make people
            feel.”
          </blockquote>
        </div>
      </section>

      <section className="values-section">
        <div className="section-heading">
          <p className="eyebrow">Why Tied &amp; True</p>
          <h2>Good design, good energy, and a genuine love of the moment.</h2>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <article key={value.title}>
              <span>0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="facts-section">
        <p className="eyebrow">A few fun facts</p>
        <div className="facts-cloud">
          {facts.map((fact, index) => (
            <span className={`fact fact-${(index % 4) + 1}`} key={fact}>
              {fact}
            </span>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
