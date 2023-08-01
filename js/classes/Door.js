let open = () => {
    if (this.openDoor) {
        this.openDoor = true;
    }
}

let close = () => {
    if (!this.openDoor) {
        this.openDoor = false;
    }
}