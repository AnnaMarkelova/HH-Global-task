import { ItemType } from "../types/item-type";
import { UserSetting } from "../types/user-setting-type";
import { calculateItemCost, calculateMargin, calculateTotalCost } from "./cost-utils";

export const printItems =(items: ItemType[], userSetting: UserSetting) => {
  let printedText = '';
  let totalCost = 0;
  items.forEach((item) => {
    let itemCost = calculateItemCost(item.cost, item.isExempt, userSetting.saleTax);
    let margin = calculateMargin(item.cost, userSetting.margin, userSetting.isExtraMargin, userSetting.extraMargin);
    printedText += `${item.name}: ${userSetting.currency} ${itemCost}`;
    totalCost += calculateTotalCost(itemCost, margin)
  });
  printedText += `total: ${userSetting.currency} ${Number(totalCost).toFixed(2)}`
  return printedText;
};