import { Button, Input } from 'planning-poker-components-library';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


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
    width: 400px;
    padding: 40px;
    background: rgba(0,0,0,.5);
    box-sizing: border-box;
    box-shadow: 0px 0px 3px 0px rgb(172, 171, 169);
    margin: 20px
`

const LoginBoxTitle = styled.h2`
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
`

function CreateNewGame(){

    const [newGameName, setNewGameName] = useState("");
    const [existingGameCode, setExistingGameCode] = useState("");

    const navigate = useNavigate();

    const handleGameNameChange = (event: FormEvent<HTMLInputElement>) => {
        console.log("new game name", event);
        setNewGameName(event.currentTarget.value);
    }

    const handleGameCodeChange = (event: FormEvent<HTMLInputElement>) => {
        console.log("existing game code", event);
        setExistingGameCode(event.currentTarget.value);
    }

    const handleButtonCreateGameClick = (event: FormEvent<HTMLButtonElement>) => {
        // axios request to create
        console.log("create game");
        try {
            // const api = new ApiClient();
            // const results = await api.game.createGame(data.userInputGameName);
      
            // let gameId = results.guid;
            // localStorage.setItem("gameId", gameId);
            // console.log(gameId);
            // navigate(`/game/${gameId}/join`);
            navigate(`/game/${existingGameCode}/join`);
          } catch (error) {
            console.error(error);
          }
    }

    const handleButtonJoinGameClick = (event: FormEvent<HTMLButtonElement>) => {
        console.log("join game");
        // axios request to create
        navigate(`/game/${existingGameCode}/join`);
    }

    return(
        <ModalBox>
            <Container>
                <LoginBox>
                    <LoginBoxTitle>Create new game</LoginBoxTitle>
                        <form>
                            <Input label='Game name' inputValue={newGameName} onChange={handleGameNameChange}/>
                            <br/>
                            <Button label={'Create'} styleType={"raspberry"} onClick={handleButtonCreateGameClick}/>
                        </form>
                </LoginBox>
                <LoginBox>
                    <LoginBoxTitle>Join existing game</LoginBoxTitle>
                        <form>
                            <Input label='Game code' inputValue={existingGameCode} onChange={handleGameCodeChange}/>
                            <br/>
                            <Button label={'Join'} styleType={"orange"} onClick={handleButtonJoinGameClick}/>
                        </form>
                </LoginBox>
            </Container>
        </ModalBox>
    )
}

export default CreateNewGame