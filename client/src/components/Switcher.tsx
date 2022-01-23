import { FC, useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";

interface Props {
  id: string;
  name: string;
  checkedProp?: boolean;
  handleFilter(id: any, name: string, checked: boolean): void;
}

const Switcher: FC<Props> = ({ id, name, checkedProp, handleFilter }) => {
  const [checked, setChecked] = useState(false);
  const { colors } = useContext(ThemeContext);

  const handleSwitch = () => {
    handleFilter(id, name, !checked);
    setChecked(!checked);
  };

  return (
    <Switch
      onChange={handleSwitch}
      checked={checkedProp ? checkedProp : checked}
      id={id}
      name={name}
      width={35}
      height={18}
      handleDiameter={9}
      uncheckedIcon={false}
      offColor={colors.typography.light}
      onColor={colors.details.secondary}
    />
  );
};

export default Switcher;
