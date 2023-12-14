import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

const ROOT_PATH = 'static-bundle-manager';
const BUNDLE_PRODUCT_TYPE = 'static-bundle-parent';
const MASTER_VARIANT_ID = 1;
const entryPointUriPath = 'static-bundle-manager';

const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);

export {
  ROOT_PATH,
  BUNDLE_PRODUCT_TYPE,
  MASTER_VARIANT_ID,
  entryPointUriPath,
  PERMISSIONS,
};
