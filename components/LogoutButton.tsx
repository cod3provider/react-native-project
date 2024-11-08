import {TouchableOpacity} from "react-native";
import {FC} from "react";
import LogoutIcon from "@/assets/icons/LogoutIcon";

type Props = {
  onPress: () => void;
}

const LogoutButton: FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LogoutIcon />
    </TouchableOpacity>
  )
}

export default LogoutButton;