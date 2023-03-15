export const computeSelections = (e, category, selections) => {
  let isDirty = false;
  const selectedValue = e?.target?.value;

  const newSelections = selections
    .map((selection) => {
      const categoryMatch = category === selection?.category;
      if (!isDirty && categoryMatch) {
        isDirty = true;
      }

      const newItems = categoryMatch
        ? e?.target?.checked
          ? selection.items.concat(selectedValue)
          : selection.items.filter((item) => item !== selectedValue)
        : selection.items;

      return newItems.length
        ? {
            category: selection?.category,
            items: newItems
          }
        : null;
    })
    .filter((selection) => !!selection);

  console.log(newSelections);
  return isDirty ? newSelections : null;
};

export const getSelectionsString = (selections = []) =>
  selections.reduce(
    (acc, selection) =>
      `${(acc += selection.category)}: ${selection.items.join(", ")} | `,
    ""
  );
