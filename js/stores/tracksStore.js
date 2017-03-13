import  { observable, action, ObservableMap } from 'mobx';

class TracksStore {
    @observable tracksByGenre;

    constructor() {
        this.tracksByGenre = new ObservableMap({});
    }

    @action mergeTracksByGenre = (genre, list) => {
        if(!this.tracksByGenre.get(genre)) {
            this.tracksByGenre.set(genre, []);
        }
        list.forEach(item => this.tracksByGenre.get(genre).push(item));
    }

    getByGenre(genre) {
        return this.tracksByGenre.get(genre);
    }
}

const tracksStore = new TracksStore();
export default tracksStore;
