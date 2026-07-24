import { PageIntro } from "../components";

const steps = [
  "We review your inquiry.",
  "We create your custom proposal.",
  "We confirm your date.",
  "We bring your celebration to life.",
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "The sooner, the better, especially for weekends and larger installations. Share your date even if you’re still deciding on the details.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "Tied & True is based in Oak Cliff and serves celebrations throughout the Dallas–Fort Worth area.",
  },
  {
    question: "Can balloons be installed outdoors?",
    answer:
      "Sometimes. Heat, wind, rain, and direct sun can all affect balloons, so outdoor plans are reviewed case by case with a weather backup in mind.",
  },
  {
    question: "How do payment and cancellations work?",
    answer:
      "Your custom proposal will include the retainer, payment schedule, and cancellation details for your project.",
  },
];

export const metadata = {
  title: "Book",
  description:
    "Tell Tied & True about your Dallas–Fort Worth celebration and request a custom balloon décor proposal.",
};

export default function BookPage() {
  return (
    <>
      <PageIntro
        eyebrow="Request a quote"
        title="Let’s Start Planning Your Celebration"
        body="Tell us about your event and we’ll create a custom proposal just for you."
        tone="pink"
      />

      <section className="inquiry-section">
        <div className="inquiry-copy">
          <p className="eyebrow">The good stuff starts here</p>
          <h2>Give us the details. We’ll bring the delight.</h2>
          <p>
            Inspiration photos and half-formed ideas are both welcome. Share what
            you know, skip what you don&apos;t, and we&apos;ll help shape the rest.
          </p>
          <div className="availability-note">
            <span aria-hidden="true">✦</span>
            <p>
              <strong>Planning tip</strong>
              Weekend dates tend to fill first. Send your inquiry as soon as your
              date is set.
            </p>
          </div>
        </div>

        <form className="inquiry-form">
          <label>
            Name <span>*</span>
            <input name="name" placeholder="Your name" required type="text" />
          </label>
          <label>
            Email <span>*</span>
            <input name="email" placeholder="you@example.com" required type="email" />
          </label>
          <label>
            Phone
            <input name="phone" placeholder="(214) 555-0123" type="tel" />
          </label>
          <label>
            Event type <span>*</span>
            <select defaultValue="" name="eventType" required>
              <option disabled value="">Choose one</option>
              <option>Birthday Party</option>
              <option>Baby Shower</option>
              <option>Gender Reveal</option>
              <option>Wedding or Bridal Shower</option>
              <option>Graduation or School Event</option>
              <option>Corporate Event</option>
              <option>Grand Opening</option>
              <option>Holiday Party</option>
              <option>Something Else</option>
            </select>
          </label>
          <label>
            Event date
            <input name="date" type="date" />
          </label>
          <label>
            Venue or neighborhood
            <input name="venue" placeholder="Venue name, city, or ZIP" type="text" />
          </label>
          <label>
            Estimated décor budget
            <select defaultValue="" name="budget">
              <option disabled value="">Select a range</option>
              <option>Under $300</option>
              <option>$300–$750</option>
              <option>$750–$1,500</option>
              <option>$1,500–$3,000</option>
              <option>$3,000+</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            Color palette
            <input name="palette" placeholder="Tell us your colors" type="text" />
          </label>
          <label className="full-field">
            Inspiration link
            <input name="inspiration" placeholder="Pinterest, Instagram, or shared folder URL" type="url" />
          </label>
          <label className="full-field">
            Anything else?
            <textarea
              name="details"
              placeholder="Tell us about the space, your vision, and what would make the moment feel perfect."
              rows={6}
            />
          </label>
          <div className="form-submit full-field">
            <button className="button button-dark" disabled type="button">
              Submit inquiry
            </button>
            <p>Inquiry delivery will be connected before public launch.</p>
          </div>
        </form>
      </section>

      <section className="next-steps">
        <div>
          <p className="eyebrow">What happens next</p>
          <h2>A simple path to party-ready.</h2>
        </div>
        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="faq-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Good questions. Straight answers.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
