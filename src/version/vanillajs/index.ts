import { createSection } from "./create";
import { DATA } from "../../utils/const";

const renderSections = (sections) => {
  console.log("renderSections", sections)
  sections.forEach((section) => {
    createSection(section);
  });
};

export const vanillaJs = () => {
  if (DATA && DATA?.sections) {
    renderSections(DATA.sections);
  } else {
    console.info("Missing some data to render this page")
  }
}
