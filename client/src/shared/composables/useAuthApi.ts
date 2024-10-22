import type { UseFetchOptions } from 'nuxt/app'

// export function useAPI<T>(
//   url: string | (() => string),
//   options?: UseFetchOptions<T>,
// ) {
//   return useFetch(url, {
//     ...options,
//     $fetch: useNuxtApp().$apiAuth2
//   })
// }
export function useAuthAPI<T>(
  // url: string | (() => string),
  url: string,
  options?: UseFetchOptions<T>,
  // options?:  UseFetchOptions<null> = {},
) {
  const nuxtApp = useNuxtApp();
  return useFetch(url, {
    ...options,
    $fetch: nuxtApp.$hostAuth
  })
}