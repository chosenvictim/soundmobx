import  { observable, action, computed } from 'mobx';

class TracksStore {
    @observable tracks;
    @observable activeTrackId;
    @observable activeIdx;

    constructor(tracks = []) {
        this.tracks = tracks;
        this.activeTrackId = null;
        this.activeIdx = null;
    }

    @computed get activeTrack() {
        return tracksStore.tracks.find((track) => track.origin.id === tracksStore.activeTrackId);
    }

    @action setTracks = (tracks) => {
        this.tracks = tracks;
    }

    @action playTrack = (track) => {
        this.activeTrackId = track.origin.id;
    }

    // @action playPreviousTrack() {
    //     this.tracks.indexOf(this.activeTrackId)
    // }
}

const tracksStore = new TracksStore();
export default tracksStore;
