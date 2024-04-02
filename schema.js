export const typeDefs = `#graphql
type LeaveRequest {
  _id: ID
  type: LeaveType
  employeeId: ID 
  date: Date
  startHour: Date
  totalHour: Int
  supervisor: String #email
  status: RequestStatus #default pending
  declinedReasoning? : String
  description: String
  createdAt: Date
  decidedAt: Date 
}
input LeaveRequestInput {
  employeeId: ID
  supervisor: String
  date: Date
  startHour: Date
  totalHour: Int
  description: String
  type: LeaveType
}
input LeaveFilterInput {
  employeeId: ID
  since: Date
  until: Date
  status: RequestStatus
  supervisor: String #email
}
input SupervisorFilterInput {
  supervisor: String
  status: RequestStatus
}
`;
