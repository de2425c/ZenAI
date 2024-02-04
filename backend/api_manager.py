from openai import OpenAI
import os
from google.cloud import texttospeech
from urllib import response
from pydub import AudioSegment



class api_manager():
    def __init__(self):
        self.api_key = "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"
        os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'deep-tracer-413217-0da78493a7eb.json'
        

    
    def generate_text(self, prompt):
        client = OpenAI(api_key=self.api_key)
        messages = []
        messages.append({"role": "system", "content": "You are a chatbot that is guiding me through a meditation session, and takes input in order to create the most beneficial session for my circumstances. Output in SSML"})

        messages.append({"role": "user", "content": prompt})
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages)
        
        reply = response.choices[0].message.content
        messages.append({"role": "assistant", "content": reply})

        return reply
    
    def tts(self, text):
        client = texttospeech.TextToSpeechClient()
        voice1 = texttospeech.VoiceSelectionParams(
            name = 'en-US-News-L',
            language_code = 'en',
            ssml_gender = texttospeech.SsmlVoiceGender.FEMALE
        )

        audio_config = texttospeech.AudioConfig(
            speaking_rate=0.8,
            audio_encoding = texttospeech.AudioEncoding.LINEAR16
        )
        pause5s = AudioSegment.from_file("audio_files/blank.wav", format = "wav")

        with open('audio_files/zaudio.wav','wb',) as output:
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
                
        sound = AudioSegment.from_file("audio_files/42-Rain-10min.mp3", format = "mp3")
        sound = sound - 20
        combined = AudioSegment.from_file('audio_files/zaudio.wav',format="wav").overlay(sound, position = 0)
        combined.export("audio_files/final.wav", format="wav")

        return "audio_files/final.wav"


