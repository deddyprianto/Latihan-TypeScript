import { MakeFormatInterface } from "../interfaces/HasFormatter.js";
export class Home implements MakeFormatInterface {
  nama: string;
  kelas: string;
  usia: number;
  constructor(nama: string, kelas: string, usia: number) {
    this.nama = nama;
    this.kelas = kelas;
    this.usia = usia;
  }
  formatStr() {
    return `haloo nama saya adalah ${this.nama} saya kelas ${this.kelas} saya berusia ${this.usia}`;
  }
}
