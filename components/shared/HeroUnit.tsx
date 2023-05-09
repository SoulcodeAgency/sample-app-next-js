import { FC } from "react";
import { contentTypes } from "../../models";
import { HeroUnit } from "../../models/content-types/component___hero_unit"
import { HeroImage } from "../landingPage/ui/heroImage";
import { createElementSmartLink } from "../../lib/utils/smartLinkUtils";

type Props = Readonly<{
  item: HeroUnit;
}>;

export const HeroUnitComponent: FC<Props> = props => (
  <HeroImage
    url={props.item.elements.backgroundImage.value[0]?.url}
    itemId={props.item.system.id}
  >
    <h1 {...createElementSmartLink(contentTypes.component___hero_unit.elements.title.codename)}>
      {props.item.elements.title.value}
    </h1>
    <h2 {...createElementSmartLink(contentTypes.component___hero_unit.elements.subtitle.codename)}>
      {props.item.elements.subtitle.value}
    </h2>
  </HeroImage>
);

HeroUnitComponent.displayName = "HeroUnitComponent";

