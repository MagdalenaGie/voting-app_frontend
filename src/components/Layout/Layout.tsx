import { Navbar, Player } from "planning-poker-components-library";
import { Fragment } from "react";


interface LayoutProps {
    player: Player;
    inGame: boolean;
    gameName?: string;
    gameGuid?: string;
  }

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({player, inGame, gameName, gameGuid, children }) => {
    return(
        <Fragment>
            <Navbar player={player} inGame={inGame} gameName={gameName ?? ""} gameGuid={gameGuid ?? ""}/>
            <main>
                {children}
            </main>
        </Fragment>
    )
}