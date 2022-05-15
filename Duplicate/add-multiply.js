function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const totalWood  = chairWoodQuantity+tableWoodQuantity+bedWoodQuantity;
    return totalWood;
}
const firstOption = woodCalculation(1, 1, 0);
console.log(firstOption);