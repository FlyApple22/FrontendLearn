function App() {
  //写js的地方
  const fruit = ["apple", "banana", "orange"];
  // const newArray = [];
  // for (let index = 0; index < fruit.length; index++) {
  //   newArray.push(<li>{fruit[index]}</li>);
  // }
  //写html的地方
  return (
    <div>
      {fruit.map((e, index) => (
        <li key={index}>{index}</li>
      ))}
    </div>
  );
}

export default App;
