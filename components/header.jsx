import { View } from "react-native";

import { useNavigationState } from "@react-navigation/native";
import { useState } from "react";

import HeaderModal from "./headerModal.jsx";
import HeaderInner from "./headerInner.jsx";

export default function Header({ navigation }) {
  const [menu, setMenu] = useState(false);

  const currentRouteName = useNavigationState((state) => {
    const route = state.routes[state.index];
    return route.name;
  });

  return (
    <View style={{ marginBottom: 10 }}>
      <HeaderInner onOpen={setMenu} navigation={navigation} />
      <HeaderModal
        menuStatus={menu}
        currentRouteName={currentRouteName}
        navigation={navigation}
        onClose={setMenu}
      />
    </View>
  );
}
