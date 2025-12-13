"use client";
import missions from "@/data/missions";
import useGsapReveal from "@/hooks/useGsapReveal";
import Image from "next/image";
import { useRef } from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function MissionSection() {
	const sectionRef = useRef(null);
	useGsapReveal(sectionRef);

	return (
		<section
			ref={sectionRef}
			className="animation-section py-12 lg:py-[120px] bg-surface"
			id="about"
		>
			<Container>
				<div className="reveal-other">
					<SectionTitle
						toptitle="Our Mission & Company"
						title="Your strategic growth partner"
						subtitle="At NORMORA, we help founders scale without distraction. We provide deep financial and data insights so you can focus on growing your business ।"
						variant="light"
					/>
				</div>

				<div className="reveal-card grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
					{missions.map((mission, index) => {
						const marginMap = [
							"",
							"xl:translate-y-10",
							"xl:translate-y-20",
							"xl:translate-y-30",
						];

						return (
							<div
								key={mission.id}
								className={`bg-white rounded-xl border border-[#D8DEE2] p-6 hover:shadow-lg transition ${marginMap[index]}`}
							>
								<Image
									src={mission.img}
									alt={mission.title}
									width={100}
									height={100}
									className="mb-6 lg:w-12 lg:h-12 w-8 h-8"
								/>
								<h3 className="text-xl sm:text-2xl font-semibold text-display">
									{mission.title}
								</h3>
								<p className="text-body lg:text-base text-sm mt-4">{mission.description}</p>
							</div>
						);
					})}
				</div>

				<div className="reveal-card bg-white rounded-xl border border-[#D8DEE2] flex flex-wrap lg:flex-nowrap lg:content-start content-center items-center lg:text-left text-center p-4 lg:p-6 mt-6 xl:mt-36">
					<div className="w-full lg:w-[564px] mb-1 lg:mb-0">
						<Image
							src="./trust-desktop.svg"
							alt="Trustworthy image"
							width={100}
							height={100}
							className="hidden lg:block w-full"
						/>
						<Image
							src="./mobile-trust.svg"
							alt="Trustworthy image"
							width={80}
							height={80}
							className="lg:hidden mx-auto"
						/>
					</div>
					<div className="flex-1 lg:pl-6">
						<h6 className="font-bold">Trustworthy:</h6>
						<div className="hidden lg:block">
							<p className="max-w-lg lg:mx-0 mx-auto">
								You can rely on us for accurate insights and guidance.
							</p>
							<p className="lg:max-w-2xl lg:mx-0 mx-auto">
								Analytical: We turn complex data into actionable strategies.
								Growth-Oriented: Your success drives ours.
							</p>
						</div>
						<p className="lg:hidden lg:mx-0 mx-auto text-sm max-w-[282px]">You can rely on us for accurate insights and guidance. Analytical: We turn complex data into actionable strategies. Growth-Oriented: Your success drives ours.</p>
					</div>
				</div>

				<div className="reveal-card flex flex-wrap items-center justify-center gap-4 mt-8">
					<Button
						as="a"
						type="primary"
						href="#contact"
						className="grow sm:flex-none"
					>
						Let's Grow Together
					</Button>

					<Button
						as="a"
						type="outline"
						href="#contact"
						className="grow sm:flex-none"
					>
						<Image
							src="/video-icon.svg"
							width={20}
							height={20}
							alt="icon"
						/>
						Book a 15-minute Call
					</Button>
				</div>
			</Container>
		</section>
	);
}
