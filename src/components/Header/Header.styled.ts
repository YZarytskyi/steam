import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 35px 0;
  @media screen and (max-width: 1170px){
    padding: 9px 0;
  }
`;
export const HeaderPCContainer = styled.div`
  margin: 0 auto;
  max-width: 1171px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1170px){
    display: none;
  }
`;

export const HeaderMobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 1170px){
    margin: 0 auto;
    max-width: 360px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoNavContainer = styled.div` 
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

export const PriceOptionsContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const Logo = styled.img`
  width: 150px;
  height: 35px;
`;
