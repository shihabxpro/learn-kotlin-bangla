/** Bengali numeral formatting for step indicators */
const digits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export const bnDigits = (n: number) =>
  String(n)
    .padStart(2, "0")
    .replace(/\d/g, (d) => digits[Number(d)]);
