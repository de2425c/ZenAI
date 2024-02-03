import openai
import os
from unicodedata import name
from google.cloud import texttospeech_v1
from urllib import response

openai.api_key = "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"
messages = []
messages.append({"role": "system", "content": "You are a chatbot that is guiding me through a meditation session, and takes input in order to create the most beneficial session for my circumstances. Output in SSML"})

message = input()
messages.append({"role": "user", "content": message})
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=messages)
reply = response["choices"][0]["message"]["content"]
messages.append({"role": "assistant", "content": reply})

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'deep-tracer-413217-0da78493a7eb.json'
client = texttospeech_v1.TextToSpeechClient()

synthesis_input = texttospeech_v1.SynthesisInput(ssml=reply)

voice1 = texttospeech_v1.VoiceSelectionParams(
    name = 'en-US-Standard-C',
    language_code = 'en',
    ssml_gender = texttospeech_v1.SsmlVoiceGender.FEMALE
)

audio_config = texttospeech_v1.AudioConfig(
    speaking_rate=0.75,
    audio_encoding = texttospeech_v1.AudioEncoding.MP3
)

response1 = client.synthesize_speech(
    input = synthesis_input,
    voice = voice1,
    audio_config=audio_config
)

with open('audio.mp3','wb',) as output:
    output.write(response1.audio_content)

