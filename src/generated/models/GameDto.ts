/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlayerDto } from './PlayerDto';
import type { VoteDto } from './VoteDto';

export type GameDto = {
    guid: string;
    name: string;
    players: Array<PlayerDto>;
    votes: Array<VoteDto>;
    cardsRevealed: boolean;
    averageValue: number;
};
