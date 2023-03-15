import "./styles.css";
import { getCatalog, getFilters } from "./service";
import { useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { FiltersPanel } from "./FiltersPanel";

/* 

Build a catalog viewer (list & filter)
- Items list => https://skarve-dev.s3.ap-south-1.amazonaws.com/catalog_v1.json
- Filters config => https://skarve-dev.s3.ap-south-1.amazonaws.com/filters_v1.json

Tips
- Write clean, well-structured code, with supporting test cases.
- Use appropriate coding best practices & guidelines wherever possible

*/

export default function App() {
  const [filters, setFilters] = useState([]);
  const [models, setModels] = useState([]);

  const [selectionsString, setSelectionsString] = useState("");

  useEffect(() => {
    Promise.all([getCatalog(), getFilters()]).then((responses) => {
      const [_models, _filters] = responses;
      setModels(_models);
      setFilters(_filters);
    });
  }, []);

  return (
    <div className="App">
      <h1>Catalog Viewer</h1>
      <div class="Selections">Selected: {selectionsString}</div>
      <div id="CatalogViewer">
        <FiltersPanel
          filters={filters}
          setSelectionsString={setSelectionsString}
        />
        <ProductList models={models} />
      </div>
    </div>
  );
}
