import React, { Component } from "react";
import styled from "styled-components";
import logo from "../img/logo_loader.svg";
import { colors, colorsBGanimation, fadeOut } from "../styles/globals";
import { growOld } from "../styles/globals";

const Loader = props => {
  let kill;
  // console.dir(props);
  const loaded = props.loaded;

  // console.dir("loaded:", loaded);

  // console.log("visible:", visible);
  const LoaderContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    width: 100vw;
    height: 100vh;
    /* background: ${colors.violet}; */
    align-items: center;
    
    /* los colores de la animacion del fondo tienen algun atao.   */
    /* fade out funciona pero quiero que desaparezca cuando termina la animación */
    animation: colorsBGanimation 2s, ${loaded ? fadeOut : ""};

    animation-duration: infinite;
    animation-fill-mode: forwards;

    img {
      width: 100%;
      height: auto;
      cursor: pointer;
      grid-column: 2 / 2;
      grid-row: 2 / 2;
      flex-grow: 2;
      display: flex;
      align-self: center;
      animation: ${growOld};
      animation-duration: 3000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate-reverse;
    }
  `;
  return (
    <LoaderContent>
      <img src={logo} alt="loaderContent" />
    </LoaderContent>
  );
};

export default Loader;
