import React from "react";
import { useFns, useUser } from "./context";
import Header from "./Header";
import Poster from "./Poster";
import Section from "./Section";
import styled from "styled-components";

const Container = styled.div`
padding: 20px;
`;

const Screen = () => {
    const {logUserIn} = useFns();
    const {name, loggedIn, nowPlaying} = useUser();

    return(
    <div>
        <Header />
        <h1> First Screen </h1>
        <Container>
        {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="현재 상영중">
                        {nowPlaying.map(movie => 
                        <Poster 
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                imageUrl={movie.poster_path}
                                isMovie={true}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.substring(0,4)} />)}
                    </Section>)
                    }
        <button onClick={logUserIn}>Log IN</button>
        </Container>
    </div>
    
)}

export default Screen;