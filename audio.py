# https://habr.com/ru/articles/441090/
# ffmpeg sudo apt remove ffmpeg
# https://www.youtube.com/watch?v=jman_h73JK0
# pip install wheel
# pip install ffprobe
# pip install pydub
from pydub import AudioSegment
from pydub import effects

def convert_to_wav(input_file, output_file):
    audio = AudioSegment.from_file(input_file)
    sound_after = effects.normalize(audio)
    round(sound_after.dBFS,1)
    
    sound_after.export(output_file, format='wav')

input_file = 'audio.m4a'
output_file = 'output.wav'
convert_to_wav(input_file, output_file)
