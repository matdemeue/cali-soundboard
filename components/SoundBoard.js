import { Fragment } from "react";
import Sound from "./Sound";

const SoundBoard = ({ sounds }) => {

    return (
        <Fragment>
            { !!sounds && sounds.map((sound) => <Sound key={sound.id} sound={sound} />)}
        </Fragment>
    )
}

export default SoundBoard;