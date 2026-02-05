import React from "react";

import { SanityAboutSection } from "./components/sanity-about-section";
import { SanityContactFormSection } from "./components/sanity-contact-form-section";
import { SanityContactSection } from "./components/sanity-contact-section";
import { SanityFaqSection } from "./components/sanity-faq-section";
import { SanityHeroSection } from "./components/sanity-hero-section";
import { SanityImageSection } from "./components/sanity-image-section";
import { SanityProcessSection } from "./components/sanity-process-section";
import { SanityProjectsSection } from "./components/sanity-projects-section";
import { SanityServicesSection } from "./components/sanity-services-section";
import { SanitySubheadingSection } from "./components/sanity-subheading-section";
import { SanityTeamSection } from "./components/sanity-team-section";

export const sanityPageComponents: Record<
  string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: any) => React.ReactNode
> = {
  heroSection: SanityHeroSection,
  aboutSection: SanityAboutSection,
  servicesSection: SanityServicesSection,
  projectsSection: SanityProjectsSection,
  processSection: SanityProcessSection,
  imageSection: SanityImageSection,
  contactFormSection: SanityContactFormSection,
  contactSection: SanityContactSection,
  subheadingSection: SanitySubheadingSection,
  faqSection: SanityFaqSection,
  teamSection: SanityTeamSection,
};
