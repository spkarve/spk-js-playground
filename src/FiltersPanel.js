import { useEffect, useState } from "react";
import { computeSelections, getSelectionsString } from "./helpers";

export function FiltersPanel({ filters = [], setSelectionsString }) {
  const [selections, setSelections] = useState([]);

  function updateSelections(category, e) {
    const newSelections = computeSelections(e, category, selections);

    if (!newSelections) {
      setSelections(selections.concat({ category, items: [e?.target?.value] }));
    } else {
      setSelections(newSelections);
    }
  }

  useEffect(() => {
    setSelectionsString(getSelectionsString(selections));
  }, [selections, setSelectionsString]);

  return (
    <div id="FilterPanel">
      {filters.map((filter, i) => {
        return (
          <div class="FilterCategory">
            <div key={i} class="FilterCategoryTitle">
              {filter.title}
            </div>
            <div>
              {filter.options.map((option, j) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      name={option}
                      id={option}
                      value={option}
                      onClick={(e) => updateSelections(filter.title, e)}
                    />
                    <label for={option}>{option}</label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
