// GENERIC
// interface SumberData<T> {
//   name: string;
//   kelas: string;
//   usia: number;
//   matkul: T;
// }
// const data: SumberData<(string | number | boolean)[]> = {
//   name: "bagas",
//   kelas: "SI",
//   usia: 20,
//   matkul: ["Web", 12, true],
// };

// const dataDua: SumberData<{ namaPel: string; ruangan: number }> = {
//   name: "deddy",
//   kelas: "TI",
//   usia: 21,
//   matkul: { namaPel: "WebPR", ruangan: 123 },
// };
// const dataTiga: SumberData<string> = {
//   name: "devan",
//   kelas: "SI",
//   usia: 23,
//   matkul: "si",
// };
// console.log(data, dataDua, dataTiga);

// enum
// let dataBind: string = "ini adalah string";
// const data = dataBind as unknown;
// // let data: number = dataBind as unknown as number;
// console.log(data);

// type never => function with never cannot be executed to the end
// const data = (): void => {
//   console.log("haloo");
// };
// let dataAngka: number = 123;
// dataAngka = 123;
// //  intiny ialah : untuk fn itu tandany mengembalikan atau return sedangkan untuk variable : ialah type data
// let dataAngkaStr: string = "deddy";
// let angkaDasar: number = 1123;
// let tidak: unknown;
// const angka: number = angkaDasar as number;

// // "as" is operation makes type assertion
// // as keyword is also known as type assertion
// const biodata = {
//   nama: "string",
//   kelas: 123,
// };
// const funct = <T>(obj: T): T => {
//   const angkaRandom = Math.floor(Math.random() * 100);
//   return { ...obj, angkaRandom };
// };
// const data = funct({ name: "deddy", kelas: "SI" });
// console.log(data.name);
const data = <T>(param: T): T => {
  return param.length;
};
console.log(data(123123));
// Property 'name' does not exist on type 'object
