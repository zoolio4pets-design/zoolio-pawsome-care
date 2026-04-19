const reviews = [
  { name: "Thandi M.", city: "Cape Town", text: "Found an amazing sitter in Sea Point in under 10 minutes. Daily photo updates made our trip stress-free.", rating: 5 },
  { name: "James P.", city: "Sandton", text: "Our golden retriever literally sprints to her sitter now. The verification process gave us total confidence.", rating: 5 },
  { name: "Aisha K.", city: "Durban North", text: "Booked a daily dog walker through Zoolio. Reliable, kind, and our Beagle has never been happier.", rating: 5 },
];

export const Testimonials = () => (
  <section className="py-20 md:py-28 bg-gradient-warm">
    <div className="container-zoolio">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Reviews</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Loved by pet parents nationwide</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <figure
            key={r.name}
            className="bg-card rounded-3xl p-7 shadow-soft hover:shadow-card transition-all animate-fade-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="flex gap-1 text-accent text-lg">
              {Array.from({ length: r.rating }).map((_, j) => <span key={j}>★</span>)}
            </div>
            <blockquote className="mt-4 font-display text-xl leading-snug text-foreground">
              "{r.text}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground font-semibold">
                {r.name[0]}
              </div>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.city}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
