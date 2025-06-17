import { BaseStatsContainerStyled, ContainerDataStatisticStyled, DataTextContainerStyled, LineStatisticStyled } from "./BaseStatsStyles";

const BaseStats = ({ stats }) => {
    
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
                            <p>{ baseStatNames[stat.stat.name] }</p>
                            <p>{ stat.base_stat }</p>
                        </DataTextContainerStyled>
                        <LineStatisticStyled>
                            <div style={{ 
                                width: `${ (stat.base_stat / maxStat) * 100 }%`, 
                                backgroundColor: "#f142e1", 
                                height: "15px", 
                                borderRadius: "5px" }}
                            />
                        </LineStatisticStyled>

                    </BaseStatsContainerStyled>
                ))
            }
        </ContainerDataStatisticStyled>
    );
};

export default BaseStats;