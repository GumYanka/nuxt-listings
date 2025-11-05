export function formatDate(
  dateStr: string,
  format: "short" | "long" = "short"
) {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) return "";

  if (format === "short") {
    return date.toLocaleDateString("en-US");
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
}
