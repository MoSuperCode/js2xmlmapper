const js2xmlparser = require("js2xmlparser");

function convertJsonToXml(jsonObj, rootElementName = "root") {
  try {
    return js2xmlparser.parse(rootElementName, jsonObj);
  } catch (error) {
    console.error("Error converting JSON to XML:", error);
    throw error; // Rethrow the error for handling upstream
  }
}

module.exports = { convertJsonToXml };
