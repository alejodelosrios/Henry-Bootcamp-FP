import { FC } from "react";
import styled from "styled-components";

const CustomNavLink = styled.li`
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(p) => p.theme.colors.typography.darkest};
`;
const CustomNavLink2 = styled.li`
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(p) => p.theme.colors.typography.darkest};
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const LinkImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  gap: 1rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const LinkImg2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  gap: 1rem;
  border-radius: 0.5rem;
  color: white;
  margin-right: 1rem;
  background-color: ${(p) => p.theme.colors.details.primary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
interface props {
  select: boolean;
  svg_path: string;
  text: string;
}

const CustomNavLinkContainer: FC<props> = ({ select, svg_path, text }) => {
  let path = "";
  if (svg_path === "perfil") {
    path =
      "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z";
  }
  if (svg_path === "work") {
    path =
      "M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z";
  }

  return select ? (
    <CustomNavLink2>
      <LinkImg2>
        <svg
          fill="currentColor"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} />
        </svg>
      </LinkImg2>
      {text}
    </CustomNavLink2>
  ) : (
    <CustomNavLink>
      <LinkImg>
        <svg
          fill="currentColor"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} />
        </svg>
      </LinkImg>
      {text}
    </CustomNavLink>
  );
};

export default CustomNavLinkContainer;
