import { entryPointUriPath, PERMISSIONS } from './src/constants';

const config = {
  name: 'Static bundles',
  entryPointUriPath: entryPointUriPath,
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}',
  env: {
    production: {
      applicationId: '${env:APPLICATION_ID}',
      url: '${env:APPLICATION_URL}',
    },
    development: {
      initialProjectKey: '${env:INITIAL_PROJECT_KEY}',
    },
  },
  oAuthScopes: {
    view: ['view_products', 'view_customer_groups'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Static Bundles',
    permissions: [PERMISSIONS.View],
    labelAllLocales: [],
  },
};

export default config;
