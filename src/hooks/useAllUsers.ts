import axios from "axios";
import { useState } from "react";
import { UserProfiel } from "../types/UserProfiel";
import { User } from "../types/api/User";

// 全ユーザーを取得するカスタムフック
export const useAllUsers = () => {
  // userの情報
  const [userProfiels, setUserProfiels] = useState<Array<UserProfiel>>([]);
  // loadingの情報
  const [loading, setLoading] = useState(false);
  // errorの情報
  const [error, setError] = useState(false);

  const getUsers = () => {
    // api呼ぶ前にloadingをtrue、error情報をfalse(初期化)する
    setLoading(true);
    setError(false);

    // apiコールの部分
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiels(data);
      })
      .catch(() => {
        setError(true);
      })
      // errorだろうが何だろうが、最終的に実行するもの
      // loadingをfalseにする
      .finally(() => {
        setLoading(false);
      });
  };

  // カスタムフックで値をオブジェクトとして返す
  return { getUsers, userProfiels, loading, error };
};
