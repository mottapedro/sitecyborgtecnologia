import {
  ContactCta,
  EcosystemOverview,
  EngineeringPhilosophy,
  FeaturedProjects,
  Hero,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EcosystemOverview />
      <FeaturedProjects />
      <EngineeringPhilosophy />
      <ContactCta />
    </>
  );
}
