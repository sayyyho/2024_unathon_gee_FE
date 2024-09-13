import styled from "styled-components";

export const alarmWrapper = styled.div`
    width: 375px;
    height: 103px;
    padding: 12px 16px 19px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const textBox = styled.div`
    padding: 12px 16px 10px 16px;
    width: 343px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const textWrapper = styled.div`
    width: fit-content;
    height: 62px;
    gap: 2px;
    #day {
        font-size: 30px;
        font-weight: 400;
    }
    #time {
        font-size: 60px;
        font-weight: 800;
    }
`;

export const toggleContainer = styled.div`
    position: relative;
    cursor: pointer;

    .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;
        background-color: rgb(233, 233, 234);
    }

    .toggle--checked {
        background-color: rgb(0, 200, 102);
        transition: 0.5s;
    }

    .toggle-circle {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: rgb(255, 254, 255);
        transition: 0.5s;
    }

    .toggle-circle.toggle--checked {
        left: 27px;
        transition: 0.5s;
    }
`;

export const Toggle = styled.div`
    .toggle-container {
        ${(props) => (props.isOn ? "background-color: rgb(0,200,102);" : "background-color: rgb(233,233,234);")}
        transition: background-color 0.5s;
    }

    .toggle-circle {
        ${(props) => (props.isOn ? "left: 27px;" : "left: 1px;")}
        transition: left 0.5s;
    }
`;
