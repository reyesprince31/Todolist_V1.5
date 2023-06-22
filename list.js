export function today() {
  const date = new Date();
  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const dateNow = date.toLocaleDateString("en-US", option);
  return dateNow;
}
