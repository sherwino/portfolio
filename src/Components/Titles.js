const createTitle = (sectionData, id) => {
  const title = document.createElement("h4");
  title.id = id + "-title";
  title.className = "section-title";
  title.innerHTML = sectionData.title;

  return title;
};
