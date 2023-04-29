import { GeneratedApiClient } from './../generated/GeneratedApiClient';

export class ApiClient extends GeneratedApiClient {
    
    static GetBaseUrl() {
        return process.env.REACT_APP_API_ENDPOINT || window.location.origin;
    }

    constructor() {
        const options = { 
            BASE: ApiClient.GetBaseUrl() 
        };

        super(options);
    }

}
