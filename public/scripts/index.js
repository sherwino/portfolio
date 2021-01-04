"use strict";// These files are being merged into to the index.js file in public
const createList=(a,b)=>{const c=document.createElement("ul");return c.id=b+"-list",c.className="section-list",a.list.forEach(a=>{const b=document.createElement("li");b.className="section-item",b.innerHTML=a,c.appendChild(b)}),c};
"use strict";// These files are being merged into to the index.js file in public
const createMessage=(a,b)=>{const c=document.createElement("p");return c.id=b+"-message",c.className="section-message",c.innerHTML=a.message,c};
"use strict";const mainBody=document.getElementById("main"),createSection=a=>{if(a&&a.featured){const b=null===a||void 0===a?void 0:a.id,c=document.createElement("section"),d=a.title&&createTitle(a,b),e=a.message&&createMessage(a,b),f=a.list&&createList(a,b);c.id=b,c.className="floating-section",d&&c.appendChild(d),e&&c.appendChild(e),f&&c.appendChild(f),mainBody.appendChild(c)}};
"use strict";const createTitle=(a,b)=>{const c=document.createElement("h4");return c.id=b+"-title",c.className="section-title",c.innerHTML=a.title,c};
"use strict";const getHomeData=firebase.database().ref("/home").once("value"),renderSections=a=>{a.forEach(a=>{createSection(a)})};// const renderLists = (...lists) => {
//   for (let i = 0; i < lists.length; i++) {
//     CreateList(lists[i]);
//   }
// };
getHomeData.then(a=>{const b=null===a||void 0===a?void 0:a.val();if(b&&null!==b&&void 0!==b&&b.sections){const a=b.sections.sort((c,a)=>(null===c||void 0===c?void 0:c.order)>(null===a||void 0===a?void 0:a.order));renderSections(a)}// if (data.lists) {
//   renderLists(data.lists);
// }
});

//# sourceMappingURL=index.js.map