import React from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { sales, salesData, usersData } from "../../data"

const Home = () => {
  return (
    <div className="p-6 space-y-8 bg-background min-h-screen">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-textPrimary">
          Dashboard Overview
        </h1>
        <p className="text-textSecondary">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sales.map((item) => (
          <div
            key={item.num}
            className="bg-card border border-borderColor shadow-sm rounded-xl p-5"
          >
            <h3 className="text-sm text-textSecondary mb-2.5">{item.title}</h3>
            <p className="text-2xl font-bold text-textPrimary">{item.num}</p>
          </div>
        ))}
      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 shadow rounded-xl bg-card">
          <h3 className="font-semibold text-textPrimary mb-4">Sales Chart</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#6366F1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 shadow rounded-xl bg-card">
          <h3 className="font-semibold text-textPrimary mb-4">
            Users Growthrs
          </h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={usersData}>
              <CartesianGrid stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Bar dataKey="users" fill="#06B6D4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Home
