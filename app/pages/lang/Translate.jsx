import axios from 'axios'


const Translate = async (text, targetLanguage) => {
    const apiKey =  'a46ab7ed82msh99d6971629852b0p16c1a3jsnec10ba166c0c'
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text'

    try {
        const response = await axios.post(url, {}, { 
            headers: {
                'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey,
            },
            });

            const translate = response.data.data.translations[0].translate;

            return translate;
    } catch (error) {
        console.error('Translation error', error)
        return  null;
    }
  
}

export default Translate