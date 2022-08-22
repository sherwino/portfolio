import { reactjs } from './version/reactjs/index.tsx';
import { vanillaJs } from "./version/vanillajs/index";

const toolSelect = document.getElementById("tool-select");


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

const registerEventListeners = () => {
    console.log("register")
    toolSelect.addEventListener("change", handleToolSelect)
}

const unregisterEventListeners = () => {
    toolSelect.removeEventListener("change", handleToolSelect)
}

window.onload = onLoad
window.onunload = onUnload