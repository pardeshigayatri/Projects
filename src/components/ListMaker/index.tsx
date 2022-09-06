import { useState } from "react";
import React from "react";
export const List = () => {
  const [Result, setResult] = useState("");
  const handleSubmit = () => {
    const data = ParseWithLoop(Result);
    console.log(data);
  };
  const ParseWithLoop = (query: string) => {
    // query -> name=manjit&age=21

    const parameters = query.split("&"); // -> ["name=manjit", "age=21"]

    const pairs: string[][] = [];

    const data: Record<string, string> = {};

    for (let i = 0; i < parameters.length; i++) {
      const singleParameter = parameters[i];

      pairs.push(singleParameter.split("="));
    }

    for (let j = 0; j < pairs.length; j++) {
      const singlePair = pairs[j];

      data[singlePair[0]] = singlePair[1];
    }

    return data;
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
            value={Result}
            onChange={(event) => setResult(event.target.value)}
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
      </div>
    </div>
  );
}; 

