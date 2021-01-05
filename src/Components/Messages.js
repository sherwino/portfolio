// These files are being merged into to the index.js file in public
const createMessage = (sectionData, id) => {
  const message = document.createElement("p");
  message.id = id + "-message";
  message.className = "section-message";
  message.innerHTML = sectionData.message;

  return message;
};
