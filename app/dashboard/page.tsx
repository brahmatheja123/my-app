import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MonthlyReportsChart } from "@/components/dashboard/monthly-reports-chart"
import { ResolvedReportsChart } from "@/components/dashboard/resolved-reports-chart"
import { LatestReports } from "@/components/dashboard/latest-reports"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <MonthlyReportsChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resolved Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <ResolvedReportsChart />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Latest Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <LatestReports />
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 