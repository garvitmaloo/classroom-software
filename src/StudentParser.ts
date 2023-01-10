import { StudentData } from "./Types";

export function StudentDataParser(data: string): StudentData[] {
  return JSON.parse(data);
}
