import {FC} from "react";
import {TouchableOpacity} from "react-native";
import BackIcon from "@/assets/icons/BackIcon";

type Props = {
  onPress?: () => void;
}

const BackButton: FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <BackIcon />
    </TouchableOpacity>
  )
}

export default BackButton;