import { useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const [convertedAmount, setConvertedAmount] = useState();

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setTo(from);
    setFrom((prev) => (prev === to ? prev : to));
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md space-y-6"
      >
        {/* From InputBox */}
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          oncurrencychange={(currency) => setFrom(currency)}
          selectcurrency={from}
          onamountchange={(amount) => setAmount(amount)}
          className="w-full"
        />

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={swap}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Swap
          </button>
        </div>

        {/* To InputBox */}
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          oncurrencychange={(currency) => setTo(currency)}
          selectcurrency={to}
          amountDisable
          className="w-full"
        />

        {/* Convert Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
