export class Home {
    constructor(nama, kelas, usia) {
        this.nama = nama;
        this.kelas = kelas;
        this.usia = usia;
    }
    formatStr() {
        return `haloo nama saya adalah ${this.nama} saya kelas ${this.kelas} saya berusia ${this.usia}`;
    }
}
