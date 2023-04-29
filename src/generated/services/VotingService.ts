/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class VotingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param gameId 
     * @param userId 
     * @param value 
     * @returns any Success
     * @throws ApiError
     */
    public putApiVotingVote(
gameId: string,
userId?: string,
value?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/Voting/{gameId}/vote',
            path: {
                'gameId': gameId,
            },
            query: {
                'userId': userId,
                'value': value,
            },
        });
    }

    /**
     * @param gameId 
     * @param userId 
     * @returns any Success
     * @throws ApiError
     */
    public putApiVotingUnvote(
gameId: string,
userId?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/Voting/{gameId}/unvote',
            path: {
                'gameId': gameId,
            },
            query: {
                'userId': userId,
            },
        });
    }

    /**
     * @param gameId 
     * @returns any Success
     * @throws ApiError
     */
    public putApiVotingRevealcards(
gameId: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/Voting/{gameId}/revealcards',
            path: {
                'gameId': gameId,
            },
        });
    }

    /**
     * @param gameId 
     * @returns any Success
     * @throws ApiError
     */
    public putApiVotingNewvoting(
gameId: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/Voting/{gameId}/newvoting',
            path: {
                'gameId': gameId,
            },
        });
    }

}
