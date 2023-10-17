import "./ModalActon.scss";

export default function ModalAction(props) {
    if(props.open){
        return (
            <div className="modal">
                <h1> Componente modal</h1>
                <button onClick={()=>}></button>
            </div>
        )
    }
}