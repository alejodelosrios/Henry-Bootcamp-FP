import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomNavLinkContainer from "./CustomNavLinkContainer";

const Container = styled.div`
  width: 20vw;
  height: inherit;
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  //padding: 1rem 2rem;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;
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
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Logo = styled.img`
  width: 120px;
  height: 120px;
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

const Sidebar: FC = () => {
  const location = useLocation();
  const role = useSelector((state: any) => state.userReducer.role);
  const companyId = useSelector((state: any) => state.userReducer.company.id);
  const post = useSelector((state: any) => state.postsReducer.postById);
  return (
    <Container>
      <NavLink to="/">
        <ImgContainer>
          <Logo src={logo} alt="logo" />
        </ImgContainer>
      </NavLink>
      <Nav>
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <CustomNavLink>
            <LinkImg>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h18v-10h3zm-5 8h-14v-10.26l7-6.912 7 6.99v10.182zm-5-1h-4v-6h4v6z" />
              </svg>
            </LinkImg>
            Inicio
          </CustomNavLink>
        </NavLink>
        {role === "applicant" ? (
          <>
            <NavLink to="/profile" style={{ textDecoration: "none" }}>
              {location.pathname === "/profile" ? (
                <CustomNavLink2>
                  <LinkImg2>
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" />
                    </svg>
                  </LinkImg2>
                  Perfil
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
                      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" />
                    </svg>
                  </LinkImg>
                  Perfil
                </CustomNavLink>
              )}
            </NavLink>
            <NavLink to="/my-applications" style={{ textDecoration: "none" }}>
              {location.pathname === "/my-applications" ? (
                <CustomNavLink2>
                  <LinkImg2>
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z" />
                    </svg>
                  </LinkImg2>
                  Postulaciones
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
                      <path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z" />
                    </svg>
                  </LinkImg>
                  Postulaciones
                </CustomNavLink>
              )}
            </NavLink>
          </>
        ) : role === "company" ? (
          <>
            <NavLink
              to={`/edit-company/${companyId}`}
              style={{ textDecoration: "none" }}
            >
              {location.pathname === `/edit-company/${companyId}` ? (
                <CustomNavLink2>
                  <LinkImg2>
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z" />
                    </svg>
                  </LinkImg2>
                  Perfil
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
                      <path d="M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z" />
                    </svg>
                  </LinkImg>
                  Perfil
                </CustomNavLink>
              )}
            </NavLink>
            <NavLink to="/create-post" style={{ textDecoration: "none" }}>
              {location.pathname === `/create-post` ? (
                <CustomNavLink2>
                  <LinkImg2>
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z" />
                    </svg>
                  </LinkImg2>
                  Crear oferta laboral
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
                      <path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z" />
                    </svg>
                  </LinkImg>
                  Crear oferta laboral
                </CustomNavLink>
              )}
            </NavLink>
            <NavLink to="/company/posts" style={{ textDecoration: "none" }}>
              {location.pathname === `/company/posts` ||
              location.pathname === `/company/posts/${post.id}/detail` ? (
                <CustomNavLink2>
                  <LinkImg2>
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-2-11.386h-19v19h-1v-20h20v1zm-2-2h-19v19h-1v-20h20v1z" />
                    </svg>
                  </LinkImg2>
                  Ofertas laborales
                </CustomNavLink2>
              ) : (
                <CustomNavLink>
                  <LinkImg>
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-2-11.386h-19v19h-1v-20h20v1zm-2-2h-19v19h-1v-20h20v1z" />
                    </svg>
                  </LinkImg>
                  Ofertas laborales
                </CustomNavLink>
              )}
            </NavLink>
          </>
        ) : role === "admin" ? (
          <>
            <NavLink to={`/admin`} style={{ textDecoration: "none" }}>
              {location.pathname === `/admin` ? (
                <CustomNavLinkContainer
                  select={true}
                  svg_path="perfil"
                  text="perfil"
                />
              ) : (
                <CustomNavLinkContainer
                  select={false}
                  svg_path="perfil"
                  text="perfil"
                />
              )}
            </NavLink>
            <NavLink to="/admin/users" style={{ textDecoration: "none" }}>
              {location.pathname === `/admin/users` ? (
                <CustomNavLinkContainer
                  select={true}
                  svg_path="users"
                  text="users"
                />
              ) : (
                <CustomNavLinkContainer
                  select={false}
                  svg_path="users"
                  text="users"
                />
              )}
            </NavLink>
            <NavLink to="/admin/categories" style={{ textDecoration: "none" }}>
              {location.pathname === `/admin/categories` ? (
                <CustomNavLinkContainer
                  select={true}
                  svg_path="categories"
                  text="categorías"
                />
              ) : (
                <CustomNavLinkContainer
                  select={false}
                  svg_path="categories"
                  text="categorías"
                />
              )}
            </NavLink>
            <NavLink to="/admin/news" style={{ textDecoration: "none" }}>
              {location.pathname === `/admin/news` ? (
                <CustomNavLinkContainer
                  select={true}
                  svg_path="news"
                  text="news"
                />
              ) : (
                <CustomNavLinkContainer
                  select={false}
                  svg_path="news"
                  text="news"
                />
              )}
            </NavLink>
          </>
        ) : null}
      </Nav>
    </Container>
  );
};

export default Sidebar;
