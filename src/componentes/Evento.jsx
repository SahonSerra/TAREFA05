import Button from "./Eventos/Button";


function Evento(){

        function meuEvento(){
            console.log(` Ativando o Primeiro evento! `)
        }

        function SegundoEvento(){
            console.log(` Ativando o Segundo evento! `)
        }


        


    return(

            <div>

                <p>Clique para disparar um evento: </p>

                

                <Button event={meuEvento} text="Primeiro Evento"/>
                <Button event={SegundoEvento} text="Segundo Evento"/>

               

            </div>
    )
}
export default Evento;