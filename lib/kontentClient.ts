import { camelCasePropertyNameResolver, createDeliveryClient } from '@kontent-ai/delivery-sdk';
import { WebSpotlightRoot } from '../models/content-types/web_spotlight_root';

const sourceTrackingHeaderName = 'X-KC-SOURCE'

const deliveryClient = createDeliveryClient({
  environmentId: process.env.KONTENT_ENVIRONMENT_ID || "975bf280-fd91-488c-994c-2f04416e5ee3",
  globalHeaders: (_queryConfig) => [
    {
      header: sourceTrackingHeaderName,
      value: `${process.env.APP_NAME || "n/a"};${process.env.APP_VERSION || "n/a"}`,
    },
  ],
  propertyNameResolver: camelCasePropertyNameResolver,
  proxy: {
    baseUrl: "http://deliver.devkontentmasters.com",
    basePreviewUrl: "http://preview-deliver.devkontentmasters.com",
  },
  previewApiKey: process.env.KONTENT_PREVIEW_API_KEY
});

const homepageTypeCodename = "web_spotlight_root" as const;

export const getHomepage = (usePreview: boolean) =>
  deliveryClient
    .items()
    .type(homepageTypeCodename)
    .collection(process.env.KONTENT_COLLECTION_CODENAME || '')
    .queryConfig({
      usePreviewMode: usePreview,
    })
    .toPromise()
    .then(res => res.data.items[0] as WebSpotlightRoot | undefined)


