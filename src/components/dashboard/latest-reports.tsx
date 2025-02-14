"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  {
    name: "Lian",
    lastName: "Smith",
    phone: "622322662",
    email: "jonsmith@mail.com",
  },
  {
    name: "Emma",
    lastName: "Johnson",
    phone: "622322662",
    email: "jonsmith@mail.com",
  },
  {
    name: "Oliver",
    lastName: "Williams",
    phone: "622322662",
    email: "jonsmith@mail.com",
  },
  {
    name: "Isabella",
    lastName: "Brown",
    phone: "622322662",
    email: "jonsmith@mail.com",
  },
  {
    name: "Lian",
    lastName: "Smith",
    phone: "622322662",
    email: "jonsmith@mail.com",
  },
]

export function LatestReports() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>NAME</TableHead>
          <TableHead>LAST NAME</TableHead>
          <TableHead>PHONE</TableHead>
          <TableHead>EMAIL</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.lastName}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
} 