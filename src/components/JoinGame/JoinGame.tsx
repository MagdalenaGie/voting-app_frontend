import { Button, Checkbox, Input, RadioAvatars } from "planning-poker-components-library"
import { FormEvent, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import './temp.css'

const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 40px;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
`

const LoginBox = styled.div`
    width: 1200px;
    padding: 40px;
    background: rgba(0,0,0,.5);
    box-sizing: border-box;
    box-shadow: 0px 0px 3px 0px rgb(172, 171, 169);
    margin: 20px;
    margin-top: 100px;
`

const JoinGameBoxTitle = styled.h2`
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
`

const JoinGameBoxInfo = styled.p`
    margin: 0 0 30px;
    padding: 0;
    font-size: 14px;
    color: #03e9f4;
    text-align: center;
`



function JoinGame(){

    const [selectedAvatarId, setSelectedAvatarId] = useState(1);
    const [selectedUsername, setSelectedUsername] = useState("");
    const [isSpectator, setIsSpectator] = useState(false);

    let { gameId } = useParams();
    
    const navigate = useNavigate();
    
    const handleCheckboxChange = (event: FormEvent<HTMLInputElement>) => {
        setIsSpectator(!isSpectator);
    }
    
    const handleInputValueChange = (event: FormEvent<HTMLInputElement>) => {
        setSelectedUsername(event.currentTarget.value);
    }

    const handleButtonClick = (event: FormEvent<HTMLButtonElement>) => {
        console.log("values", selectedAvatarId, selectedUsername, isSpectator);
        console.log("navigate to game");
        navigate(`/game/${gameId}`);
    }

    return(
        <ModalBox>
            <Container>
                <LoginBox>
                    <JoinGameBoxTitle>Create your player</JoinGameBoxTitle>
                    <JoinGameBoxInfo>Enter your name and choose your character. Don't forget to check the box if you're just a spectator!</JoinGameBoxInfo>
                        <form>
                            <Input label='Player name' inputValue={selectedUsername} onChange={handleInputValueChange}/>
                            <br/>
                            <Checkbox label={"I am a spectator"} isChecked={isSpectator} onChange={handleCheckboxChange}/>
                            <br/>
                            <RadioAvatars avatarIdValue={selectedAvatarId} avatarIdSetter={setSelectedAvatarId}/>
                            <br/>
                            <Button label={'Create'} styleType={"raspberry"} onClick={handleButtonClick}/>
                        </form>
                </LoginBox>
            </Container>
        </ModalBox>
    )
}

export default JoinGame