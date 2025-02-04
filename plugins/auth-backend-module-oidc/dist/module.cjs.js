'use strict';

var backendPluginApi = require('@backstage/backend-plugin-api');
var pluginAuthNode = require('@backstage/plugin-auth-node');
var pluginAuthBackendModuleOidcProvider = require('@backstage/plugin-auth-backend-module-oidc-provider');
var catalogModel = require('@backstage/catalog-model');

const authModuleIamProvider = backendPluginApi.createBackendModule({
  // This ID must be exactly "auth" because that's the plugin it targets
  pluginId: "auth",
  // This ID must be unique, but can be anything
  moduleId: "auth.iam-oidc",
  register(reg) {
    reg.registerInit({
      deps: { providers: pluginAuthNode.authProvidersExtensionPoint },
      async init({ providers }) {
        providers.registerProvider({
          // This ID must match the actual provider config
          providerId: "iam-oidc",
          // Use createProxyAuthProviderFactory instead if it's one of the proxy
          // based providers rather than an OAuth based one
          factory: pluginAuthNode.createOAuthProviderFactory({
            // For more info about authenticators please see https://backstage.io/docs/auth/add-auth-provider/#adding-an-oauth-based-provider
            authenticator: pluginAuthBackendModuleOidcProvider.oidcAuthenticator,
            async signInResolver(info, ctx) {
              const { profile: { email } } = info;
              if (!email) {
                throw new Error("Login failed. No email presented");
              }
              console.log("**********" + JSON.stringify(info.result.fullProfile.userinfo));
              const userRef = catalogModel.stringifyEntityRef({
                kind: "User",
                name: info.result.fullProfile.userinfo.preferred_username || "defaultName",
                namespace: catalogModel.DEFAULT_NAMESPACE
              });
              return ctx.issueToken({
                claims: {
                  sub: userRef,
                  // The user's own identity
                  ent: [userRef]
                  // A list of identities that the user claims ownership through
                }
              });
            }
          })
        });
      }
    });
  }
});

exports.authModuleIamProvider = authModuleIamProvider;
//# sourceMappingURL=module.cjs.js.map
