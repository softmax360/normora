import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import Image from "next/image";

const missions = [
  {
    id: 1,
    img: "/mission-1.svg",
    title: "Strategic Growth Partnership",
    description:
      "NORMORA is a family-owned company dedicated to being your long-term strategic partner. We focus on leveraging our deep expertise to ensure your business achieves sustainable growth and profitability.",
  },
  {
    id: 2,
    img: "/mission-2.svg",
    title: "Financial Expertise & Clarity",
    description:
      "We provide the necessary financial expertise to give founders the clarity needed for making informed strategic decisions. Our goal is to relieve you from the operational burden of finance.",
  },
  {
    id: 3,
    img: "/mission-3.svg",
    title: "Data-Driven Insights",
    description: "We move beyond basic reporting by leveraging data-driven insights to fuel your expansion. We turn complex data into actionable strategies, helping you discover new growth opportunities.",
  },
  {
    id: 4,
    img: "/mission-4.svg",
    title: "Finance + Technology Integration",
    description:
      "Our unique approach combines finance knowledge, analytics, and technology. This integration provides you with on-demand CFO and Chief Analytics Officer support, without the full-time headcount.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-12 lg:py-[120px] bg-surface">
      <Container>
        <SectionTitle
          toptitle="Our Mission & Company"
          title="Your strategic growth partner"
          subtitle="At NORMORA, we help founders scale without distraction. We provide deep financial and data insights so you can focus on growing your business ।"
          variant="light"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {missions.map((mission, index) => {
            const marginClasses = index === 1 ? "xl:translate-y-10" : index === 2 ? "xl:translate-y-20" : index === 3 ? "xl:translate-y-30" : "";

            return (
              <div
                key={mission.id}
                className={`bg-white rounded-xl border border-[#D8DEE2] p-6 hover:shadow-lg transition ${marginClasses}`}
              >
                <Image
                  src={mission.img}
                  alt={mission.title}
                  width={48}
                  height={48}
                  className="mb-6"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-display">
                  {mission.title}
                </h3>
                <p className="text-body mt-4">
                  {mission.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-xl border border-[#D8DEE2] text-center flex flex-col items-center p-6 mt-6 xl:mt-36">
          <Image
            src="./trust.svg"
            alt="Trustworthy image"
            width={90}
            height={122}
            className="mb-6 hidden md:block"
          />
          <Image
            src="./mobile-trust.svg"
            alt="Trustworthy image"
            width={80}
            height={80}
            className="mb-6 md:hidden"
          />
          <h6 className="font-bold">Trustworthy:</h6>
          <p className="max-w-lg mx-auto">You can rely on us for accurate insights and guidance.</p>
          <p className="max-w-xl mx-auto">Analytical: We turn complex data into actionable strategies. Growth-Oriented: Your success drives ours.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button as="a" type="primary" href="#contact" className="grow sm:flex-none">
            Let's Grow Together
          </Button>

          <Button as="a" type="outline" href="#contact" className="grow sm:flex-none">
            <Image src="/video-icon.svg" width={20} height={20} alt="icon" />
            Book a 15-minute Call
          </Button>
        </div>
      </Container>
    </section>
  );
}
