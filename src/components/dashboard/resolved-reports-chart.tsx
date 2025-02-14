"use client"

import dynamic from 'next/dynamic'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Red", value: 12 },
  { name: "Blue", value: 19 },
  { name: "Yellow", value: 3 },
  { name: "Green", value: 5 },
  { name: "Purple", value: 2 },
  { name: "Orange", value: 3 },
]

function Chart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
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
        <Line
          type="monotone"
          dataKey="value"
          stroke="#EAB308"
          strokeWidth={2}
          dot={{ strokeWidth: 2, r: 4, fill: "#EAB308" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export const ResolvedReportsChart = dynamic(() => Promise.resolve(Chart), {
  ssr: false
}) 