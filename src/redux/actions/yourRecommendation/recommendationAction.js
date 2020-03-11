import * as actions from './RecommendationTypes';

const setText = () => {
  const payload = {
    introduction: [
      'Dear Emmet, Ireland, Asad Sheikh',
      'Many thanks for taking time to speak on 02-02-2020, I hope it was a useful discussion for you and that I was clear on our recommendations. We know this is a big decision for you and so i wanted to follow up in writing up what we discussed but if any of this is unclear and you have questions please do not hesitate to give me a call and we can go through it in as much detail as you need.'
    ],
    circumstances: [
      'Following an analysis of your financial circumstances and based on the information you have provided, our understanding of your requirement is as follows:',
      'You are looking to move home and will be selling your existing peoperty through this process.',
      'You are lookingfor a lon of $0.00. Based on your down payment/equity you will have a loan to value of $0.00.',
      'You have also indicted that you would like to pay off this loan over a period of 2 years.',
      'You have indicated a preference for a fixed rate for 2 years to povide stability to your payments.'
    ],
    recommendation: [
      'We have analyzed your specific circumstances based on how different banks will look at your case. For example; banks will apply discounts to different forms of income, different stress rates and different costs of living to each situation. We have applied this methodology to our analysis and also considered your specific circumstances based on the information and documentation you have provided.',
      'You have stated preference for fixed product to provide your certainty on the cost of your mortgage over the immediate period.',
      'From this analysis and based on our disscussion we believe that the most suitable propduct for you would be a capital and interest mortgage for 30 years with Bank Y.',
      'Bank Y are offering a fixed rate product which is a fixed rate of x for x years, reverting to a variable rate thereafter. This rate is based non your specific loan requirements including the ratio of the mortgage amount to the value of property you are looking to mortgage (this is often refered as Loan to Value or LTV).',
      'This product and rate mean that your monthly mortgage will be X for period of X years, and this is guaranteed not to change. However, after this period it will move to what is called a variable rate which is currently X and at this rate your monthly mortgage will be Y. However, as it is variable this rate may move up or down and so would your mortgage cost.',
      'What these fixed and variable rates actually mean is that you know exactly what you will be paying during the fixed term which is good however if you wanted to move your mortgage during this periopd, there may be a charge or a "breakage fee" that you need to pay the bank. Once you have completed the 3 years period you are then able to move provider without any fees, during that there are batter mortgages available to you at that time.',
      'As this is a "Capital and Interest Annuity mortgages will be fully paid off after 3 years provided all repayments are made when due and you will be mortgage-free!"'
    ],
    applicant1Name: 'Emmet',
    applicant2Name: 'Asad'
  };

  return {
    type: actions.SET_TEXT,
    payload
  };
};

const setExtras = payload => ({
  type: actions.SET_EXTRAS,
  payload
});

const setExtrasFromPageTwo = payload => ({
  type: actions.SET_EXTRAS_FROM_PAGE_TWO,
  payload
});

const clearExtrasFromPageTwo = () => ({
  type: actions.CLEAR_EXTRAS_FROM_PAGE_TWO
});

export { setText, setExtras, setExtrasFromPageTwo, clearExtrasFromPageTwo };
