import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { GuidelinesForContentCreators } from '../content-type-snippets/guidelines_for_content_creators';
import { Sitemap } from '../taxonomies/sitemap_538125f';
import { Metadata } from '../content-type-snippets/metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.4.1'
 *
 * About us
 * Id: b2c14f2c-6467-460b-a70b-bca17972a33a
 * Codename: about_us
 */
export type AboutUs = IContentItem<{
  /**
   * Facts (modular_content)
   * Required: false
   * Id: cff560dc-ed24-7036-cbb6-b7a1b61b196a
   * Codename: facts
   *
   * Assign all facts about our company which will be displayed on the about us page.
   */
  facts: Elements.LinkedItemsElement<IContentItem>;

  /**
   * URL pattern (url_slug)
   * Required: false
   * Id: 50cb9acf-45f5-a186-5c00-9a9e4a37d84a
   * Codename: url_pattern
   *
   * Provide a SEO-friendly URL.
   */
  urlPattern: Elements.UrlSlugElement;

  /**
   * Sitemap (taxonomy)
   * Required: false
   * Id: 65911e49-7bb0-41ca-9d17-ab218135126d
   * Codename: sitemap
   */
  sitemap: Elements.TaxonomyElement<Sitemap>;
}> &
  GuidelinesForContentCreators &
  Metadata;
