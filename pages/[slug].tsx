import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

import { Content } from "../components/shared/Content";
import { AppPage } from "../components/shared/ui/appPage";
import { getDefaultMetadata, getItemBySlug, getPagesSlugs, getSiteMenu } from "../lib/kontentClient";
import { reservedListingSlugs } from "../lib/routing";
import { ValidCollectionCodename } from "../lib/types/perCollection";
import { siteCodename } from "../lib/utils/env";
import { createElementSmartLink, createFixedAddSmartLink } from "../lib/utils/smartLinkUtils";
import { contentTypes, Metadata, Nav_NavigationItem, WSL_Page } from "../models";
import { sanitizeCircularData } from "../lib/utils/circularityUtils";

type Props = Readonly<{
  page: WSL_Page;
  siteCodename: ValidCollectionCodename;
  siteMenu: Nav_NavigationItem | null;
  defaultMetadata: Metadata;
}>;

interface IParams extends ParsedUrlQuery {
  slug: string
}
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getPagesSlugs();

  const paths = slugs
  .filter(item => item != reservedListingSlugs.articles)
  .filter(item => item != reservedListingSlugs.products)
  .map(slug => (
    { params: { slug } }
  ))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<Props, IParams> = async (context) => {
  const slug = context.params?.slug;

  if (!slug) {
    return {
      notFound: true
    }
  }

  const siteMenu = await getSiteMenu(!!context.preview);
  const defaultMetadata = await getDefaultMetadata(!!context.preview);

  const data = await getItemBySlug<WSL_Page>(slug, contentTypes.page.codename, !!context.preview);

  if (data === null) {
    return {
      notFound: true
    };
  }

  const page = sanitizeCircularData(data);

  return {
    props: { page, siteCodename, siteMenu, defaultMetadata },
  };
}

const TopLevelPage: FC<Props> = props => (
  <AppPage
    siteCodename={props.siteCodename}
    siteMenu={props.siteMenu}
    defaultMetadata={props.defaultMetadata}
    item={props.page}
    pageType="WebPage"
  >
    <div
      {...createElementSmartLink(contentTypes.page.elements.content.codename)}
      {...createFixedAddSmartLink("end")}
    >
      {props.page.elements.content.linkedItems.map(piece => (
        <Content
          key={piece.system.id}
          item={piece}
        />
      ))}
    </div>
  </AppPage>
);

export default TopLevelPage;
