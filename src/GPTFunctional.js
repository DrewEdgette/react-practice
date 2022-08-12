import React, { useEffect, useState } from 'react'
const { Configuration, OpenAIApi } = require("openai");

function GPTFunctional() {
  const [response, setResponse] = useState("")

  let configuration;
  let openai;

  useEffect(() => {
    configuration = new Configuration({
      apiKey: process.env.REACT_APP_GPT_API_KEY,
    });

    openai = new OpenAIApi(configuration);
    console.log('Finish Setup')
  }, [])

  const handleButton = async () => {
    console.log('handleButton')
    setResponse("awaiting response...")

    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: "list the first ten primes:",
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    setResponse(response.data.choices[0].text)
  }

  return (
    <div>
      response: {response}
      <button onClick={handleButton}>Click</button>
    </div>);
}

export default GPTFunctional;