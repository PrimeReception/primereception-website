"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(5);
  const [customerValue, setCustomerValue] = useState(500);

  const monthlyLoss = missedCalls * 4 * customerValue;
  const annualLoss = monthlyLoss * 12;

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
      <div className="space-y-8">
        {/* Missed calls slider */}
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-charcoal mb-3">
            <span>How many calls do you miss per week?</span>
            <span className="text-2xl font-bold text-navy">{missedCalls}</span>
          </label>
          <input
            type="range"
            min={1}
            max={30}
            value={missedCalls}
            onChange={(e) => setMissedCalls(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1</span>
            <span>15</span>
            <span>30</span>
          </div>
        </div>

        {/* Customer value slider */}
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-charcoal mb-3">
            <span>Average customer value ($)</span>
            <span className="text-2xl font-bold text-navy">
              ${customerValue.toLocaleString()}
            </span>
          </label>
          <input
            type="range"
            min={50}
            max={5000}
            step={50}
            value={customerValue}
            onChange={(e) => setCustomerValue(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>$50</span>
            <span>$2,500</span>
            <span>$5,000</span>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl bg-navy p-6 text-white text-center">
          <p className="text-sm text-gray-300 mb-1">
            You&apos;re potentially losing
          </p>
          <p className="text-4xl font-bold text-white">
            ${monthlyLoss.toLocaleString()}
            <span className="text-lg font-normal text-gray-300">/month</span>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            That&apos;s{" "}
            <span className="font-semibold text-green">
              ${annualLoss.toLocaleString()}
            </span>{" "}
            per year in lost revenue
          </p>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-sm text-gray-300">
              PrimeReception starts at just{" "}
              <span className="font-bold text-green">$249/month</span> —
              less than the cost of one missed customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
