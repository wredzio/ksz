import { SanityFooter } from "@/components/cms/sanity-footer";
import { getSettings } from "@/sanity/lib/get-settings";

export async function Footer() {
  const settings = await getSettings();

  if (!settings) {
    return (
      <footer className="bg-secondary p-8 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-dm-sans">
            &copy; {new Date().getFullYear()} KSZ. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    );
  }

  return <SanityFooter {...settings} />;
}
