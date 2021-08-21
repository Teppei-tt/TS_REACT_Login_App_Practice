import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/user";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoding] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoding(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res) {
            history.push("/home");
          } else {
            alert("ユーザーが見つかりません。");
          }
        })
        .catch(() => alert("ログインできません。"))
        .finally(() => setLoding(false));
    },
    [history]
  );
  return { login, loading };
};
