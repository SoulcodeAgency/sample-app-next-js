import Image from "next/image";
import { FC, ReactNode } from "react";

import { mainColorBgClass } from "../../../lib/constants/colors";
import { createItemSmartLink } from "../../../lib/utils/smartLinkUtils";
import { useSiteCodename } from "../../shared/siteCodenameContext";

type Props = Readonly<{
  url: string;
  children: ReactNode;
  className?: string;
  itemId?: string;
}>;

export const HeroImage: FC<Props> = (props) => {
  const siteCodename = useSiteCodename();
  const mdMainColorBg = "md:" + mainColorBgClass[siteCodename];

  return (
    <>
      <figure
        className={`relative m-0 justify-start not-prose w-screen h-screen max-h-[1200px] ${
          props.className ?? ""
        }`}
        {...createItemSmartLink(props.itemId)}
      >
        <div className="absolute inset-0 [margin-left:-38%]">
          <Image
            src={props.url}
            alt="Hero image"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 80vw"
            priority
          />
        </div>
        <div
          className={`${mdMainColorBg} relative w-fit h-full flex max-w-3xl flex-col items-center md:items-start justify-end min-[900px]:justify-center pt-20 pb-32 md:pb-12 pr-6 min-[900px]:px-6`}
        >
          {props.children}
        </div>
      </figure>
    </>
  );
};

HeroImage.displayName = "HeroImage";
