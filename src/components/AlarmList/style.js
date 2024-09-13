import styled from "styled-components";

export const alarmWrapper = styled.div`
    width: 375px;
    height: 103px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; /* 추가: fixIcon의 위치 기준이 되도록 relative 추가 */
`;

export const textBox = styled.div`
    padding: 12px 16px 10px 16px;
    width: 370px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const textWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    align-items: flex-end;
    height: 62px;
    gap: 8px;

    #day {
        font-size: 30px;
        font-weight: 600;
    }
    #time {
        font-size: 60px;
        font-weight: 800;
    }
`;


export const toggleContainer = styled.div`
    position: relative;
    cursor: pointer;
    padding-top: 10px;

    .toggle-container {
        width: 70px; /* 컨테이너 너비 */
        height: 35px; /* 컨테이너 높이 */
        border-radius: 35px; /* 둥근 모서리 유지 */
        background-color: rgb(233, 233, 234);
        position: relative;
    }

    .toggle--checked {
        background-color: rgb(0, 200, 102);
        transition: 0.5s;
    }

    .toggle-circle {
        position: absolute;
        top: 2px; /* 여백 설정 */
        left: 2px; /* 여백 설정 */
        width: 31px; /* 원 크기 조정 */
        height: 31px; /* 원 크기 조정 */
        border-radius: 50%;
        background-color: rgb(255, 254, 255);
        transition: 0.5s;
    }

    .toggle-circle.toggle--checked {
        left: 37px; /* 컨테이너 크기에 맞춰 이동값 조정 */
        transition: 0.5s;
    }
`;

export const Bar = styled.div`
    hr{
        width: 380px;
        height: 0px;
        color: black;
        background-color: black;
    }
`;

export const Container = styled.div`
    width: 375px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    background-color: #99EB5E;
    background: linear-gradient(90deg, #FFFFFF 0%, #E0FFCA 100%); /* 그라데이션 적용 */
    border-bottom: 2px solid gray; /* 하단 border 속성 추가 */
    p{
        font-size: 11px;
    }
`;

export const Image = styled.img`
    #icon{
        width: 38px;
        height: 38px;
    }
    #plus{
        width: 20px;
        height: 20px;
    }
`;
export const arrowIcon = styled.img`
    width: 17px;
    height: 30px;
`;

export const fixIcon = styled.img`
    position: absolute;
    left: 0px;
    top: 10px;
    width: 20px;
    height: 20px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 어두운 배경 */
  backdrop-filter: blur(10px); /* 배경 블러 처리 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 최상단에 위치 */
`;

export const ModalBox = styled.div`
  background-color: #fff;
  width: 320px;
  height: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  padding-top: 30px;
  padding-bottom: 20px;
  position: relative;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const DatePicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 10px 20px;

  .time-display {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    background-color: #ddd;
    padding: 10px 8px;
    border-radius: 5px;
    margin: 0px 0;

    p {
      margin: 0 25px;
      font-size: 24px;
      font-weight: bold;
    }
  }

  .time-selector {
    display: flex;
    justify-content: space-between;
    width: 250px;

    button {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

export const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  width: 260px;
  height: 40px;
  border-radius: 10px;
  background-color: #b1f77e;
  cursor: pointer;
`;

export const Exit = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
