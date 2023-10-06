import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/apis/authentication.k8s.io/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-authentication-k8s-io.ts',
}

export default config