"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Red", value: 12 },
  { name: "Blue", value: 18 },
  { name: "Yellow", value: 3 },
  { name: "Green", value: 5 },
  { name: "Purple", value: 2 },
  { name: "Orange", value: 3 },
]

export function MonthlyReportsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#525252"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#525252"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="value"
          fill="#EAB308"
          radius={[4, 4, 0, 0]}
          className="opacity-70"
        />
      </BarChart>
    </ResponsiveContainer>
  )
} 