import SC from 'soundcloud';
import {tracksStore, userStore} from '../stores';

export function auth() {
    SC.connect()
        .then((session) => {
            fetchMe(session);
            fetchTracks(session);
        })
        .catch((error) => {
            console.log("Error connectin to Soundcloud: ", error);
        });
}

export function fetchMe(session) {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
        .then((response) => response.json())
        .then((me) => {
            console.log('User: ', me);
            userStore.setMe(me);
        })
}

export function fetchTracks(session) {
    fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
        .then((response) => response.json())
        .then((data) => {
            tracksStore.setTracks(data.collection);
        });
}
