import { KontentSmartLinkEvent } from '@kontent-ai/smart-link';
import { IRefreshMessageData, IRefreshMessageMetadata } from '@kontent-ai/smart-link/types/lib/IFrameCommunicatorTypes';
import { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Content } from '../components/shared/Content';
import { AppPage } from '../components/shared/ui/appPage';
import { getHomepage, getSiteMenu } from "../lib/kontentClient";
import { ValidCollectionCodename } from '../lib/types/perCollection';
import { useSmartLink } from '../lib/useSmartLink';
import { siteCodename } from '../lib/utils/env';
import { Nav_NavigationItem, WSL_WebSpotlightRoot } from '../models';
import { sanitizeCircularData } from '../lib/utils/circularityUtils';

type Props = Readonly<{
  homepage: WSL_WebSpotlightRoot;
  siteCodename: ValidCollectionCodename;
  siteMenu: Nav_NavigationItem | null;
  isPreview: boolean;
}>;

const Home: NextPage<Props> = props => {
  const [homepage, setHomepage] = useState(props.homepage);

  const sdk = useSmartLink();

  useEffect(() => {
    const getHomepage = async () => {
      const response = await fetch(`/api/homepage?preview=${props.isPreview}`);
      const data = await response.json();

      setHomepage(data);
    }

    sdk?.on(KontentSmartLinkEvent.Refresh, (data: IRefreshMessageData, metadata: IRefreshMessageMetadata, originalRefresh: () => void) => {
      if (metadata.manualRefresh) {
        originalRefresh();
      } else {
        getHomepage();
      }
    });
  }, [sdk, props.isPreview]);

  return (
    <AppPage
      item={homepage}
      siteCodename={props.siteCodename}
      siteMenu={props.siteMenu ?? null}
      pageType='WebPage'
      defaultMetadata={homepage}
    >
      <div>
        {homepage.elements.content.linkedItems.map(item => (
          <Content
            key={item.system.id}
            item={item}
          />
        ))}
      </div>
    </AppPage>
  )
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  const homepageData = await getHomepage(!!context.preview);
  const siteMenuData = await getSiteMenu(!!context.preview);

  if (!homepageData) {
    throw new Error("Can't find homepage item.");
  }

  const homepage = sanitizeCircularData(homepageData);
  const siteMenu = sanitizeCircularData(siteMenuData);

  return {
    props: { homepage, siteCodename, siteMenu, isPreview: !!context.preview },
  };
}

export default Home
