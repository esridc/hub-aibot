
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


    const response = await fetch( this.models['text'], {
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

    const response = await fetch( this.models['image'], {
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
