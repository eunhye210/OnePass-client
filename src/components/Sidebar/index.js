import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../../services/apiRequests";

import * as S from "./styles";

function Sidebar({ option, setOption }) {
  const navigate = useNavigate();
  const options = ["My Account", "Passwords", "Account Settings", "Logout"];

  useEffect(() => {
    const deleteCookie = async () => {
      try {
        await logout();
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };

    option === "Logout" && deleteCookie();
  }, [option]);

  return (
    <S.SidebarLayout>
      <S.Wrapper>
        <S.Logo>
          <S.LogoImage />
          <S.LogoName>OnePass</S.LogoName>
        </S.Logo>
        {options.map((item) => (
          <S.OptionButton
            key={item}
            name={item}
            selected={option === item}
            onClick={(e) => setOption(item)}
          >
            <S.OptionText selected={option === item}>{item}</S.OptionText>
          </S.OptionButton>
        ))}
      </S.Wrapper>
    </S.SidebarLayout>
  );
}

export default Sidebar;
