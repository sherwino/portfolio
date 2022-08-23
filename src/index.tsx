import { reactjs } from './version/reactjs/index';
import { vanillaJs } from "./version/vanillajs/index";

const toolSelect = document.getElementById("tool-select");
const langLegend = document.getElementById("lang-legend");
const radios = document.getElementsByClassName("radio-switches");
const preferedLang = window.navigator.language;


const handleToolSelect = (e) => {
    console.log("handleToolSelect", e.target.value)
    const value = e.target.value;

    switch (value) {
        case "vanillajs":
            vanillaJs();
            break;
        case "vuejs":
            console.log("load vuejs page");
            break;
        case "reactjs":
            console.log("load reactjs page");
            reactjs();
            break;
        case "angular":
            console.log("load angular page")
            break;
        case "handlebars":
            console.log("load handlebars page")
            break;
        case "next":
            console.log("load next page")
            break;
        case "remix":
            console.log("load remix page")
            break;
        case "svelte":
            console.log("load svelte page")
            break;
        case "mithrill":
            console.log("load mithrill page")
            break;
        case "erb":
            console.log("load erb page")
            break;
        default:
            console.log("load default page", value)
            renderDefault();
            break;
    }
}

const renderDefault = () => {
    vanillaJs();
}

const onLoad = () => {
    renderDefault();
    registerEventListeners();
}

const onUnload = () => {
    unregisterEventListeners();
}

const clearPreviousRadioSelection = (selectedValue, radioGroup) => {
    const radioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[name="${radioGroup}"]`);

    radioInputs.forEach((element) => {
        const elementValue = element?.value;
        const isNotSelectedValue = elementValue !== selectedValue;
        if (isNotSelectedValue && element.parentElement) {
            element.parentElement.classList.remove("radio-checked")
        }
    });
}

const handleRadioSelect = (e: Event & { target: HTMLInputElement }): void => {
    const target = e?.target;
    const { parentElement, value, name } = target || {};

    if (value && name && parentElement) {
        parentElement.classList.add("radio-checked");
        clearPreviousRadioSelection(value, name);
    }

}

const handleMouseEnter = (e: MouseEvent & {target: HTMLElement}) => {
const target = e.target;
const legendDetail = target.firstElementChild as HTMLObjectElement;
const preferredEl = document.getElementById("preferred-lang")
console.log("handleMouseEnter", {e, target, legendDetail})
if (legendDetail && preferredEl) {
    legendDetail.style.display = "inline-block";
    legendDetail.style.opacity = "1";
    preferredEl.innerText = preferedLang;
    
}
}

const handleMouseLeave = (e: MouseEvent & {target: HTMLElement}) => {
const target = e.target;
const legendDetail = target.firstElementChild as HTMLObjectElement;
console.log("handleMouseLeave", {e, target, legendDetail})
if (legendDetail) {
    legendDetail.style.opacity = "0";
    legendDetail.style.display = "none";
}
}

const addEventToCollection = (collection: HTMLCollection, eventType: Event["type"], handler: (e: Event) => void) => {
    for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        element.addEventListener(eventType, handler)
    }
}

const removeEventFromCollection = (collection, eventType, handler) => {
    for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        element.removeEventListener(eventType, handler)
    }
}

const registerEventListeners = () => {
    console.log("register")
    toolSelect && toolSelect.addEventListener("change", handleToolSelect);
    langLegend && langLegend.addEventListener("mouseenter", handleMouseEnter);
    langLegend && langLegend.addEventListener("mouseleave", handleMouseLeave);
    addEventToCollection(radios, "change", handleRadioSelect);
}

const unregisterEventListeners = () => {
    toolSelect && toolSelect.removeEventListener("change", handleToolSelect)
    langLegend && langLegend.removeEventListener("mouseenter", handleMouseEnter);
    langLegend && langLegend.removeEventListener("mouseleave", handleMouseLeave);
    removeEventFromCollection(radios, "change", handleRadioSelect);

}

window.onload = onLoad
window.onunload = onUnload