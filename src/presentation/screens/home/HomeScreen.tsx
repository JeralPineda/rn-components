import { ScrollView, View } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { MenuItem } from "../../components/ui/MenuItem";
import { Title } from "../../components/ui/Title";

interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

const animationMenuItems: MenuItem[] = [
  {
    name: "Animation 101",
    icon: "cube-outline",
    component: "Animation101Screen",
  },
  {
    name: "Animation 102",
    icon: "albums-outline",
    component: "Animation102Screen",
  },
];

const menuItems: MenuItem[] = [
  {
    name: "Pull to refresh",
    icon: "refresh-outline",
    component: "PullToRefreshScreen",
  },
  {
    name: "Section List",
    icon: "list-outline",
    component: "CustomSectionListScreen",
  },
  {
    name: "Modal",
    icon: "copy-outline",
    component: "ModalScreen",
  },
  {
    name: "InfiniteScroll",
    icon: "download-outline",
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slides",
    icon: "flower-outline",
    component: "SlidesScreen",
  },
  {
    name: "Themes",
    icon: "flask-outline",
    component: "ChangeThemeScreen",
  },
];

const uiMenuItems: MenuItem[] = [
  {
    name: "Switches",
    icon: "toggle-outline",
    component: "SwitchScreen",
  },
  {
    name: "Alerts",
    icon: "alert-circle-outline",
    component: "AlertScreen",
  },
  {
    name: "TextInputs",
    icon: "document-text-outline",
    component: "TextInputScreen",
  },
];

export const HomeScreen = () => {
  return (
    <CustomView margin>
      <ScrollView>
        <Title text="Opciones del menu" safe />

        {animationMenuItems.map((item: MenuItem, index: number) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === animationMenuItems.length - 1}
          />
        ))}

        <View style={{ marginTop: 25 }} />

        {uiMenuItems.map((item: MenuItem, index: number) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === uiMenuItems.length - 1}
          />
        ))}

        <View style={{ marginTop: 25 }} />

        {menuItems.map((item: MenuItem, index: number) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === menuItems.length - 1}
          />
        ))}

        <View style={{ marginTop: 25 }} />
      </ScrollView>
    </CustomView>
  );
};
