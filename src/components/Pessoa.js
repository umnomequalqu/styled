import react from 'react'
import { Conteudo } from '../Styled/Layout'
function Pessoa(props) {
    const fullName = props.name.title + " " + props.name.first + " " + props.name.last;

    return (
        <Conteudo>{fullName}</Conteudo>
    )
}
export default Pessoa