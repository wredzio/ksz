import { PageType, sanityComponent } from "./sanity-component";

interface BaseSanityComponentData {
  _key: string;
  _type: string;
}

interface SanityComponentsProps {
  pageType: PageType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sanityComponentsData: (BaseSanityComponentData & Record<string, any>)[];
}

export const SanityComponents = async (props: SanityComponentsProps) => {
  const { pageType, sanityComponentsData } = props;
  const pageComponents = await sanityComponent[pageType]();

  return sanityComponentsData.map((sanityComponentData) => {
    const Component = pageComponents[sanityComponentData._type];
    if (!Component) return null;

    return (
      <Component key={sanityComponentData._key} {...sanityComponentData} />
    );
  });
};
