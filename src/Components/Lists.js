// These files are being merged into to the index.js file in public
const createList = (sectionData, id) => {
  const list = document.createElement("ul");
  list.id = id + "-list";
  list.className = "section-list";

  sectionData.list.forEach((listItem) => {
    const item = document.createElement("li");
    item.className = "section-item";
    item.innerHTML = listItem;

    list.appendChild(item);
  });

  return list;
};
