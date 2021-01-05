const mainBody = document.getElementById("main");

const createSection = (sectionData) => {
  if (sectionData && sectionData.featured) {
    const id = sectionData?.id;
    const section = document.createElement("section");
    const title = sectionData.title && createTitle(sectionData, id);
    const message = sectionData.message && createMessage(sectionData, id);
    const list = sectionData.list && createList(sectionData, id);

    section.id = id;
    section.className = "floating-section";

    title && section.appendChild(title);
    message && section.appendChild(message);
    list && section.appendChild(list);
    mainBody.appendChild(section);
  }
};
