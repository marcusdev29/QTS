const text = `{
    "hello": "bah_gaucho",
    "numbers": [7, 7, 7]
  }`;
  const data = JSON.parse(text);
  console.log(data.hello);
  console.log(data.numbers.length);
  const obj = {
    o: "Brabo",
    numbers: [6, 6, 6],
  };
  const json = JSON.stringify(obj);
  console.log(json);
  // {"hello":"world","numbers":[1,2,3]}
  const json2 = JSON.stringify(obj, null, 2);
  console.log(json2);
  // {
  //   "hello": "world",
  //   "numbers": [
  //     1,
  //     2,
  //     3
  //   ]
  // }