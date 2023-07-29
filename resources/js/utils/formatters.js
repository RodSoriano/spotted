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

const currentDate = (currentDate) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

  return formattedDate;
};

export { charactersOnly, numbersOnly, currentDate };
