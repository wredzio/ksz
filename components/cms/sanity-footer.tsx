import { Settings } from "@/components/cms/sanity-types";
import { Footer } from "@/components/sections/footer/footer";

type SanityFooterData = Settings;

export function SanityFooter(props: SanityFooterData) {
  if (!props) {
    return null;
  }

  return (
    <Footer
      contact={{
        phones: props.phones?.filter(Boolean) ?? [],
        emails: props.mails?.filter(Boolean) ?? [],
      }}
      socialLinks={
        props.social
          ?.map((social) => ({
            platform: social.media as
              | "Facebook"
              | "Instagram"
              | "Twitter"
              | "Linkedin"
              | "Youtube",
            url: social.url || "",
          }))
          .filter((social) => social.url) || []
      }
    />
  );
}
