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
      const configuration = new Configuration({
        apiKey: process.env.REACT_APP_GPT_API_KEY,
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

    componentDidMount() {
    
    }

  render() {
    const { response } = this.state
    return (
      <div>
        response: {response}
        <button type="button">Click</button>
      </div>
    )
  }
}

export default GPT