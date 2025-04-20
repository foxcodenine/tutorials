type InvestmentYear = {
    year: number;
    startingBalance: number;
    endingBalance: number;
};

function calcInvestments(initial: number, annualContribution: number, rate: number, years: number) {


    const investmentData: InvestmentYear[] = [];
    let currentBalance = initial;

    for (let year = 1; year <= years; year++) {
        
        // For subsequent years, add the annual contribution.
        if (year > 1) {
            currentBalance += annualContribution;
        }

        const endingBalance = currentBalance * rate;
        investmentData.push({
            year,
            startingBalance: currentBalance,
            endingBalance,
        });

        // Update current balance for the next year.
        currentBalance = endingBalance;
    }

    return investmentData;
}


function printResults(investmentData: InvestmentYear[]) {
    investmentData.forEach(({ year, startingBalance, endingBalance }) => {
        console.log(
            `Year ${year}: Start = €${startingBalance.toFixed(2)}, End = €${endingBalance.toFixed(2)}`
        );
    });
}

const results = calcInvestments(1000, 100, 1.05, 5);

printResults(results);