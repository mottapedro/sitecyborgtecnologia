import {
  ContactCta,
  EcosystemOverview,
  EngineeringPhilosophy,
  EngineeringSequence,
  FeaturedProjects,
  Hero,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EngineeringSequence />
      <EcosystemOverview />
      <FeaturedProjects />
      <EngineeringPhilosophy />
      <ContactCta />
    </>
  );
}
