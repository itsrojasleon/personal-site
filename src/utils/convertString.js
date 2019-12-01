// This function should receive one strning as argument (str)
// Will return str with "dash" and everything to lowercase
// Example
// "Search Music App" => "search-music-app"

const convertString = str => {
  // Replace whitespaces with "-"
  return str.toLowerCase().replace(/\s/g, '-');
};
export default convertString;
