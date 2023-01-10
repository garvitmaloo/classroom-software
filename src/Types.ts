export interface StudentData {
  fullName: string;
  dateOfBirth: string;
  rollNumber: number;
  physics: number;
  chemistry: number;
  maths: number;
}

export interface PercentageReport {
  fullName: string;
  totalMarks: number;
  percentage: number;
}

export interface SubjectTopper {
  fullName: string;
  marks: number;
}

export interface SubjectWiseGrades {
  fullName: string;
  physics: string;
  chemistry: string;
  maths: string;
}
