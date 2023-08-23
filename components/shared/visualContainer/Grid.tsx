import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { resolveReference } from "../../../lib/routing";
import { createElementSmartLink } from "../../../lib/utils/smartLinkUtils";
import { contentTypes, Fact } from "../../../models";

type Props = Readonly<{
  items: ReadonlyArray<Fact>;
  title: string;
  subtitle: string;
}>;

export const GridComponent: FC<Props> = (props) => {
  const createGridItem = (item: Fact) => (
    <div
      className="group border- hover:scale-110 transform transition-all duration-300 ease-in-out md:p-4 flex flex-col items-center"
      key={item.system.id}
    >
      {item.elements.image.value[0] && (
        <div className="relative max-w-sm w-full h-[400px]">
          <Image
            src={item.elements.image.value[0].url}
            alt={item.elements.title.value}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="rounded-lg transition ease-in-out group-hover:brightness-50 duration-300"
            quality={75}
          />
          <div className="font-semibold text-white invisible group-hover:visible absolute top-1/2 left-10 transition delay-300 duration-300 ease-in-out">
            {item.elements.referenceLabel.value}
          </div>
        </div>
      )}
      <div className="font-semibold text-3xl w-full md:px-4 pt-10 pb-2">
        {item.elements.title.value}
      </div>
      <div className="md:px-4 justify-center w-full">
        {item.elements.message.value}
      </div>
    </div>
  );

  return (
    <div className="px-10 w-full relative">
      {props.title && (
        <h3
          className="text-4xl font-normal"
          {...createElementSmartLink(
            contentTypes.visual_container.elements.title.codename
          )}
        >
          {props.title}
        </h3>
      )}
      <div
        {...createElementSmartLink(
          contentTypes.visual_container.elements.subtitle.codename
        )}
      >
        {props.subtitle}
      </div>
      <div className="grid mx-auto w-full max-w-screen-xl py-7 text-gray-900 sm:grid-cols-2 md:grid-cols-3">
        {props.items.map((item) =>
          item.elements.referenceLabel.value ? (
            <Link
              key={item.system.codename}
              className="no-underline font-normal"
              href={resolveReference(item)}
            >
              {createGridItem(item)}
            </Link>
          ) : (
            createGridItem(item)
          )
        )}
      </div>
    </div>
  );
};
