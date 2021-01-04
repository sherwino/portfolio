// These files are being merged into to the index.js file in public
const createList = (sectionData, id) => {
  const list = document.createElement("ul");
  list.id = id + "-list";
  list.className = "section-list";
  sectionData.list.forEach(listItem => {
    const item = document.createElement("li");
    item.className = "section-item";
    item.innerHTML = listItem;
    list.appendChild(item);
  });
  return list;
};
// These files are being merged into to the index.js file in public
const createMessage = (sectionData, id) => {
  const message = document.createElement("p");
  message.id = id + "-message";
  message.className = "section-message";
  message.innerHTML = sectionData.message;
  return message;
};
const mainBody = document.getElementById("main");

const createSection = sectionData => {
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
const createTitle = (sectionData, id) => {
  const title = document.createElement("h4");
  title.id = id + "-title";
  title.className = "section-title";
  title.innerHTML = sectionData.title;
  return title;
};
const getHomeData = firebase.database().ref("/home").once("value");

const renderSections = sections => {
  sections.forEach(section => {
    createSection(section);
  });
}; // const renderLists = (...lists) => {
//   for (let i = 0; i < lists.length; i++) {
//     CreateList(lists[i]);
//   }
// };


getHomeData.then(snapshot => {
  const data = snapshot?.val();

  if (data && data?.sections) {
    const sortedSections = data.sections.sort((a, b) => a?.order > b?.order);
    renderSections(sortedSections);
  } // if (data.lists) {
  //   renderLists(data.lists);
  // }

});

//# sourceMappingURL=index.js.map