export const calculateTotalCost = (itemCost: number, margin: number) => {
  return 2 * Number(((itemCost + margin) / 2).toFixed(2));
};
export const calculateItemCost = (cost: number, IsExempt: boolean, saleTax: number):number => {
    let tax = IsExempt ? 0 : saleTax;
    return Number((cost + cost * tax / 100).toFixed(2));
};

export const calculateMargin = (cost: number, margin: number, isExtraMargin: boolean, extraMargin: number):number => {
    let extraMarginValue = isExtraMargin ? extraMargin : 0;
    return cost * (margin + extraMarginValue) / 100;
};