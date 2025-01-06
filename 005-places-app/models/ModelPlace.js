class ModelPlace {
    constructor({ title, imageUrl, address, location }) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.address = address;
        this.location = location; // { lat: number; lng: number }
        this.id = Math.random();
    }
}
