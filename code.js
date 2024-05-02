"use strict";
// figma.showUI(__html__);

const selectedElement = figma.currentPage.selection[0]; //get selected element
const parent = selectedElement.parent; 
const selectedIndex = parent.children.indexOf(selectedElement);
// console.log(selectedIndex);
// console.log(parent.children);
const medium = parent.parent;
const mediumChildren = medium.children;
console.log(mediumChildren);
const data = []
for (let i = 0; i < mediumChildren.length; i++) {
    // Get the current child element
    const childElement = mediumChildren[i];
    data.push(childElement.children[selectedIndex]);
    console.log("Selected element ID:", childElement.children[selectedIndex].id);
}

// let elementToSelect = figma.currentPage.findOne(node => node.name === "Medium");
figma.currentPage.selection = data
// let elementToSelect = []
// for (let i = 0; i < data.length; i++) {
//     figma.currentPage.findOne(node => node.name === "Medium");
// }

figma.closePlugin();