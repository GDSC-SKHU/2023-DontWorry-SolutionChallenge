import { m } from "framer-motion";
import { NextRouter, useRouter } from "next/router";
import { defaultFadeInUpVariants } from "src/constants/motion";
import styled from "styled-components";

//FOL:Folder

interface IImageFOL {
  month: string;
  quantity: number;
}

function onClickImageFOL(month: string, route: NextRouter) {
  route.push({ pathname: "/ImageFolder/Detail", query: { month: month } });
}

function ImageFOL({ month, quantity }: IImageFOL) {
  const route = useRouter();
  return (
    <StyledImageFOL
      initial="initial"
      animate="animate"
      exit="exit"
      variants={defaultFadeInUpVariants}
      onClick={() => onClickImageFOL(month, route)}
    >
      <StyledTestImage />
      <div>{month}</div>
      <div>{quantity}</div>
    </StyledImageFOL>
  );
}

export default ImageFOL;

const StyledImageFOL = styled(m.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 10px;
`;

const StyledTestImage = styled.div`
  background-color: gray;
  border-radius: 10px;
  width: 100%;
  padding-bottom: 100%;
`;
