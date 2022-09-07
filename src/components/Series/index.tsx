import React, { useState } from "react";
export const Calculate = () => {
  const [given, setgiven] = useState("");
  const [result, setResult] = useState<number[]>([]);

  const handleSubmit = () => {
    const data = calSeries(given);
    setResult(data);
  };

  const calSeries = (word: string) => {
    var int = parseInt(word);

    const sequence: number[] = [];

    var a = 0,
      b = 1,
      c,
      i;
    if (int == 0) return [a];
    for (i = 1; i <= int; i++) {
      c = a + b;
      a = b;
      b = c;
      sequence.push(c);
    }
    return sequence;
  };

  return (
    <div>
      <div className="flex flex-col justify-center gap-8 items-center content-center py-36">
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            value={given}
            onChange={(event) => setgiven(event.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Here"
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full"
        >
          Button
        </button>
        <ul>
          {result.map(function (item) {
            return <li key={item}> {item} </li>;
          })}
        </ul>
      </div>
    </div>
  );
};
