import styled from "styled-components/macro";

const StyledSideMenu = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: black;
  height: 100%;
  width: 100px;
  z-index: 99;
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .logo {
    margin-top: 30px;
    width: 50px;
  }

  .logo svg {
    fill: var(--green);
    width: 50px;
  }

  .github {
    margin-bottom: 30px;
  }
  .github svg {
    fill: rgb(155, 155, 155);
    height: 50px;
  }
  .github a:hover svg {
    fill: rgb(255, 255, 255);
  }
  .menu {
    width: 100%;
  }

  .menu ul {
    width: 100%;
    padding: 0;
  }
  .menu ul li a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .menu ul li svg {
    height: 20px;
    fill: rgb(155, 155, 155);
    margin-bottom: 7px;
  }
  .menu ul li {
    height: 70px;
    width: 100%;
    font-size: 0.75rem;
    text-align: center;
    list-style: none;
    color: rgb(155, 155, 155);
    text-decoration: none;
  }
  .menu ul li:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(24, 24, 24);
    border-left: 5px solid var(--green);
    text-decoration: none;
  }
  .menu ul li:hover svg {
    fill: rgb(255, 255, 255);
  }
  .menu ul li a:hover {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    left: 0;
    bottom: 0;
    top: auto;
    height: auto;
    width: 100%;

    .navbar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    .logo {
      display: none;
    }
    .github {
      display: none;
    }
    .menu ul {
      display: flex;
      margin: 0;
    }
    .menu ul li:hover {
      border-left: none;
      border-top: 5px solid var(--green);
    }
  } ;
`;

export default StyledSideMenu;
