import {FC} from "react";
import {TouchableOpacity} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";

import BackIcon from "@/assets/icons/BackIcon";

type Props = {
  onPress?: () => void;
}

const BackButton: FC<Props> = ({onPress = () => {}}) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <TouchableOpacity onPress={onPress}>
      <BackIcon />
    </TouchableOpacity>
  )
}

export default BackButton;