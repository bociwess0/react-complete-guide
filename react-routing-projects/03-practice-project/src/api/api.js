const addQuoteFunction = async (quoteData) => {
  const response = await fetch(
    'https://react-routing-42d52-default-rtdb.firebaseio.com/quotes.json',
    {
      method: 'POST',
      body: JSON.stringify({
        author: quoteData.author,
        description: quoteData.text,
      }),
    }
  );
  
  if (!response.ok) {
    throw new Error('Sending data failed.');
  }

  const data = await response.json();

  return data;
};


export const addQuote = async (quoteData) => {
  try {
    await addQuoteFunction(quoteData);
  } catch(error) {
    console.log(error);
  }
}

  