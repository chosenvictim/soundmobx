import { CLIENT_ID } from '../constants/authentication.js';

export function unauthApiUrl(url, symbol) {
    return `//api.soundcloud.com/${url}${symbol}client_id=${CLIENT_ID}`;
}
