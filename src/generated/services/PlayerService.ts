/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JoinGameRequest } from '../models/JoinGameRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlayerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody 
     * @returns string Success
     * @throws ApiError
     */
    public joinGame(
requestBody?: JoinGameRequest,
): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/Player',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param userId 
     * @param gameId 
     * @returns any Success
     * @throws ApiError
     */
    public returnGame(
userId: string,
gameId: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/Player/{userId}/game/{gameId}',
            path: {
                'userId': userId,
                'gameId': gameId,
            },
        });
    }

}
