
const AIModels = {
  'nearby': 'https://ajturner-refactored-space-cod-6rr7x76f4gg6-8000.preview.app.github.dev/chat',
  'text': 'https://api.openai.com/v1/chat/completions',
  'image': 'https://api.openai.com/v1/images/generations'
}

/**
 * Optionally set a new ArcgiS service url
 * @param url 
 */
export function setModelUrl(model: string, url:string) {
  AIModels[model] = url;
}

/** 
 * Esri LLM 
 * */

export async function fetchArcGIS(message: string) {

  const response = await fetch( AIModels['nearby'] + '?' + new URLSearchParams({
    query: message
  }));

  // Currently just the text directly!
  const text:string = await response.text();
  return text;
}
  /**
   * Query ChatGPT directly
   */
  export async function fetchTextChat(message: string, language: string = 'en', personality:string, apikey:string) {
    
    const modelMap = {
      en: "gpt-3.5-turbo",
      es: 'curie',
      fr: 'davinci',
    };
    const model = modelMap[language] || "gpt-3.5-turbo";


    const response = await fetch( AIModels['text'], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apikey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {"role": "system", "content": personality},
          {role: "user", content: message}
        ],
        temperature: 0.4
      }),
    });

    const data = await response.json();
    const text = data.choices[0]?.message?.content;

    return text;
  }

  export async function fetchImageChat(message: string, apikey:string) {

    const response = await fetch( AIModels['image'], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apikey}`,
      },
      body: JSON.stringify({
        prompt: message,
      }),
    });

    const data = await response.json();
    const imageUrl = data.data[0]?.url;

    return imageUrl;

  }  
