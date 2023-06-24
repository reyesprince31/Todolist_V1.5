export default function toDate() {
  const date = new Date();
  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return date.toLocaleDateString("en-US", option);
}
