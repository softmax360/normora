"use client";
import useGsapReveal from "@/hooks/useGsapReveal";
import Image from "next/image";
import { useRef } from "react";
import Button from "../common/Button";
import Container from "../common/Container";

export default function Contact() {
	const sectionRef = useRef(null);
	useGsapReveal(sectionRef);

	return (
		<section
			ref={sectionRef}
			className="py-12 lg:py-[80px] bg-white relative"
		>
			<Container>
				<div className="reveal-other mb-12">
					<span className="inline-block py-2 px-4 rounded-3xl leading-none text-gray-600 bg-surface mb-6 font-medium">
						Contact Form
					</span>
					<h1 className="text-4xl lg:text-4xl font-semibold text-display mb-10">
						Let's Talk Growth
					</h1>
				</div>

				<div className="grid lg:grid-cols-12 gap-12">
					<div className="lg:col-span-7 reveal-card">
						<div className="flex flex-wrap justify-between gap-8 text-sm font-medium text-body pb-5">
							<div className="flex items-center gap-2">
								<Image
									src="/clock.svg"
									alt="Clock"
									width={20}
									height={20}
								/>
								~2h Responses
							</div>
							<div className="flex items-center gap-2">
								<Image
									src="/headphone.svg"
									alt="Headphone"
									width={20}
									height={20}
								/>
								24/7 Support
							</div>
						</div>
						<div className="space-y-6 p-6 rounded-lg border border-[#D8DEE2]">
							<h3 className="text-lg font-semibold text-display">
								Send us a message.
							</h3>

							<form className="space-y-6">
								<div className="space-y-2">
									<label className="text-sm lg:text-base font-medium text-[#040813] opacity-[0.8] inline-block mb-2">
										Name *
									</label>
									<input
										type="text"
										placeholder="Enter Full Name"
										className="w-full px-4 py-3 rounded-lg bg-[#F9FAFB] border border-[#E7E9EF] focus:outline-none focus:border-primary transition-colors text-body"
									/>
								</div>

								<div className="space-y-2">
									<label className="text-sm lg:text-base font-medium text-[#040813] opacity-[0.8] inline-block mb-2">
										Email *
									</label>
									<input
										type="email"
										placeholder="Enter Email Address"
										className="w-full px-4 py-3 rounded-lg bg-[#F9FAFB] border border-[#E7E9EF] focus:outline-none focus:border-primary transition-colors text-body"
									/>
								</div>

								<div className="space-y-2">
									<label className="text-sm lg:text-base font-medium text-[#040813] opacity-[0.8] inline-block mb-2">
										Company
									</label>
									<input
										type="text"
										placeholder="Enter Company Name"
										className="w-full px-4 py-3 rounded-lg bg-[#F9FAFB] border border-[#E7E9EF] focus:outline-none focus:border-primary transition-colors text-body"
									/>
								</div>

								<div className="space-y-2">
									<label className="text-sm lg:text-base font-medium text-[#040813] opacity-[0.8] inline-block mb-2">
										Company Stage
									</label>
									<div className="relative">
										<select className="w-full px-4 py-3 rounded-lg bg-[#F9FAFB] border border-[#E7E9EF] focus:outline-none focus:border-primary transition-colors text-body appearance-none cursor-pointer">
											<option value="" disabled>
												Select Here
											</option>
											<option value="seed">Seed</option>
											<option value="series-a">Series A</option>
											<option value="growth">Growth</option>
											<option value="corporate">Corporate</option>
										</select>
										<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
											▼
										</div>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-sm lg:text-base font-medium text-[#040813] opacity-[0.8] inline-block mb-2">
										Message *
									</label>
									<textarea
										rows="5"
										placeholder="Enter Your Message..."
										className="w-full px-4 py-3 rounded-lg bg-[#F9FAFB] border border-[#E7E9EF] focus:outline-none focus:border-primary transition-colors text-body resize-none"
									></textarea>
								</div>

								<Button
									type="primary"
									className="w-full justify-center"
								>
									Send message
								</Button>
							</form>
						</div>
					</div>

					<div className="lg:col-span-5 reveal-card">
						<div className="bg-white rounded-2xl border border-[#D8DEE2] p-8 h-full flex flex-col">
							<ul className="space-y-6 mb-8">
								<li className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-lg border border-[#E7E9EF] bg-[#F9FAFB] flex items-center justify-center text-display shrink-0">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											></path>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											></path>
										</svg>
									</div>
									<div>
										<h4 className="lg:text-lg text-body">
											Antwerp, Belgium
										</h4>
									</div>
								</li>
								<li className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-lg border border-[#E7E9EF] bg-[#F9FAFB] flex items-center justify-center text-display shrink-0">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											></path>
										</svg>
									</div>
									<div>
										<h4 className="lg:text-lg text-body">
											Hello@Normora.Com
										</h4>
									</div>
								</li>
								<li className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-lg border border-[#E7E9EF] bg-[#F9FAFB] flex items-center justify-center text-display shrink-0">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											></path>
										</svg>
									</div>
									<div>
										<h4 className="lg:text-lg text-body">
											+32 4XX XXX XXX
										</h4>
									</div>
								</li>
							</ul>

							<div className="flex gap-4 mb-8">
								<a
									href="#"
									className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-body hover:bg-primary hover:text-white hover:border-primary transition-colors"
								>
									<svg
										className="w-4 h-4"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</a>
								<a
									href="#"
									className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-body hover:bg-primary hover:text-white hover:border-primary transition-colors"
								>
									<svg
										className="w-4 h-4"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
									</svg>
								</a>
								<a
									href="#"
									className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-body hover:bg-primary hover:text-white hover:border-primary transition-colors"
								>
									<svg
										className="w-4 h-4"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
									</svg>
								</a>
							</div>

							<div className="w-full lg:h-[480px] bg-gray-200 rounded-xl overflow-hidden relative">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34606.33385759714!2d4.385055460596954!3d51.2211915993952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f68ebfc3887d%3A0x3eaf448482a88ab8!2sAntwerp%2C%20Belgium!5e0!3m2!1sen!2sus!4v1709669543123!5m2!1sen!2sus"
									width="100%"
									height="100%"
									style={{
										border: 0,
										filter: "grayscale(100%) contrast(1.2)",
									}}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
