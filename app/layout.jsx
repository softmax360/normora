import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

export const metadata = {
	title: "Normora SaaS Landing Page",
	description: "Normora Modern SaaS app built with Next.js",
};

// className={`${geistSans.variable}`}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body suppressHydrationWarning>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
