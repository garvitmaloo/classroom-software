import fs from "fs";

export class FileReader {
  data: string = "";

  constructor(public filename: string) {}

  read(): void {
    const data = fs.readFileSync(this.filename, { encoding: "utf-8" });

    this.data = data;
  }
}
