import { BaseStatsContainerStyled, ContainerDataStatisticStyled, DataTextContainerStyled, LevelStatisticStyled, LineStatisticStyled } from "./BaseStatsStyles";

const BaseStats = ({ stats = [], typeSelected }) => {
    
    const maxStat = 250;

    const baseStatNames = {
        hp: "hp",
        attack: "atk",
        defense: "def",
        "special-attack": "satk",
        "special-defense": "sdef",
        speed: "spd",
    };

    return (
        <ContainerDataStatisticStyled>
            {
                stats.map((stat, index) => (
                    <BaseStatsContainerStyled key={ index }>
                        <DataTextContainerStyled>
                            <h4>{ baseStatNames[stat.stat.name].toUpperCase() }</h4>
                            
                            <LineStatisticStyled>
                                <LevelStatisticStyled
                                    width = { (stat.base_stat / maxStat) * 100 + "%" }
                                    background = { typeSelected }
                                />
                            </LineStatisticStyled>
                            <p>{ stat.base_stat }</p>
                        </DataTextContainerStyled>
                    </BaseStatsContainerStyled>
                ))
            }
        </ContainerDataStatisticStyled>
    );
};

export default BaseStats;