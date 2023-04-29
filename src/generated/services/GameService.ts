/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GameDto } from '../models/GameDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GameService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param name 
     * @returns GameDto Success
     * @throws ApiError
     */
    public createGame(
name?: string,
): CancelablePromise<GameDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/Game',
            query: {
                'name': name,
            },
        });
    }

    /**
     * @param gameId 
     * @returns GameDto Success
     * @throws ApiError
     */
    public getGame(
gameId: string,
): CancelablePromise<GameDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/Game/{gameId}',
            path: {
                'gameId': gameId,
            },
        });
    }

}
