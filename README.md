# devfestmeditation

![gallery (1)](https://github.com/de2425c/devfestmeditation/assets/154690407/80806dc3-2d66-4f96-8f65-6d107b8e44a6)

# Inspiration
We realize that meditation is an invaluable way to improve mental health, but at the same time, people may feel left out in the process. We wanted to create a platform where meditation was not only personalized to every user's situation, but was acessible widely.

# What it does
ZenAI is a GPT powered bot, with specific prompting that allows GPT to respond in over 20 different languages, and multiple voices. It takes in a situation, Such as "I am prepping for a big test, guide me through a 5 minute meditation", and will guide the user through a calming meditation session powered by Google's Text-To-Speech v1 API.

# How we built it
We built the backend with both ChatGPT's API and Google-Cloud's API. There is also a language detection library in python, as well as concatenation of .Wav files to overlay sound effects. On the front end, we used React, a mixture of many languages in order to provide an optimal UI

# Challenges we ran into
It was hard to get ChatGPT to do natural pauses while narrating, so we used tools to scan the output and insert natural pauses during the meditation, such as at the end of a sentence, or a comma.

```python
with open('backend/audio_files/zaudio.wav','wb',) as output:
            if not text:
                combined += pause5s
            else:
                synthesis_input = texttospeech.SynthesisInput(text=text)
                response = client.synthesize_speech(
                    input = synthesis_input,
                    voice = voice1,
                    audio_config = audio_config
                )
                output.write(response.audio_content)
```
# Accomplishments that we're proud of
We're proud of the fact that ZenAI will work in over 20 different languages natively, due to ChatGPT's API and language detection packages in python

# What we learned
A lot about the science of meditation, as well as how powerful the google-cloud api is in python and other languages.

# What's next for ZenAI
We're interested in expanding ZenAI to create detailed, personalized meditation plans for users.

