const AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = async (event) => {

    let name = event['name'];
    let language = event['lang'];

    let greetingEn = getGreetingEn(name);

    try {
        let greetingTranslated = await translate.translateText({
            SourceLanguageCode: "en",
            TargetLanguageCode: language,
            Text: greetingEn
        }).promise();

        return greetingTranslated;

    } catch (err) {
        console.log("Failed to translate greeting to language", language, err);
        return greetingEn;
    };
};

function getGreetingEn(name) {
    return `Hello ${name}`;
}