import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  // ロジックの部分はカスタムフック(useAllUsers)に書いた
  // ほかで使いたいときはそのままコピーして使える
  const { getUsers, userProfiels, loading, error } = useAllUsers();
  const onClickFetchData = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchData}>ユーザー情報からデータを抽出</button>
      <br />
      {/* 
      エラーがtrueだった場合、エラーメッセージを表示
      エラーじゃなかった場合、loadingの三項演算子に移る
      loadingがtrueだった場合、ロード中と表示
      falseになったら、apiで取得したデータを表示
       */}
      {error ? (
        <p style={{ color: "#ff0000" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>ロード中</p>
      ) : (
        <>
          {userProfiels.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </>
      )}
    </div>
  );
}
