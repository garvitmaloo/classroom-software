import { StudentData, SubjectTopper, SubjectWiseGrades } from "./Types";
import { StudentDataParser } from "./StudentParser";
import { PercentageReport } from "./Types";

export class StudentAnalyzer {
  private data: StudentData[] = [];
  private JSONData: string = "";

  constructor(data: string) {
    this.JSONData = data;
    this.data = StudentDataParser(this.JSONData);
  }

  private gradeFinder(marks: number): string {
    if (marks >= 90 && marks <= 100) {
      return "A+";
    } else if (marks >= 80 && marks <= 89) {
      return "A";
    } else if (marks >= 70 && marks <= 79) {
      return "B";
    } else if (marks >= 60 && marks <= 69) {
      return "c";
    } else if (marks >= 50 && marks <= 58) {
      return "D";
    } else {
      return "Fail";
    }
  }

  private sortArray(arr: PercentageReport[]): PercentageReport[] {
    let dataArray = arr;
    let swapped: boolean = true;

    do {
      swapped = false;
      for (let i = 0; i < dataArray.length - 1; i++) {
        if (dataArray[i].percentage < dataArray[i + 1].percentage) {
          let temp = dataArray[i];
          dataArray[i] = dataArray[i + 1];
          dataArray[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);

    return dataArray;
  }

  percentageCalc(): PercentageReport[] {
    return this.data.map((dataItem: StudentData) => {
      const { fullName, physics, chemistry, maths } = dataItem;
      let totalMarks = physics + chemistry + maths;
      return {
        fullName,
        totalMarks,
        percentage: +((totalMarks / 300) * 100).toFixed(2),
      };
    });
  }

  findSubjectTopper(subjectName: string): SubjectTopper {
    let topper: StudentData = this.data[0];
    let highestMarks: number = 0;

    this.data.forEach((dataItem) => {
      for (let [key, value] of Object.entries(dataItem)) {
        if (key === subjectName && value > highestMarks) {
          highestMarks = value;
          topper = dataItem;
        }
      }
    });

    return { fullName: topper.fullName, marks: highestMarks };
  }

  subjectWiseGrades(): SubjectWiseGrades[] {
    return this.data.map((dataItem) => ({
      fullName: dataItem.fullName,
      physics: this.gradeFinder(dataItem.physics),
      chemistry: this.gradeFinder(dataItem.chemistry),
      maths: this.gradeFinder(dataItem.maths),
    }));
  }

  sortStudents(): PercentageReport[] {
    const data: PercentageReport[] = this.percentageCalc();

    return this.sortArray(data);
  }
}
