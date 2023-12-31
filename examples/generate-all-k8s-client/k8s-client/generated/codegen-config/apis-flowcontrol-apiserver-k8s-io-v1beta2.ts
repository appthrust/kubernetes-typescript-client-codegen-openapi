import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/flowcontrol.apiserver.k8s.io/v1beta2/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-flowcontrol-apiserver-k8s-io-v1beta2.ts',
}

export default config
