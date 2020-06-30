import React from 'react';
import { MarvelComicApiService } from '../../services/MarvelComicApiService';
import { usePaginateListApi } from '../../hooks/usePaginateListApi';
import { LoadingTernary } from '../../components/LoadingTernary';

const style = { maxWidth: '50px' };
const style1 = { backgroundColor: 'lightGrey' };

const List = () => {
  const {
    results: comics,
    page,
    total,
    loading,
    getNext,
    getPrevious,
  } = usePaginateListApi({ ApiService: MarvelComicApiService });

  return (
    <>
      <div id="item-header">
        <div>{`Total ${total}`}</div>
        {comics && (
          <>
            {page !== 0 && (
              <button type="button" onClick={getPrevious}>
                Previous
              </button>
            )}
            {page !== total && (
              <button type="button" onClick={getNext}>
                Next
              </button>
            )}
          </>
        )}
      </div>
      <LoadingTernary loading={loading}>
        <div id="body-comic">
          {!loading &&
            (comics || []).map(comic => (
              <div id={`${comic.id}`} style={style1}>
                <h3>{comic.title}</h3>
                <img
                  src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                  alt="thumbnail"
                  style={style}
                />
                <div>
                  {(comic?.creators?.items ?? []).map(({ name }, id) => (
                    <span id={`${comic.id}*${name}*${id}`}>{name}</span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </LoadingTernary>
    </>
  );
};

export default List;
