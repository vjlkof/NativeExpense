export default function getFormattedDate (date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + Number(date.getMonth() + 1);
  const day = date.getDate() + 1 > 9 ? date.getDate() + 1 : '0' + Number(date.getDate() + 1);

  return (year + '-' + month + '-' + day);
}
