import { responsiveImage } from "./objects/responsive-image";
import { pageType } from "./pages/page";
import { aboutSection } from "./sections/about-section";
import { blockContentSection } from "./sections/block-content-section";
import { contactSection } from "./sections/contact-section";
import { faqSection } from "./sections/faq-section";
import { heroSection } from "./sections/hero-section";
import { imageSection } from "./sections/image-section";
import { processSection } from "./sections/process-section";
import { projectsSection } from "./sections/projects-section";
import { servicesSection } from "./sections/services-section";
import { subheadingSection } from "./sections/subheading-section";
import { teamSection } from "./sections/team-section";
import { settingsType } from "./settings";

export const schemaTypes = [
  settingsType,
  pageType,
  responsiveImage,
  imageSection,
  blockContentSection,
  contactSection,
  heroSection,
  subheadingSection,
  aboutSection,
  servicesSection,
  projectsSection,
  processSection,
  faqSection,
  teamSection,
];
