/**
 * Generated by '@kontent-ai/model-generator@6.5.0'
 */
export const contentTypes = {
    /**
     *    Page
     */
    page: {
        codename: 'page',
        id: '7ddb77f9-f2c3-4310-8ca4-593a66ce8808',
        externalId: undefined,
        name: '💡 Page',
        elements: {
            /**
             * Content (modular_content)
             */
            content: {
                codename: 'content',
                id: '23387315-8b63-4354-809a-7eaf4a077148',
                externalId: undefined,
                name: 'Content',
                required: false,
                type: 'modular_content'
            },

            /**
             * Description (text)
             */
            metadata__description: {
                codename: 'metadata__description',
                id: '0ae36299-95cb-54d7-9be9-7d76ee6f4be0',
                externalId: 'description-67490da2-0356-44cc-a7ed-e47afc5487a9',
                name: 'Description',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Keywords (text)
             */
            metadata__keywords: {
                codename: 'metadata__keywords',
                id: 'a0f7ffe0-5e94-532f-a86e-d77761eb35af',
                externalId: 'keywords-2b4ba0dc-10f1-4da9-b559-3c374c45517d',
                name: 'Keywords',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Slug (url_slug)
             *
             * There are two reserved URLSlugs - "articles" and "producs" => these tow automatically include article/product  listing and ignore content property
             */
            slug: {
                codename: 'slug',
                id: '0dfcee1b-bc32-4775-b990-a8f2cdb9a8be',
                externalId: undefined,
                name: 'Slug',
                required: false,
                type: 'url_slug'
            },

            /**
             * Subpages (subpages)
             */
            subpages: {
                codename: 'subpages',
                id: 'e5d8e892-69f7-4ad8-b386-8f6f7703aba8',
                externalId: undefined,
                name: 'Subpages',
                required: false,
                type: 'subpages'
            },

            /**
             * Title (text)
             */
            title: {
                codename: 'title',
                id: '3e79c713-841e-45f5-ab33-191864f04405',
                externalId: undefined,
                name: 'Title',
                required: false,
                type: 'text'
            },

            /**
             * Title (text)
             */
            metadata__title: {
                codename: 'metadata__title',
                id: 'd278379c-9f60-58f8-92e0-0e665033dd95',
                externalId: 'title-897b2878-2b80-48ea-a328-16e25a384bb7',
                name: 'Title',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            }
        }
    },

    /**
     *    Web spotlight root
     */
    web_spotlight_root: {
        codename: 'web_spotlight_root',
        id: 'ab387b8f-ec50-4876-9ecb-d175aef67003',
        externalId: undefined,
        name: '💡 Web spotlight root',
        elements: {
            /**
             * Content (modular_content)
             *
             * Populate with 🧱 type items to define the landing page structure and design.
             */
            content: {
                codename: 'content',
                id: '9f9bf380-8fdf-48e0-9808-1e1fc067dc1d',
                externalId: undefined,
                name: 'Content',
                required: false,
                type: 'modular_content'
            },

            /**
             * Description (text)
             */
            metadata__description: {
                codename: 'metadata__description',
                id: '0ae36299-95cb-54d7-9be9-7d76ee6f4be0',
                externalId: 'description-67490da2-0356-44cc-a7ed-e47afc5487a9',
                name: 'Description',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Keywords (text)
             */
            metadata__keywords: {
                codename: 'metadata__keywords',
                id: 'a0f7ffe0-5e94-532f-a86e-d77761eb35af',
                externalId: 'keywords-2b4ba0dc-10f1-4da9-b559-3c374c45517d',
                name: 'Keywords',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Navigation (modular_content)
             *
             * Provide a valid Navigation item to define main website menu. Recursive nature of Navigation item type allows you to create a hierarchical mega menu. Two levels of nesting are supported by default.
             */
            navigation: {
                codename: 'navigation',
                id: 'a1a6b4d4-2f47-5071-aa53-1d283d2dee3e',
                externalId: 'navigation-23dd89bd-09c7-499f-a7b0-3c00d007cc83',
                name: 'Navigation',
                required: true,
                type: 'modular_content'
            },

            /**
             * Subpages (subpages)
             *
             * Page items populating this element will be shown in the web spotlight tree. Further populating a subpages element in the child items allows you to create a multi-level hierarchy.
             */
            subpages: {
                codename: 'subpages',
                id: 'd94c4178-d6fe-442d-a205-ff1c52c22b35',
                externalId: undefined,
                name: 'Subpages',
                required: false,
                type: 'subpages'
            },

            /**
             * Title (text)
             */
            title: {
                codename: 'title',
                id: '69bd8e1b-f164-48b8-8351-77eb98488de1',
                externalId: undefined,
                name: 'Title',
                required: false,
                type: 'text'
            },

            /**
             * Title (text)
             */
            metadata__title: {
                codename: 'metadata__title',
                id: 'd278379c-9f60-58f8-92e0-0e665033dd95',
                externalId: 'title-897b2878-2b80-48ea-a328-16e25a384bb7',
                name: 'Title',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            }
        }
    },

    /**
     *    Callout
     */
    callout: {
        codename: 'callout',
        id: '72c5b04f-e316-5912-baf2-8ccd2f0ad7a2',
        externalId: 'callout-4a3b08ce-eb20-45bb-b4eb-5a9576d40ae4',
        name: '🧩 Callout',
        elements: {
            /**
             * Content (rich_text)
             */
            content: {
                codename: 'content',
                id: '15a9fc79-e85f-5bb1-8e81-d0362cd93b93',
                externalId: 'content-0380c2b6-a9b4-4459-8a3e-56d3297a988a',
                name: 'Content',
                required: true,
                type: 'rich_text'
            },

            /**
             * Type (multiple_choice)
             *
             * Selecting a type affects the visual style of the callout to make its purpose instantly clear to the reader.
             */
            type: {
                codename: 'type',
                id: '44dd9032-c950-53b8-91bd-c6c586233311',
                externalId: 'type-bdd7f318-dc0b-40de-9d4f-ae5970cd2e26',
                name: 'Type',
                required: true,
                type: 'multiple_choice',
                options: {
                    warning: {
                        name: 'Warning',
                        id: '32fdd712-8627-5782-bbb4-7a4739e9d6ab',
                        codename: 'warning',
                        externalId: 'warning-6498eaf0-3920-4a40-b76a-5160a0b68a6a'
                    },
                    info: {
                        name: 'Info',
                        id: '182912d7-d863-5d4a-8a5a-758c4acb2cb7',
                        codename: 'info',
                        externalId: 'info-f9130046-45f4-4a87-abc9-6d05ff841976'
                    },
                    lightbulb: {
                        name: 'Lightbulb',
                        id: 'e0b420c5-e95f-5a51-83db-39627cecc00b',
                        codename: 'lightbulb',
                        externalId: 'lightbulb-c6baac0f-493a-4312-b263-4647dbd9e2e5'
                    }
                }
            }
        }
    },

    /**
     *    Navigation item
     */
    navigation_item: {
        codename: 'navigation_item',
        id: '08ad03e2-c164-56e7-9903-52f615e8ec82',
        externalId: 'navigation-881cf5d2-49ce-429d-98bc-128a94928ccc',
        name: '🧭 Navigation item',
        elements: {
            /**
             * Caption (text)
             */
            reference__caption: {
                codename: 'reference__caption',
                id: '22581583-a2a6-4d72-a0bf-f0eb55e541eb',
                externalId: undefined,
                name: 'Caption',
                required: false,
                type: 'text',

                snippetCodename: 'reference'
            },

            /**
             * Content item link (modular_content)
             *
             * Link to a supported content item, resolution can vary based on presentation layer.
             */
            reference__content_item_link: {
                codename: 'reference__content_item_link',
                id: '4a90e2f3-517d-4092-9fdc-bbfb196ef250',
                externalId: undefined,
                name: 'Content item link',
                required: false,
                type: 'modular_content',

                snippetCodename: 'reference'
            },

            /**
             * External URI (text)
             *
             * Link to an external resource, has higher resolution priority than item link.
             */
            reference__external_uri: {
                codename: 'reference__external_uri',
                id: '6e1192e9-dd9e-4a04-bb51-445c771353c6',
                externalId: undefined,
                name: 'External URI',
                required: false,
                type: 'text',

                snippetCodename: 'reference'
            },

            /**
             * Label (text)
             */
            reference__label: {
                codename: 'reference__label',
                id: 'af93c504-7db2-44cb-863a-59a0e9364e6e',
                externalId: undefined,
                name: 'Label',
                required: false,
                type: 'text',

                snippetCodename: 'reference'
            },

            /**
             * Subitems (modular_content)
             *
             * Fill with further Navigation items to create a hierarchical menu.
             */
            subitems: {
                codename: 'subitems',
                id: '2a2104ce-cb8d-5d6b-a90f-a78183efc478',
                externalId: 'subItems-de543313-edb7-4fd5-9682-3c424e4ed0d4',
                name: 'Subitems',
                required: false,
                type: 'modular_content'
            }
        }
    },

    /**
     *    Content chunk
     */
    content_chunk: {
        codename: 'content_chunk',
        id: '77194b36-3971-5137-b0d8-8dbed2b4b18a',
        externalId: 'contentChunk-1fb6ab30-d298-483e-b591-3c35602a4e8e',
        name: '🧱 Content chunk',
        elements: {
            /**
             * Content (rich_text)
             */
            content: {
                codename: 'content',
                id: '7ace9f5a-cf40-5339-8122-2f320ba3326e',
                externalId: 'content-3326d741-fca1-4b84-80d8-e8b41d99b103',
                name: 'Content',
                required: false,
                type: 'rich_text'
            }
        }
    },

    /**
     *    Visual container
     */
    visual_container: {
        codename: 'visual_container',
        id: 'e23c2808-d953-5914-a526-ab702cc519f5',
        externalId: 'visualContainer-acc53fbf-9b9f-4a46-b8f5-26c3df8b4a72',
        name: '🧱 Visual container',
        elements: {
            /**
             * Items (modular_content)
             */
            items: {
                codename: 'items',
                id: '081f63c6-9589-5f8d-a9de-bc3b1ceb24e7',
                externalId: 'items-b445a138-71a4-40e4-a3dd-6c38eeeb480e',
                name: 'Items',
                required: true,
                type: 'modular_content'
            },

            /**
             * Subtitle (text)
             */
            subtitle: {
                codename: 'subtitle',
                id: 'db1dcba9-ffde-5ff9-a8dc-e594cf3d27d8',
                externalId: 'subTitle-6e3e636e-e6c1-4663-9bcc-aeb303bc5342',
                name: 'Subtitle',
                required: false,
                type: 'text'
            },

            /**
             * Title (text)
             */
            title: {
                codename: 'title',
                id: '22e19c4d-aeeb-5c87-852c-b8a8202dfbad',
                externalId: 'title-b1927504-dd90-4375-b8f4-688cc2a3aca1',
                name: 'Title',
                required: false,
                type: 'text'
            },

            /**
             * Visual representation (multiple_choice)
             *
             * ⚠ You should try to avoid including visual information in the content. This is one of the edge cases that might be viable since this content type is used for website representation only.
             */
            visual_representation: {
                codename: 'visual_representation',
                id: '2c3d8fe4-a21d-524a-aba5-5fd1913f8341',
                externalId: 'visualRepresentation-da31aeea-3a42-4f1b-b46f-32e0b8d7fd06',
                name: 'Visual representation',
                required: true,
                type: 'multiple_choice',
                options: {
                    hero_unit: {
                        name: 'Hero Unit',
                        id: '0eac602d-873d-54a0-98d1-3a7b5b7198fd',
                        codename: 'hero_unit',
                        externalId: 'carousel-7642e752-f37b-4243-9636-f2c56a23fb63'
                    },
                    grid: {
                        name: 'Grid',
                        id: 'e5a7724e-033f-581f-9cdc-2e1aadbfcd40',
                        codename: 'grid',
                        externalId: 'grid-103265fe-3322-4eae-aa08-034590507d67'
                    },
                    stack: {
                        name: 'Stack',
                        id: '68885832-31dc-597a-9e57-e6886a64288f',
                        codename: 'stack',
                        externalId: 'stack-12865e09-5b2f-4e70-a974-aaf4b2f63d61'
                    }
                }
            }
        }
    },

    /**
     * Action
     */
    action: {
        codename: 'action',
        id: '32395d41-ee0d-499a-8cd6-23b3d9f267e9',
        externalId: undefined,
        name: 'Action',
        elements: {
            /**
             * Caption (text)
             */
            reference__caption: {
                codename: 'reference__caption',
                id: '22581583-a2a6-4d72-a0bf-f0eb55e541eb',
                externalId: undefined,
                name: 'Caption',
                required: false,
                type: 'text',

                snippetCodename: 'reference'
            },

            /**
             * Content item link (modular_content)
             *
             * Link to a supported content item, resolution can vary based on presentation layer.
             */
            reference__content_item_link: {
                codename: 'reference__content_item_link',
                id: '4a90e2f3-517d-4092-9fdc-bbfb196ef250',
                externalId: undefined,
                name: 'Content item link',
                required: false,
                type: 'modular_content',

                snippetCodename: 'reference'
            },

            /**
             * External URI (text)
             *
             * Link to an external resource, has higher resolution priority than item link.
             */
            reference__external_uri: {
                codename: 'reference__external_uri',
                id: '6e1192e9-dd9e-4a04-bb51-445c771353c6',
                externalId: undefined,
                name: 'External URI',
                required: false,
                type: 'text',

                snippetCodename: 'reference'
            },

            /**
             * Image (asset)
             */
            image: {
                codename: 'image',
                id: '452e8309-8387-410e-8a4f-18db9c98dd04',
                externalId: undefined,
                name: 'Image',
                required: false,
                type: 'asset'
            },

            /**
             * Label (text)
             */
            reference__label: {
                codename: 'reference__label',
                id: 'af93c504-7db2-44cb-863a-59a0e9364e6e',
                externalId: undefined,
                name: 'Label',
                required: false,
                type: 'text',

                snippetCodename: 'reference'
            }
        }
    },

    /**
     * Article
     */
    article: {
        codename: 'article',
        id: '5568750a-d7fd-51fa-a8bb-a08940ac5395',
        externalId: 'article-f3f94d06-ce91-42b5-ad0b-3827e02653af',
        name: 'Article',
        elements: {
            /**
             * Abstract (text)
             *
             * Don't make it too long. At this point users decides, whether they want to continue reading!
             */
            abstract: {
                codename: 'abstract',
                id: '5ae9979f-cc84-5c0b-81d8-65eabf11f2ec',
                externalId: 'abstract-89139239-2ea2-4789-a3b7-aace73a9914d',
                name: 'Abstract',
                required: false,
                type: 'text'
            },

            /**
             * Author (modular_content)
             */
            author: {
                codename: 'author',
                id: '5be60600-49ac-52f8-a759-ab0ead3a3301',
                externalId: 'author-aac99d24-3659-400b-96c7-8bf132177ab2',
                name: 'Author',
                required: true,
                type: 'modular_content'
            },

            /**
             * Content (rich_text)
             */
            content: {
                codename: 'content',
                id: '7d4b95b0-76fc-552e-8931-c90dd2746399',
                externalId: 'content-85bdaa99-d54f-4d43-be28-58c48f7b5dd8',
                name: 'Content',
                required: true,
                type: 'rich_text'
            },

            /**
             * Description (text)
             */
            metadata__description: {
                codename: 'metadata__description',
                id: '0ae36299-95cb-54d7-9be9-7d76ee6f4be0',
                externalId: 'description-67490da2-0356-44cc-a7ed-e47afc5487a9',
                name: 'Description',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Hero Image (asset)
             */
            hero_image: {
                codename: 'hero_image',
                id: 'ed868ae7-0b90-5752-a53b-aa4cfa2ca56e',
                externalId: 'heroImage-890b7b02-d4ae-4ad9-ad8f-ad6d2d44b27c',
                name: 'Hero Image',
                required: true,
                type: 'asset'
            },

            /**
             * Keywords (text)
             */
            metadata__keywords: {
                codename: 'metadata__keywords',
                id: 'a0f7ffe0-5e94-532f-a86e-d77761eb35af',
                externalId: 'keywords-2b4ba0dc-10f1-4da9-b559-3c374c45517d',
                name: 'Keywords',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Publishing date (date_time)
             */
            publishing_date: {
                codename: 'publishing_date',
                id: 'dba8efd9-052c-557a-9dfd-3f43f966eab8',
                externalId: 'publishingDate-1a33b696-88a9-4d15-8698-a617f6c908c5',
                name: 'Publishing date',
                required: true,
                type: 'date_time'
            },

            /**
             * Slug (url_slug)
             */
            slug: {
                codename: 'slug',
                id: '7b9f3bb2-2efb-5285-8988-bfb66e45cf77',
                externalId: 'slug-b2b11773-ce44-4a09-8306-2888fa55a6b6',
                name: 'Slug',
                required: true,
                type: 'url_slug'
            },

            /**
             * Title (text)
             *
             * You can use online tools get score on your titles and incrementally improve it.
             */
            title: {
                codename: 'title',
                id: 'ae9be828-90fe-5fb4-ae3a-8dfe047e2567',
                externalId: 'title-862e8b39-b10b-4448-9da3-cbb3f07378d1',
                name: 'Title',
                required: true,
                type: 'text'
            },

            /**
             * Title (text)
             */
            metadata__title: {
                codename: 'metadata__title',
                id: 'd278379c-9f60-58f8-92e0-0e665033dd95',
                externalId: 'title-897b2878-2b80-48ea-a328-16e25a384bb7',
                name: 'Title',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Article type (taxonomy)
             *
             * Pick a suitable category for your article.
             */
            type: {
                codename: 'type',
                id: 'cc163930-9863-47fb-b158-2d3c95c3990a',
                externalId: undefined,
                name: 'Type',
                required: false,
                type: 'taxonomy'
            }
        }
    },

    /**
     * Fact
     */
    fact: {
        codename: 'fact',
        id: 'df18210c-bacd-5980-81a7-b35c2a66d81f',
        externalId: 'fact-e5a475ac-8957-480b-a42b-2dc711cbb3b8',
        name: 'Fact',
        elements: {
            /**
             * Author (modular_content)
             *
             * By providing an author, you can create a testimonial or a quote.
             */
            author: {
                codename: 'author',
                id: '619dfb25-be91-42de-8f71-83168743612d',
                externalId: undefined,
                name: 'Author',
                required: false,
                type: 'modular_content'
            },

            /**
             * Caption (text)
             */
            reference__caption: {
                codename: 'reference__caption',
                id: '22581583-a2a6-4d72-a0bf-f0eb55e541eb',
                externalId: undefined,
                name: 'Caption',
                required: false,
                type: 'text',

                snippetCodename: 'reference'
            },

            /**
             * Content item link (modular_content)
             *
             * Link to a supported content item, resolution can vary based on presentation layer.
             */
            reference__content_item_link: {
                codename: 'reference__content_item_link',
                id: '4a90e2f3-517d-4092-9fdc-bbfb196ef250',
                externalId: undefined,
                name: 'Content item link',
                required: false,
                type: 'modular_content',

                snippetCodename: 'reference'
            },

            /**
             * External URI (text)
             *
             * Link to an external resource, has higher resolution priority than item link.
             */
            reference__external_uri: {
                codename: 'reference__external_uri',
                id: '6e1192e9-dd9e-4a04-bb51-445c771353c6',
                externalId: undefined,
                name: 'External URI',
                required: false,
                type: 'text',

                snippetCodename: 'reference'
            },

            /**
             * Image (asset)
             *
             * Images have different representation based on context where they are used, such as hero units or cards.
             */
            image: {
                codename: 'image',
                id: '8c8946ce-e683-5df1-b029-967a3e43e056',
                externalId: 'image-c64dc899-8efa-4ce9-8134-3f430856b712',
                name: 'Image',
                required: false,
                type: 'asset'
            },

            /**
             * Label (text)
             */
            reference__label: {
                codename: 'reference__label',
                id: 'af93c504-7db2-44cb-863a-59a0e9364e6e',
                externalId: undefined,
                name: 'Label',
                required: false,
                type: 'text',

                snippetCodename: 'reference'
            },

            /**
             * Message (text)
             */
            message: {
                codename: 'message',
                id: 'cb061028-6de8-4c7b-9c7f-882778cdae54',
                externalId: undefined,
                name: 'Message',
                required: true,
                type: 'text'
            },

            /**
             * Title (text)
             */
            title: {
                codename: 'title',
                id: '7125eab7-ce59-47d8-ba52-04db889bd621',
                externalId: undefined,
                name: 'Title',
                required: false,
                type: 'text'
            },

            /**
             * Fact type (taxonomy)
             *
             * Fact type serves only the purpose of inventory sorting. It does not affect visual representation in any way.
             */
            type: {
                codename: 'type',
                id: '9809c224-44b6-4e18-8d40-a175c20517aa',
                externalId: undefined,
                name: 'Type',
                required: false,
                type: 'taxonomy'
            }
        }
    },

    /**
     * Person
     */
    person: {
        codename: 'person',
        id: '3b8aea57-afdc-55b4-b7aa-30991e2515f8',
        externalId: 'person-94147fa7-c60f-4a80-bee9-9efeaae9f858',
        name: 'Person',
        elements: {
            /**
             * Bio (rich_text)
             *
             * Write a biography that highlights the person's background and achievements. Don't forget to include relevant professional and educational information.
             */
            bio: {
                codename: 'bio',
                id: '4341b423-f053-523f-bd0f-b63b6c786532',
                externalId: 'bio-769f658c-cb5a-48ea-8c0c-337647e5ed7b',
                name: 'Bio',
                required: false,
                type: 'rich_text'
            },

            /**
             * First Name (text)
             */
            first_name: {
                codename: 'first_name',
                id: '412e6d34-62aa-524a-b97f-a23b2cf3e252',
                externalId: 'firstName-3a93ab33-5d97-4c00-b26d-02d8cf178a1f',
                name: 'First Name',
                required: true,
                type: 'text'
            },

            /**
             * Last Name (text)
             */
            last_name: {
                codename: 'last_name',
                id: '3b153753-6cd6-58e8-99ae-e60020ffd890',
                externalId: 'lastName-35d83aef-7b5b-4ae3-98f4-73710ff01473',
                name: 'Last Name',
                required: true,
                type: 'text'
            },

            /**
             * Occupation (text)
             *
             * Include relevant details about their job title or area of expertise.
             */
            occupation: {
                codename: 'occupation',
                id: 'd73579bd-b03a-59e0-8464-63939e0cb6c7',
                externalId: 'occupation-ae875fe0-0192-4220-95b4-1d48dc2a3cd2',
                name: 'Occupation',
                required: false,
                type: 'text'
            },

            /**
             * Photograph (asset)
             *
             * Use a clear, professional and high quality image.
             */
            photograph: {
                codename: 'photograph',
                id: '514655d3-a35d-5c58-8807-b62108651728',
                externalId: 'photograph-fba5b46b-5052-4ed8-b405-bdc08af6b3d6',
                name: 'Photograph',
                required: false,
                type: 'asset'
            }
        }
    },

    /**
     * Product
     */
    product: {
        codename: 'product',
        id: '28f3a148-bcdd-5a1a-b821-d54b2a94dabd',
        externalId: 'product-3c55cfb7-aaf8-47a6-8c47-b7b43bd50ca5',
        name: 'Product',
        elements: {
            /**
             * Product category (taxonomy)
             *
             * Categorize the product with a suitable taxonomy term for improved navigation, filtering, and searchability.
             */
            category: {
                codename: 'category',
                id: 'c03158ef-98ea-41f5-afdd-dc6cba88f999',
                externalId: undefined,
                name: 'Category',
                required: true,
                type: 'taxonomy'
            },

            /**
             * Description (text)
             *
             * Write a description that highlights the product's features and benefits. Use persuasive language to convey the value.
             */
            product_base__description: {
                codename: 'product_base__description',
                id: '4b5078e3-a8f9-4078-82b7-e712eff00136',
                externalId: undefined,
                name: 'Description',
                required: false,
                type: 'text',

                snippetCodename: 'product_base'
            },

            /**
             * Description (text)
             */
            metadata__description: {
                codename: 'metadata__description',
                id: '0ae36299-95cb-54d7-9be9-7d76ee6f4be0',
                externalId: 'description-67490da2-0356-44cc-a7ed-e47afc5487a9',
                name: 'Description',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Keywords (text)
             */
            metadata__keywords: {
                codename: 'metadata__keywords',
                id: 'a0f7ffe0-5e94-532f-a86e-d77761eb35af',
                externalId: 'keywords-2b4ba0dc-10f1-4da9-b559-3c374c45517d',
                name: 'Keywords',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Main image (asset)
             *
             * Use high-quality product images. Ensure the image represents the product's color and size.
             */
            product_base__main_image: {
                codename: 'product_base__main_image',
                id: 'aac1b39d-44fb-429c-8ef2-30de28895682',
                externalId: undefined,
                name: 'Main image',
                required: false,
                type: 'asset',

                snippetCodename: 'product_base'
            },

            /**
             * Name (text)
             *
             * Include key product attributes, such as brand name or model.
             */
            product_base__name: {
                codename: 'product_base__name',
                id: 'ab4c9424-3b74-4814-8cbe-5ab046d21992',
                externalId: undefined,
                name: 'Name',
                required: true,
                type: 'text',

                snippetCodename: 'product_base'
            },

            /**
             * Price (number)
             *
             * Price in Euros.
             */
            price: {
                codename: 'price',
                id: '07b0eeae-1a51-5414-a6f9-0ddbb2e8e21a',
                externalId: 'price-ba493716-6317-4184-b5bc-085c40a63944',
                name: 'Price',
                required: true,
                type: 'number'
            },

            /**
             * Slug (url_slug)
             *
             * ⚠️ Make sure each product has a unique slug.
             */
            slug: {
                codename: 'slug',
                id: 'cb72527a-b7c5-5591-9a80-8415a799d4a6',
                externalId: 'slug-00ac4349-6d09-4b2f-9cf9-e90b5e19a2ff',
                name: 'Slug',
                required: false,
                type: 'url_slug'
            },

            /**
             * Title (text)
             */
            metadata__title: {
                codename: 'metadata__title',
                id: 'd278379c-9f60-58f8-92e0-0e665033dd95',
                externalId: 'title-897b2878-2b80-48ea-a328-16e25a384bb7',
                name: 'Title',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            }
        }
    },

    /**
     * Solution
     */
    solution: {
        codename: 'solution',
        id: '6bf0eff1-fe6a-4180-8d2d-5e020f54db18',
        externalId: undefined,
        name: 'Solution',
        elements: {
            /**
             * Description (text)
             *
             * Write a description that highlights the product's features and benefits. Use persuasive language to convey the value.
             */
            product_base__description: {
                codename: 'product_base__description',
                id: '4b5078e3-a8f9-4078-82b7-e712eff00136',
                externalId: undefined,
                name: 'Description',
                required: false,
                type: 'text',

                snippetCodename: 'product_base'
            },

            /**
             * Description (text)
             */
            metadata__description: {
                codename: 'metadata__description',
                id: '0ae36299-95cb-54d7-9be9-7d76ee6f4be0',
                externalId: 'description-67490da2-0356-44cc-a7ed-e47afc5487a9',
                name: 'Description',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Imaging technology (taxonomy)
             *
             * Select the type of imaging technology the solution employs.
             */
            imaging_technology: {
                codename: 'imaging_technology',
                id: '4697ff5c-393e-4ff3-ae09-ebcee4d2eb2b',
                externalId: undefined,
                name: 'Imaging technology',
                required: true,
                type: 'taxonomy'
            },

            /**
             * Keywords (text)
             */
            metadata__keywords: {
                codename: 'metadata__keywords',
                id: 'a0f7ffe0-5e94-532f-a86e-d77761eb35af',
                externalId: 'keywords-2b4ba0dc-10f1-4da9-b559-3c374c45517d',
                name: 'Keywords',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            },

            /**
             * Main image (asset)
             *
             * Use high-quality product images. Ensure the image represents the product's color and size.
             */
            product_base__main_image: {
                codename: 'product_base__main_image',
                id: 'aac1b39d-44fb-429c-8ef2-30de28895682',
                externalId: undefined,
                name: 'Main image',
                required: false,
                type: 'asset',

                snippetCodename: 'product_base'
            },

            /**
             * Name (text)
             *
             * Include key product attributes, such as brand name or model.
             */
            product_base__name: {
                codename: 'product_base__name',
                id: 'ab4c9424-3b74-4814-8cbe-5ab046d21992',
                externalId: undefined,
                name: 'Name',
                required: true,
                type: 'text',

                snippetCodename: 'product_base'
            },

            /**
             * Showcase (rich_text)
             *
             * Detailed description of the solution and its benefits. Use Fact items to extend the showcase with captioned cards and a call-to-action.
             */
            showcase: {
                codename: 'showcase',
                id: 'eca7b868-5f7e-4bab-a744-88c299ff5992',
                externalId: undefined,
                name: 'Showcase',
                required: false,
                type: 'rich_text'
            },

            /**
             * Slug (url_slug)
             *
             * ⚠ Make sure each solution has a unique slug.
             */
            slug: {
                codename: 'slug',
                id: 'ade61cc3-981f-4cb0-8b8a-515f90de5721',
                externalId: undefined,
                name: 'Slug',
                required: false,
                type: 'url_slug'
            },

            /**
             * Title (text)
             */
            metadata__title: {
                codename: 'metadata__title',
                id: 'd278379c-9f60-58f8-92e0-0e665033dd95',
                externalId: 'title-897b2878-2b80-48ea-a328-16e25a384bb7',
                name: 'Title',
                required: false,
                type: 'text',

                snippetCodename: 'metadata'
            }
        }
    }
} as const;
