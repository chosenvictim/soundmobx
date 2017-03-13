import { unauthApiUrl } from '../services/api.js';
import tracksStore from '../stores/tracksStore.js';

export function fetchTracksByGenre(nextHref, genre) {
    const url = nextHref || unauthApiUrl(`tracks?linked_partitioning=1&limit=20&offset=0&genres=${genre}`, '&');
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            tracksStore.mergeTracksByGenre(genre, data.collection);
        });
}
