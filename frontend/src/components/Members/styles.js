import styled from 'styled-components';

export const MemberList = styled.ul`
  list-style: none;
  margin: 20px 0 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 0;

    strong {
      font-size: 18px;
    }

    > div {
      width: 320px;
      color: #666;
    }

    &:first-child {
      margin: 0;
    }
  }
`;

export const Invite = styled.form`
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
