import React, { useState } from "react";
export const Chances: React.FC = () => {
  const [Query, setQuery] = useState("");

  const handleSubmit = () => {
    const arr = Query.split("");
    const data = permutator(arr);
    console.log(data);
  };

  const permutator = (permutation: string[]) => {
    var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1,
      k,
      p;

    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
     return result.map((res) => res.join(""));
  };
  return (
    <div className="flex flex-col justify-center gap-8 items-center content-center py-36">
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          First name
        </label>
        <input
          type="text"
          id="first_name"
          value={Query}
          onChange={(event) => setQuery(event.target.value)}
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
  );
};
