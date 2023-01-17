import styled from "styled-components";

export const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .break-me {
    cursor: default;
  }
  .link {
    min-width: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 50%;
    background-color: #5b5e63;
    border: none;
    color: #fff;
    cursor: pointer;
    user-select: none;
    font-size: 12px;
    line-height: calc(15 / 12);
  }
  .active {
    background-color: #17323a;
  }
  .previous,
  .next {
    min-width: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #5b5e63;
  }
`;