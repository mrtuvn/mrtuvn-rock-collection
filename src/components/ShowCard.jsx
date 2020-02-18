import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 1.5em;
  padding-bottom: 1em;
  overflow: hidden;
  text-decoration: none;
  color: black;
  transition: box-shadow .3s ease;
  @media(min-width: 380px){
    width: 48.5%;
  }
  @media(min-width: 640px){
    width: 32%;
  }
  @media(min-width: 1024px){
    width: 23.5%;
  }
  @media(min-width: 1280px){
    width: 18.5%;
  }
  &:hover {
    box-shadow: 0 0 .4em .2em rgba(10,10,10,0.5);
  }
`;

const ArtistName = styled.h3`
font-family: 'New Rocker', cursive;
font-size: 1.5em;
line-height: 1.25em;
margin-top: .5em;
margin-bottom: .5em;
`;

const CardContent = styled.div`
padding-left: 1em;
padding-right: 1em;
`;

const Image = styled.img`
margin-bottom: 1em;
  width: 100%;
`;

const ShowCard = props => (
  <Wrapper to={`/details/${props.album.discogsID}`}>
    <Image alt={`${props.album.artist} - ${props.album.album} Album Cover`} src={`/public/img/cover/${props.album.cover}`} />
    <CardContent>
      <ArtistName>{props.album.artist}</ArtistName>
      <h3 className="album">{props.album.album}</h3>
    </CardContent>
  </Wrapper>
);

ShowCard.propTypes = {
  album: shape({
    cover: string.isRequired,
    album: string.isRequired,
    artist: string.isRequired,
    discogsID: string.isRequired,
    YoutubeVideoID: string.isREquired,
  }).isRequired
};

export default ShowCard;