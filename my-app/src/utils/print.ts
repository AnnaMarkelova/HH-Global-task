import { Job } from "../types/job";
import { Settings } from "../types/settings";
import { calculateItemCost, calculateMarginCost, calculateTotalCost } from "./cost";

export const printItems = (job: Job, settings: Settings) => {
  const { isExtraMargin, items } = job;
  const { extraMargin, saleTax, currency, margin } = settings;

  let printedText = '';
  let totalCost = 0;
  items.forEach((item) => {
    let itemCost = calculateItemCost(item.cost, item.isExempt, saleTax);
    let marginCost = calculateMarginCost(item.cost, margin, isExtraMargin, extraMargin);
    printedText += `${item.name}: ${currency} ${itemCost}`;
    totalCost += calculateTotalCost(itemCost, marginCost)
  });
  printedText += `total: ${currency} ${Number(totalCost).toFixed(2)}`
  return printedText;
};