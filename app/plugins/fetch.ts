import { createBlankRepository } from "~/repository/blank";

export default defineNuxtPlugin({
  name: 'fetch',
  parallel: true,
  async setup(nuxtApp){
    const config = useRuntimeConfig();

    const appFetch = $fetch.create({
      baseURL: config.public.apiUrl as string,
      retry: false,
      onRequest({ options }) {
        options.headers.append('Accept', 'application/json');

      },
      async onResponseError({ response }) {

      }
    });

    const api = {
      blank: createBlankRepository(appFetch),
    };
    
    return {
      provide: {
        appFetch,
        api
      }
    }
  }
});