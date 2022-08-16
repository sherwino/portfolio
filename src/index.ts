import { createSection } from "./create";
import { DATA } from "./const";

const renderSections = (sections) => {
  sections.forEach((section) => {
    createSection(section);
  });
};

if (DATA && DATA?.sections) {
  renderSections(DATA.sections);
} else {
  console.info("Missing some data to render this page")
}
