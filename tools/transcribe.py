import whisper
import json
from pathlib import Path
from pydub import AudioSegment

# -----------------------------
# CONFIG
# -----------------------------
AUDIO_FILE = Path("data/test-meeting.m4a")
OUTPUT_FILE = Path("data/test-meeting-transcript.json")
MODEL_NAME = "base"              # tiny, small, base, medium, large
CHUNK_LENGTH_MS = 10 * 60 * 1000 # 10 minutes in milliseconds
LANGUAGE = "hu"                  # Hungarian

# -----------------------------
# LOAD MODEL
# -----------------------------
model = whisper.load_model(MODEL_NAME, device="cuda")  # GPU

# -----------------------------
# LOAD AUDIO AND SPLIT INTO CHUNKS
# -----------------------------
audio = AudioSegment.from_file(AUDIO_FILE)
chunks = [audio[i:i + CHUNK_LENGTH_MS] for i in range(0, len(audio), CHUNK_LENGTH_MS)]

full_transcript = ""

print(f"Transcribing {len(chunks)} chunks in Hungarian...")

for idx, chunk in enumerate(chunks):
    chunk_file = Path(f"data/temp_chunk_{idx}.wav")
    chunk.export(chunk_file, format="wav")
    print(f"➡️  Transcribing chunk {idx + 1}/{len(chunks)}")
    
    result = model.transcribe(
        str(chunk_file),
        language=LANGUAGE
    )
    full_transcript += result["text"] + " "
    
    chunk_file.unlink()  # delete temp file

# -----------------------------
# SAVE FINAL TRANSCRIPT
# -----------------------------
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump({"transcript": full_transcript.strip()}, f, ensure_ascii=False, indent=2)

print(f"✅ Full Hungarian transcript saved to {OUTPUT_FILE}")
