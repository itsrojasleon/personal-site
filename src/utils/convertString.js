// This function should receive one strning as argument (str)
// Will return str with "dash" and everything to lowercase
// Example
// "Search Music App" => "search-music-app"

function convertString(str) {
  let converted = '';
  // Replace whitespaces with "-"
  converted = str.toLowerCase().replace(/\s/g, '-');
  return converted;
}
export default convertString;
