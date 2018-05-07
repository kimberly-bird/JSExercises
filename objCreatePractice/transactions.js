financialAdvisor.purchase("APPL", 10, 4)
financialAdvisor.purchase("PBS", 20, 44)
financialAdvisor.purchase("GOOG", 26, 18)
financialAdvisor.sell("PBS", 2, 10)
financialAdvisor.sell("GOOG", 22, 10)
console.log(financialAdvisor);
console.log("total worth:", financialAdvisor.worth());