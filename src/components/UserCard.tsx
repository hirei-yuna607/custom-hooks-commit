import { VFC } from "react";
import { UserProfiel } from "../types/UserProfiel";
import styled from "styled-components";

type Props = {
  user: UserProfiel;
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  const style = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
  };
  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};

const SContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 16px;
  margin: 8px;
`;
