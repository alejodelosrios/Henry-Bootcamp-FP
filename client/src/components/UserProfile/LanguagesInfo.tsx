import React from 'react';
import { Header, Titles, Edit, EachContainer, SubTitles, Languages, LanguageCard, EachLang } from './Styles';


export const LanguagesInfoComp = () => {
    return (
        <Languages>
                <Header>
                    <Titles>Idiomas</Titles>
                    <Edit>Editar</Edit>
                </Header>
                <LanguageCard className='languages-card'>
                    <EachLang className='each-lang'>
                        <EachContainer>
                            <SubTitles>Idioma:</SubTitles>

                        </EachContainer>

                        <EachContainer>
                            <SubTitles>Nivel:</SubTitles>

                        </EachContainer>                        
                    </EachLang>

                    <EachLang className='each-lang'>
                        <EachContainer>
                            <SubTitles>Idioma:</SubTitles>

                        </EachContainer>

                        <EachContainer>
                            <SubTitles>Nivel:</SubTitles>

                        </EachContainer>                        
                    </EachLang>
                </LanguageCard>
            </Languages>)
    
};
