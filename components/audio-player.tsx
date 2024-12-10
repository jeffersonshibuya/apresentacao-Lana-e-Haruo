import { Pause, Play, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 13;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to the beginning
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    playMusic();
  }, []);

  return (
    <div className="absolute bottom-0 left-0 z-50 w-full text-center  bg-white/50">
      <audio ref={audioRef} src="/papaya.mp4" preload="auto" />
      <div className="flex items-center gap-4 justify-center">
        {isPlaying ? (
          <button onClick={pauseMusic}>
            <Pause className="size-8" />
          </button>
        ) : (
          <button onClick={playMusic}>
            <Play className="size-8" />
          </button>
        )}
        <button onClick={stopMusic}>
          <Square className="size-8" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
