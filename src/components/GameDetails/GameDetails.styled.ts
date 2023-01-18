import styled from "styled-components";

export const Section = styled.section`
  padding: 24px 27px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1171px;
  padding: 0 26px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 22px;
  line-height: 1.2;
  text-align: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ImgDescContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Developer = styled.p`
  max-width: 300px;
  margin-bottom: 20px;
`;

export const DeveloperLink = styled.a`
  color: #89cff0;
`;
export const Publisher = styled(Developer)``;
export const PublisherLink = styled(DeveloperLink)``;

export const Description = styled.p`
  text-align: justify;
  line-height: 1.5;
`;

export const Date = styled.p`
  margin-bottom: 20px;
`;
export const Price = styled(Date)``;

export const Reviews = styled.p`
  font-size: 20px;
`;
