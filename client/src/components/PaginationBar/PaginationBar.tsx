import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_current_items_by_page } from "../../redux/actions/actionCreators";

import arrowLeft from "./../../assets/PaginationBar/arrowLeft.svg";
import arrowRight from "./../../assets/PaginationBar/arrowRight.svg";
import PaginationButton from "./PaginationButton";

import { ButtonArrow } from "./styles";

const PaginationBar = () => {
  let currentPage = useSelector((state: any) => state.postsReducer.currentPage);
  let itemsPerPage = useSelector(
    (state: any) => state.postsReducer.itemsPerPage
  );
  let currentPosts = useSelector(
    (state: any) => state.postsReducer.currentPosts
  );
  const dispatch = useDispatch();

  let pageNumbers = [];
  if (currentPosts.length <= itemsPerPage) {
    pageNumbers.push(1);
  } else {
    for (let i = 1; i <= Math.ceil(currentPosts.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const prevPage = () => {
    let number = +currentPage - 1;
    console.log(number);
    if (number < 1) {
      return null;
    }
    dispatch(set_current_items_by_page(number));
  };

  const nextPage = () => {
    let number = +currentPage + 1;
    console.log(number);
    if (number > pageNumbers.length) {
      return null;
    }
    dispatch(set_current_items_by_page(number));
  };

  const changeCurrentPage = (e: any) => {
    let number = +e.target.value;
    dispatch(set_current_items_by_page(number));
  };

  const handlePageButton = (e: any) => {
    e.preventDefault();
    dispatch(set_current_items_by_page(+e.target.inputNumberPage.value));
  };
  return (
    <div>
      <ButtonArrow onClick={() => prevPage()}>
        <img src={arrowLeft} alt="arrow-left" />
      </ButtonArrow>
      {pageNumbers.map((number) => {
        switch (true) {
          case pageNumbers.length === 1:
            return (
              <span key={number}>
                <PaginationButton
                  number={number}
                  currentPage={currentPage}
                  changeCurrentPage={changeCurrentPage}
                />
              </span>
            );
          case pageNumbers.length === 2:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length === 3:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 2}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 2}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length === 4:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number + 3}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 2}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 2}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 4 && number === 4) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 3}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length === 5:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 4 && number === 4) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 5 && number === 5) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length === 6:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 4 && number === 4) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 5 && number === 5) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 6 && number === 6) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length >= 7:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (
              currentPage >= 4 &&
              currentPage <= pageNumbers.length - 3 &&
              currentPage === number
            ) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (
              currentPage === pageNumbers.length - 2 &&
              number === pageNumbers.length - 2
            ) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (
              currentPage === pageNumbers.length - 1 &&
              number === pageNumbers.length - 1
            ) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (
              currentPage === pageNumbers.length &&
              number === pageNumbers.length
            ) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <span>...</span>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          default:
            return null;
        }
      })}
      <ButtonArrow onClick={() => nextPage()}>
        <img src={arrowRight} alt="arrow-right" />
      </ButtonArrow>
    </div>
  );
};

export default PaginationBar;
