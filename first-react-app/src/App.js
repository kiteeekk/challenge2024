export function App() {
  const fruits = ["Apple", "Orange", "Banana"]
  return (
    <div>
      <ol>
        {fruits.map(fruit => <li>{fruit}</li>)}
      </ol>
    </div>
  );
}
