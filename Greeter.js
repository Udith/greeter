const AWS = require('aws-sdk');
const translate = new AWS.Translate();
const moment = require("moment");

exports.handler = async (event) => {

    let name = event['name'];
    let language = event['language'];

    let greetingEn = getGreetingEn(name);

    try {
        let greetingTranslated = await translate.translateText({
            SourceLanguageCode: "en",
            TargetLanguageCode: language,
            Text: greetingEn
        }).promise();

        console.log("Translated at:", moment().format('YYYY-MMM-DD @ HH:mm'));
        return greetingTranslated;

    } catch (err) {
        console.log("Failed to translate greeting to language", language, err);
        return greetingEn;
    };
};

function getGreetingEn(name) {
    return `Hello ${name}`;
}