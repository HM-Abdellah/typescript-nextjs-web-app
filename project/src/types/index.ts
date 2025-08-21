export interface Teacher {
  id: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface Class {
  id: string
  name: string
  section: string
  grade: string
  teacherId: string
  createdAt: Date
  updatedAt: Date
}

export interface Student {
  id: string
  studentId: string
  firstName: string
  lastName: string
  grade: string
  classId: string
  createdAt: Date
  updatedAt: Date
}

export interface Attendance {
  id: string
  date: Date
  timeSlot: 'morning' | 'afternoon'
  hour: number
  status: 'present' | 'absent' | 'late'
  studentId: string
  classId: string
  teacherId: string
  createdAt: Date
  updatedAt: Date
}

export interface Signature {
  id: string
  date: Date
  classId: string
  signature: string
  teacherId: string
  createdAt: Date
}

export interface AttendanceRecord {
  student: Student
  attendances: {
    [timeSlot: string]: {
      [hour: number]: Attendance | null
    }
  }
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  success: boolean
  message: string
  teacher?: Teacher
  token?: string
}

export interface AttendanceSubmission {
  studentId: string
  classId: string
  date: string
  timeSlot: 'morning' | 'afternoon'
  hour: number
  status: 'present' | 'absent' | 'late'
}

export interface ReportData {
  class: Class
  date: Date
  students: Student[]
  attendances: Attendance[]
  signature?: Signature
}
