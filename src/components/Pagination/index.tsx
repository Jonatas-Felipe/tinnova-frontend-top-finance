import React, { useCallback, useMemo } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import { useResize } from '~/hooks/Resize';

import { Container } from './styles';

interface IPagination {
  currentPage: number;
  totalPages: number;
  onChangePage?(e: number): void;
}

const Pagination: React.FC<IPagination> = ({
  currentPage,
  totalPages,
  onChangePage,
}) => {
  const { width } = useResize();

  const pages = useMemo(() => {
    const pageSelected = currentPage || 1;
    const qtd = width > 992 ? 7 : 5;
    const pageArray = Array.from(
      { length: totalPages < qtd ? totalPages : qtd },
      (e, index) => (totalPages < qtd ? `${index + 1}`.padStart(2, '0') : e)
    );

    const pageData = pageArray.map((page, index) => {
      if (page) {
        return page;
      }

      if (width > 992) {
        if (index === 0) {
          return '01';
        }
        if (index === 1) {
          if (pageSelected > 3 && pageSelected - 3 !== 1) {
            return '...';
          }
          return (2).toString().padStart(2, '0');
        }
        if (index === 2) {
          if (pageSelected > 3) {
            if (pageSelected + 3 > totalPages) {
              return (totalPages - 4).toString().padStart(2, '0');
            }
            return (pageSelected - 1).toString().padStart(2, '0');
          }
          return (3).toString().padStart(2, '0');
        }
        if (index === 3) {
          if (pageSelected > 4) {
            if (pageSelected + 3 > totalPages) {
              return (totalPages - 3).toString().padStart(2, '0');
            }
            return pageSelected.toString().padStart(2, '0');
          }
          return (4).toString().padStart(2, '0');
        }
        if (index === 4) {
          if (pageSelected >= 5) {
            if (pageSelected + 3 > totalPages) {
              return (totalPages - 2).toString().padStart(2, '0');
            }
            return (pageSelected + 1).toString().padStart(2, '0');
          }
          return (5).toString().padStart(2, '0');
        }
        if (index === 5) {
          if (pageSelected + 3 >= totalPages) {
            return (totalPages - 1).toString().padStart(2, '0');
          }
          return '...';
        }
        if (index === 6) {
          return totalPages.toString().padStart(2, '0');
        }
      } else {
        if (index === 0) {
          return (1).toString().padStart(2, '0');
        }
        if (index === 1) {
          if (pageSelected > 3) {
            return '...';
          }
          return (2).toString().padStart(2, '0');
        }
        if (index === 2) {
          if (pageSelected > 3 && pageSelected + 2 < totalPages) {
            return pageSelected.toString().padStart(2, '0');
          }
          if (pageSelected + 2 >= totalPages) {
            return (totalPages - 2).toString().padStart(2, '0');
          }
          return (3).toString().padStart(2, '0');
        }
        if (index === 3) {
          if (pageSelected + 2 >= totalPages) {
            return (totalPages - 1).toString().padStart(2, '0');
          }
          return '...';
        }
        if (index === 4) {
          return totalPages.toString().padStart(2, '0');
        }
      }

      return '';
    });

    return pageData as string[];
  }, [currentPage, totalPages, width]);

  const handleClickPrev = useCallback(() => {
    if (onChangePage && currentPage) {
      onChangePage(currentPage - 1 <= 1 ? 1 : currentPage - 1);
    }
  }, [onChangePage, currentPage]);

  const handleClickPage = useCallback(
    (page: number) => {
      if (onChangePage) {
        onChangePage(page);
      }
    },
    [onChangePage]
  );

  const handleClickNext = useCallback(() => {
    if (onChangePage && currentPage) {
      onChangePage(
        currentPage + 1 >= totalPages ? totalPages : currentPage + 1
      );
    }
  }, [onChangePage, currentPage, totalPages]);

  return (
    <Container className="justify-content-center pt-2 mb-0 mt-3">
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        <div className="w-100 w-sm-auto d-flex justify-content-center mt-3 mt-sm-0">
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-pagination arrow"
              onClick={handleClickPrev}
            >
              <MdOutlineArrowBackIos size={24} color="#000000" />
            </button>
            {pages.map((page, index) => (
              <button
                key={index.toString()}
                type="button"
                className={`btn btn-pagination ${
                  page === currentPage?.toString().padStart(2, '0')
                    ? 'selected'
                    : ''
                } ${page === '...' ? 'ellipsis' : ''}`}
                onClick={() => handleClickPage(parseInt(page, 10))}
                disabled={page === '...'}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="btn btn-pagination arrow"
              onClick={handleClickNext}
            >
              <MdOutlineArrowForwardIos size={24} color="#000000" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pagination;
