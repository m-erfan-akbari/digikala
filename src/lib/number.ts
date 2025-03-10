export function formatNumberWithCommas(number: number) {
  // Convert the number to a string and use regex to insert commas
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
