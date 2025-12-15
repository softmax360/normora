import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import JsonLdBreadcrumb from "@/components/seo/JsonLdBreadcrumb";

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", item: "https://normora.com" },
    { name: "Contact", item: "https://normora.com/contact" },
  ];

  return (
    <>
      <JsonLdBreadcrumb breadcrumbs={breadcrumbs} />
      <Contact />
      <FAQ />
    </>
  );
}
