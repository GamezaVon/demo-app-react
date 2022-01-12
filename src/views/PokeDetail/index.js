import { useParams } from "react-router";

export default function PokeDetail(){
    const { id } = useParams();
    console.log(id);
    return (
        <div>Poke Detail</div>
    );
}