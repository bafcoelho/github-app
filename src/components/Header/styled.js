import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 4px;
        font-weight: 500;
    }

    button {
        background-color: #225ed8;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;

        &:hover {
            background-color: #225e82;
            box-shadow: 3px 2px 10px rgba(0,0,0,0.3);
        }

        span {
            font-weight: bold;
            color: #ffffff;
        }
    }
`;