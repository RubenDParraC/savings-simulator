export const calculateInvestment = (
  initial: number,
  monthly: number,
  months: number
) => {
  // Represents all the money that the user contributes during the period.
  const totalContribution = initial + monthly * months;
  // A fixed annual rate of 5% is applied.
  // It is prorated according to the number of months.
  const interest = totalContribution * 0.05 * (months / 12);
  // It is the estimated value that the user would have at the end of the period.
  return totalContribution + interest;
};
