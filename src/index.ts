import { FileReader } from "./FileReader";
import { StudentAnalyzer } from "./Analyzer";

const studentData = new FileReader("studentData.json");
studentData.read();

const studentAnalysis = new StudentAnalyzer(studentData.data);
// console.log(studentAnalysis.percentageCalc());
// console.log(studentAnalysis.subjectWiseGrades());
// console.log(studentAnalysis.findSubjectTopper("physics"));
// console.log(studentAnalysis.sortStudents());
