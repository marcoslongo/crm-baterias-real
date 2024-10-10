"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart of leads collected"

const chartData = [
  { date: "2024-04-01", leads: 222 },
  { date: "2024-04-02", leads: 97 },
  { date: "2024-04-03", leads: 167 },
  { date: "2024-04-04", leads: 242 },
  { date: "2024-04-05", leads: 373 },
  { date: "2024-04-06", leads: 301 },
  { date: "2024-04-07", leads: 245 },
  { date: "2024-04-08", leads: 409 },
  { date: "2024-04-09", leads: 59 },
  { date: "2024-04-10", leads: 261 },
  { date: "2024-04-11", leads: 327 },
  { date: "2024-04-12", leads: 292 },
  { date: "2024-04-13", leads: 342 },
  { date: "2024-04-14", leads: 137 },
  { date: "2024-04-15", leads: 120 },
  { date: "2024-04-16", leads: 138 },
  { date: "2024-04-17", leads: 446 },
  { date: "2024-04-18", leads: 364 },
  { date: "2024-04-19", leads: 243 },
  { date: "2024-04-20", leads: 89 },
  { date: "2024-04-21", leads: 137 },
  { date: "2024-04-22", leads: 224 },
  { date: "2024-04-23", leads: 138 },
  { date: "2024-04-24", leads: 387 },
  { date: "2024-04-25", leads: 215 },
  { date: "2024-04-26", leads: 75 },
  { date: "2024-04-27", leads: 383 },
  { date: "2024-04-28", leads: 122 },
  { date: "2024-04-29", leads: 315 },
  { date: "2024-04-30", leads: 454 },
]

const chartConfig = {
  leads: {
    label: "Total de Leads Coletados",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Grafico() {
  const totalLeads = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.leads, 0),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Gráfico de Leads Coletados</CardTitle>
          <CardDescription>
            Mostrando o total de leads coletados nos últimos dias
          </CardDescription>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              {chartConfig.leads.label}
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {totalLeads.toLocaleString()}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="leads"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey="leads" fill={`var(--color-leads)`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
