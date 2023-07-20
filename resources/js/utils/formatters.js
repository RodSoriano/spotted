const charactersOnly = (input) => {
  const { value } = input.target;
  const inputValue = value.replace(/[^a-z ]/gi, '');

  return inputValue;
};

const numbersOnly = (input) => {
  const { value } = input.target;
  const inputValue = value.replace(/[^0-9]/g, '');

  return inputValue;
};

export { charactersOnly, numbersOnly };
