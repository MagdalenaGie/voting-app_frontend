import { Button, CardsToSelect, Chart, Player, PlayerCard } from 'planning-poker-components-library';
import { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    padding-top: 20px;
`;

const TableSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
`;

const CardsSection = styled.div`
    position: fixed;
    bottom: 1vh;
    margin: 0 auto;
    width: 100vw;
`;  

const ResultSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

function GameTable(){

    const [shouldReveal, setShouldReveal] = useState(false);

    let player: Player = {
        name: "TestPlayer",
        guid: "sdsdfsd",
        isSpectator:false,
        avatarId:3
    }

    // max - 2 rows x 10 cards "small"
    // mid - 1 row x 8 cards "medium"
    // big - 1 row x 6 cards "large"

    return(
        <Container>
            <ButtonSection>
                <Button label={'Reveal cards & show results'} styleType={"raspberry"}/>
                <Button label={'Copy invite link to clipboard'} styleType={"orange"}/>
            </ButtonSection>
            <TableSection>
                <PlayerCard value={2} selected={true} revealed={true} player={player} size={"large"}/>
                <PlayerCard value={3} selected={true} revealed={true} player={player} size={"large"}/>
                <PlayerCard value={5} selected={true} revealed={true} player={player} size={"large"}/>
                <PlayerCard value={2} selected={true} revealed={true} player={player} size={"large"}/>
                <PlayerCard value={2} selected={true} revealed={true} player={player} size={"large"}/>
                <PlayerCard value={3} selected={true} revealed={true} player={player} size={"large"}/>
            </TableSection>
            <CardsSection>
                <CardsToSelect/>
                {/* <ResultSection>
                    <Chart votes={[2, 3, 5, 2, 3, 3, 3, 3, 3, 5, 5]}/> 
                    <Button label={'Clear the table & start new voting'} styleType={"raspberry"}/>
                </ResultSection> */}
            </CardsSection>
        </Container>
    )
}

export default GameTable