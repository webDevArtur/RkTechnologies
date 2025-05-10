import styled from "styled-components";

type Props = {
  url: string;
};

const CatImage: React.FC<Props> = ({ url }) => {
  return <StyledImg src={url} alt="cat" />;
};

export default CatImage;

const StyledImg = styled.img`
  width: 300px;
  height: auto;
  margin-top: 12px;
  border-radius: 4px;
  object-fit: contain;
`;
