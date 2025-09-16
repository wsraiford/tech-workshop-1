import Greeting from "@/components/Greeting";


type Props = {
    name: string;
}


const Greeting :((name): Props) => {

return(
    <p className={"txt-black">Hi, {name}!</p>}
       )
}






export default Greeting;