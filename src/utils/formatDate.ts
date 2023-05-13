const formatDate = (dateTimeString: string) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const date = new Date(dateTimeString);
  return date.toLocaleDateString(
    "en-US",
    options as Intl.DateTimeFormatOptions
  );
};

export default formatDate;
