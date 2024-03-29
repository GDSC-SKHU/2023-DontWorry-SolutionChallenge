import { useState } from "react";
import Carousel from "src/components/Carousel";
import ReportBalloon from "src/components/Common/Balloon/ReportBalloon";
import ReportBtn from "src/components/Common/Button/ReportBtn";
import MainMsg from "src/components/Common/Text/MainMsg";
import Modal from "src/components/Modal";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import styled from "styled-components";

function Main() {
  const [showModal, setShowModal] = useState(false);
  const clickModal = () => setShowModal(!showModal);
  const user =
    typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

  return (
    <>
      {showModal && (
        <Modal
          isOpen={showModal}
          title="Would you like to see what you wrote?"
          content="In the meantime, you can see what you wrote, and PDF conversion function is also available to organize the report data. Are you ready?"
          path="/Report"
        />
      )}
      <Nav />
      <StyledWrapper>
        <StyledUserMsg>
          <b>{user}</b>, how was your day today?
        </StyledUserMsg>
        <MainMsg />
        <StyledCarouselWrapper>
          <Carousel />
        </StyledCarouselWrapper>
        <StyledBalloonWrapper>
          <ReportBalloon />
        </StyledBalloonWrapper>
        <StyledBtnWrapper onClick={clickModal}>
          <ReportBtn />
        </StyledBtnWrapper>
      </StyledWrapper>
      <BottomNav selected="Home" />
    </>
  );
}

export default Main;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 1rem;
  margin-top: 4rem;
`;

const StyledBalloonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`;

const StyledBtnWrapper = styled.div`
  text-align: center;
  margin-top: 1.3rem;
  margin-bottom: 5.5rem;
`;

const StyledCarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 4.5rem;
`;

const StyledUserMsg = styled.div`
  font-size: 0.88rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-bottom: 0.8rem;
`;
