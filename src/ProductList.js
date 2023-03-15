export function ProductList({ models = [] }) {
  console.log(models);
  return (
    <div class="ItemList">
      {models.map((model, i) => {
        return <div>{`${model.make} ${model.model}`}</div>;
      })}
    </div>
  );
}
