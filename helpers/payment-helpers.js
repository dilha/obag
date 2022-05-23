const createPaymentObject = (auth, invoiceId, amount) => {
   const paymentObject = {
      invoiceId,
      backLink: "https://bag.a-lux.dev/",
      failureBackLink: "https://bag.a-lux.dev/",
      postLink: "https://bag.a-lux.dev/",
      failurePostLink: "https://bag.a-lux.dev/",
      language: "RU",
      description: "Оплата в интернет магазине",
      terminal: "67e34d63-102f-4bd1-898e-370781d0074d",
      amount,
      currency: "KZT",
      cardSave: false  // Параметр должен передаваться как Boolean
   };
   
   paymentObject.auth = auth;
   return paymentObject;
};

export { createPaymentObject }