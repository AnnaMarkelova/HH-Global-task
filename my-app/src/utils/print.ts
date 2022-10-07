import { ItemType } from "../types/item";
import { Settings } from "../types/settings";
import { calculateItemCost, calculateMargin, calculateTotalCost } from "./cost";

export const printItems =(items: ItemType[], settings: Settings) => {
  let printedText = '';
  let totalCost = 0;
  items.forEach((item) => {
    let itemCost = calculateItemCost(item.cost, item.isExempt, settings.saleTax);
    let margin = calculateMargin(item.cost, settings.margin, settings.isExtraMargin, settings.extraMargin);
    printedText += `${item.name}: ${settings.currency} ${itemCost}`;
    totalCost += calculateTotalCost(itemCost, margin)
  });
  printedText += `total: ${settings.currency} ${Number(totalCost).toFixed(2)}`
  return printedText;
};