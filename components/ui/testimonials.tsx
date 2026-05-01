import { Card, CardContent } from "@/components/ui/card";

type EngagementItem = {
  step: string;
  title: string;
  text: string;
};

type EngagementTestimonialsProps = {
  title: string;
  items: EngagementItem[];
};

export default function EngagementTestimonials({
  title,
  items,
}: EngagementTestimonialsProps) {
  const [featured, ...supporting] = items;

  return (
    <section className="engagement-testimonials">
      <div className="engagement-testimonials__intro">
        <h2>{title}</h2>
      </div>

      <div className="engagement-testimonials__grid">
        {featured ? (
          <Card className="engagement-testimonials__card engagement-testimonials__card--featured">
            <CardContent>
              <blockquote>
                <p>{featured.text}</p>
                <div className="engagement-testimonials__meta">
                  <div>
                    <cite>{featured.title}</cite>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        ) : null}

        {supporting.map((item) => (
          <Card className="engagement-testimonials__card" key={item.step}>
            <CardContent>
              <blockquote>
                <p>{item.text}</p>
                <div className="engagement-testimonials__meta">
                  <div>
                    <cite>{item.title}</cite>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
