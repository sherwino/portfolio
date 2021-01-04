const getHomeData = firebase.database().ref("/home").once("value");

const renderSections = (sections) => {
  sections.forEach((section) => {
    createSection(section);
  });
};

// const renderLists = (...lists) => {
//   for (let i = 0; i < lists.length; i++) {
//     CreateList(lists[i]);
//   }
// };

getHomeData.then((snapshot) => {
  const data = snapshot?.val();

  if (data && data?.sections) {
    const sortedSections = data.sections.sort((a, b) => a?.order > b?.order);
    renderSections(sortedSections);
  }

  // if (data.lists) {
  //   renderLists(data.lists);
  // }
});
