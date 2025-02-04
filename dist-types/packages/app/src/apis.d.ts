import { AnyApiFactory, ApiRef, OpenIdConnectApi, ProfileInfoApi, BackstageIdentityApi, SessionApi } from '@backstage/core-plugin-api';
export declare const oidcAuthApiRef: ApiRef<OpenIdConnectApi & // The OIDC API that will handle authentication
ProfileInfoApi & // Profile API for requesting user profile info from the auth provider in question
BackstageIdentityApi & // Backstage identity API to handle and associate the user profile with backstage identity.
SessionApi>;
export declare const apis: AnyApiFactory[];
