import type { NuxtError } from "#app";
import {useNotificationStore} from "~/stores/notifications";

// never run it, with asyncData { lazy: true } option
export function useDataOrFail<
  T extends Awaited<ReturnType<typeof useAsyncData<any,NuxtError>>>
>
(asyncDataRes: T)
: T extends Awaited<ReturnType<typeof useAsyncData<infer R1,NuxtError>>> 
  ? Ref<Exclude<R1,undefined>> 
  : never
{
  const result = useCritical(asyncDataRes);
  return result.data as any;
}

export function useCritical<
  T extends Awaited<ReturnType<typeof useAsyncData<any,any>>>
>
(asyncDataRes: T)
{
  const result = asyncDataRes;
  
  watchError(result.error, (error) => {
    throw createError({
      ...error.value,
      fatal: true
    });
  });

  return result;
}

export function useWithAlert<
  T extends Awaited<ReturnType<typeof useAsyncData<any,any>>>
>(asyncDataRes: T, message?: string)
{
  if(import.meta.browser){
    const notificationStore = useNotificationStore();

    watchError(asyncDataRes.error, () => {
      notificationStore.add({type:'info',message: message || 'Ошибка получения данных'})
    })
  }
  return asyncDataRes;
}

export function useHttpRequest<
    T extends Awaited<ReturnType<typeof useAsyncData<any,any>>>
>(asyncDataRes: T, message?: string)
{

    const notificationStore = useNotificationStore();


    watchError(asyncDataRes.error, () => {
      notificationStore.add({type:'info',message: message || 'Ошибка получения данных'})
    })

  return asyncDataRes;
}


function checkError(error: Ref<NuxtError>, effect: (error: Ref<NuxtError>) => void){
  if(error.value){
    effect(error);
  }
}

function watchError(error: Ref<NuxtError>, effect: (error: Ref<NuxtError>) => void){
  checkError(error, effect);
  watch(error, () => effect(error));
}
