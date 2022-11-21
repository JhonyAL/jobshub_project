import "./index.css";
import perfil from '../../assets/images/perfil-icon.png'
import miyashiro from '../../assets/images/miyashiro.png'
import jobshub_logo from '../../assets/images/jobshub-icon.png'

export default function Chat() {
    return (
        <div className='Chat'>
            <div className="chat-left">
                <div className="chat-left-top">
                    <img src={jobshub_logo} alt="" />
                    <h1>Chat</h1>
                </div>
                <hr />
                <img src={perfil} alt="" className='perfil-icon'/>
                <p>Lucca Vinicius</p>
                <div className="item-chat">
                    <div className="contato">
                        <img src={miyashiro} alt="" />
                        <p>Gustavo Miysashiro</p>
                    </div>
                </div>
            </div>
            <div className="chat">
                <div className="mensages mensages-left">
                    <div className="msg">
                        <img src={miyashiro} alt="" />
                        <p>Iae, Lucca! Tudo bem?</p>
                        <br />
                    </div>
                </div>
                <div className="mensages mensages-right">
                    <div className="msg">
                        <p>Td, e contigo Miyashiro?</p>
                        <img src={perfil} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}