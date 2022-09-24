import { useState } from "react";

const Sound = ({ sound }) => {
    const [isPlaying, setPlaying] = useState(false);

    const playAudio = (url) => {
        const sound = new Audio(url);
        sound.play();
    }

    return (
        <div className="sound" onClick={(e) => playAudio(sound.soundURL)}>
            <span>{ sound.soundName }</span>
        </div>
    )
}

export default Sound;