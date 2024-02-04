const [inputText, setInputText] = useState('');
  const [openAIapiResponse, setOpenAIapiResponse] = useState('');
  const [googleApiResponse, setGoogleApiResponse] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  const handleAPICall = () => {
    const openAIapiURL = "http://localhost:8000/api/generate_text";

    //Make API POST Request
    fetch(openAIapiURL, {
      method: 'POST', 
      body: JSON.stringify({prompt: inputText}),
      headers: {
        'Contnet-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setOpenAIapiResponse(data.text);
      const googleApiURL = "http://localhost:8000/api/tts";
      return fetch(googleApiURL, {
        method: 'POST',
        body: JSON.stringify({text: data.text}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      setGoogleApiResponse(data.audio);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };