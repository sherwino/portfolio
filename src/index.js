const getHomeData = firebase.database().ref("/home").once("value");

const renderSections = (sections) => {
  sections.forEach((section) => {
    createSection(section);
  });
};

getHomeData.then((snapshot) => {
  const data = snapshot?.val();

  if (data && data?.sections) {
    const sortedSections = data.sections.sort((a, b) => a?.order > b?.order);
    renderSections(sortedSections);
  }
});
