
export function createBlankRepository(appFetch: typeof $fetch){

    return {
        services(index:boolean = false){
                return appFetch(`/api/data/services/?index=${index}`);
        },
        reviews(){
                return appFetch(`/api/data/client-reviews`);
        },
        service(slug){
                return appFetch(`/api/data/services/${slug}/`);
        },
        projects(index:boolean = false){
            return appFetch(`/api/data/projects/?index=${index}`);
        },
        project(slug){
            return appFetch(`/api/data/projects/${slug}/`);
        },

        news(index:boolean = false){
            return appFetch(`/api/data/news/?index=${index}`);
        },
        news_item(slug){
            return appFetch(`/api/data/news/${slug}/`);
        },


    }

}
