import whisper
import json
from pathlib import Path

# Load Whisper model
model = whisper.load_model("small")

# Path to your audio file
audio_path = Path("data/test-meeting.m4a")

# Transcribe audio
result = model.transcribe(str(audio_path))

# Print transcript
print("Transcript:\n", result["text"])

# Save transcript to JSON (for parseTranscript.js)
output_path = Path("data/test-meeting-transcript.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump({"transcript": result["text"]}, f, ensure_ascii=False, indent=2)

print(f"✅ Transcript saved to {output_path}")
