import  { observable, action, computed } from 'mobx';

class TracksStore {
    @observable tracks;
    @observable activeTrackId;

    constructor(tracks = []) {
        this.tracks = tracks;
        this.activeTrackId = null;
    }

    @computed get activeTrack() {
        let activeTrack = null;
        tracksStore.tracks.forEach((track) => {
            if(track.origin.id === tracksStore.activeTrackId)
                activeTrack = track;
        });
        return activeTrack;
    }

    @action setTracks = (tracks) => {
        this.tracks = tracks;
    }

    @action playTrack = (track) => {
        this.activeTrackId = track.origin.id;
    }
}

const tracksStore = new TracksStore();
export default tracksStore;
