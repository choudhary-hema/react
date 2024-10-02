import React from "react";

function InputBox({
  label,
  selectcurrency,
  amount,
  oncurrencychange,
  onamountchange,
  currencyOptions,
  amountDisable = false
}) {
  return (
    <div className="space-y-4">
      {/* Label and Input for Amount */}
      <div>
        <label className="block text-sm font-medium text-blue-600">
          {label}
        </label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}
          disabled={amountDisable}
          className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
        />
      </div>

      {/* Label and Dropdown for Currency Type */}
      <div>
        <label htmlFor="currency" className="block text-sm font-medium text-blue-600">
          Currency Type
        </label>
        <select
          id="currency"
          className="mt-1 block w-full bg-white border border-blue-500 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          value={selectcurrency}
          onChange={(e) => oncurrencychange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
