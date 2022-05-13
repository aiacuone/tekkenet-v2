import {CharacterTemplate} from "../../components";
import {useRouter} from "next/router";
import {characters} from "../../characters";


const CharacterProvider = () => {
    const route=useRouter()
    const character=route.query.name
    const list=characters[character]

    const props={
        character,list
    }

    return (
        <CharacterTemplate {...props}/>
    );
};

export default CharacterProvider;
