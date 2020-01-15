import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px;

    h1 {
      font-size: 20px;
    }

    div {
      button {
        margin-left: 10px;
      }
    }
  }
`;

export const Project = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 0 0 20px;
  padding: 20px;

  &:last-child {
    margin: 0;
  }

  p {
    font-size: 18px;
  }
`;

export const Label = styled.p`
  color: #b9bbbe;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin-top: 15px;
`;
