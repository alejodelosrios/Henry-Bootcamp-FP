import {FC} from "react";
import {NavBar} from "../components/NavBar";

const HomeLayout: FC = ({children}) => {
  return <div>
      <NavBar />
    {children}
  </div>;
};

export default HomeLayout;
