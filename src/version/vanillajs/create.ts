// These files are being merged into to the index.js file in public
export const createList = (sectionData, id) => {
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

export const createTitle = (sectionData, id) => {
    const title = document.createElement("h4");
    title.id = id + "-title";
    title.className = "section-title";
    title.innerHTML = sectionData.title;

    return title;
};

const mainBody = document.getElementById("main");

export const createSection = (sectionData) => {
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

// These files are being merged into to the index.js file in public
export const createMessage = (sectionData, id) => {
    const message = document.createElement("p");
    message.id = id + "-message";
    message.className = "section-message";
    message.innerHTML = sectionData.message;

    return message;
};



