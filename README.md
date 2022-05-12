# Next.js + Contentful Blog 


This repo uses Next.js and Contentful to deliver a blog microsite, using Contentful's GraphQL API.

[Read more about the GraphQL API](https://graphql.contentful.com).


## Getting set up

Use your code editing tool to access the source code at https://bitbucket.org/GuideDogs/blog/src/dev/


## Configuring your development environment

Ensure you have a env.local file populated with the following:
```
CONTENTFUL_SPACE_ID=e1jkpkpbs14h
CONTENTFUL_ACCESS_TOKEN=MT7yf3Dd6J6VUEAyH0vPwaK-AQBGW0ciEqsMAeXdXM8
NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=_Sv0p5Tto7ZurP3xQnEKqs8pxuJdCs3wtMj0pX_5SJc
CONTENTFUL_PREVIEW_SECRET=YD57VT4aE79PTgAfeXbPKs9EpnPmZkd7
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_PREVIEW=true
NEXT_PUBLIC_HYVOR_ID=4965
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-WKM32MM
NEXT_PUBLIC_BASE_PATH=/blog
```

### Install dependencies

Use 'Yarn install' to install the following dependencies:
```
"@chakra-ui/react": "^1.6.7",
    "@contentful/rich-text-react-renderer": "^14.1.2",
    "@emotion/css": "^11.9.0",
    "@emotion/react": "^11.4.1",
    "@emotion/styled": "^11.3.0",
    "framer-motion": "^4.1.17",
    "hyvor-talk-react": "^2.0.0",
    "next": "^12.0.7",
    "next-sitemap": "^1.6.9",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-lottie": "^1.2.3",
    "react-markdown": "^5.0.3",
    "react-player": "^2.10.0",
    "react-share": "^4.4.0",
    "sass": "^1.43.4"
```



### Using your own Contentful account

To get started with your own Contentful space, [sign up for free](https://www.contentful.com/sign-up/). You will also need to have an invite to the organisation required.



## Running the application in development

Navigate to the project directory in a terminal window and run:

```bash
yarn dev
```


### GraphQL playground

You can read more about it here:
https://www.contentful.com/developers/docs/references/graphql/

This is a direct link to the Guide Dogs UK space and using the standard access token:
https://graphql.contentful.com/content/v1/spaces/e1jkpkpbs14h/explore?access_token=MT7yf3Dd6J6VUEAyH0vPwaK-AQBGW0ciEqsMAeXdXM8
