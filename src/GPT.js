import React, { Component } from 'react'
const { Configuration, OpenAIApi } = require("openai");


export class GPT extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         response: "awaiting response..."
        }
    }

    handleButton() {
      
    }

    componentDidMount() {
        const configuration = new Configuration({
            apiKey: "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",
        });

        const openai = new OpenAIApi(configuration);
        
        const response = openai.createCompletion({
        model: "text-davinci-002",
        prompt: "list the first ten primes:",
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        })
        .then( (response) => {
            this.setState({
                response: `${response.data.choices[0].text}`
            })
        });
    }

  render() {
    const { response } = this.state
    return (
      <div>response: {response}</div>
    )
  }
}

export default GPT