import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useComicsPaginate } from '../../hooks/useComicsPaginate';
import { LoadingTernary } from '../../components/LoadingTernary';
import { routes } from '../../routes/routes';
import { GenericInput } from '../../components/GenericInput';

const style = { maxWidth: '50px' };
const style1 = { backgroundColor: 'lightGrey' };

const List = () => {
  const history = useHistory();
  const [comics, setComics] = useState([]);
  const [filter, setFilter] = useState(undefined);

  const {
    results,
    page,
    total,
    loading,
    getNext,
    getPrevious,
  } = useComicsPaginate();

  const handleChangeInput = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    setComics(
      filter
        ? (results || []).filter(comic => {
            const searchString = filter.toLowerCase();

            const t = (comic?.characters?.items || []).find(
              item => item.name.toLowerCase().indexOf(searchString) > -1
            );

            const t2 = (comic?.creators?.items || []).find(
              item => item.name.toLowerCase().indexOf(searchString) > -1
            );

            const t3 =
              (comic?.title || {}).toLowerCase().indexOf(searchString) > -1;

            return t || t2 || t3;
          })
        : results
    );
  }, [results, filter]);

  return (
    <>
      <div id="item-header">
        <GenericInput
          handleChangeInput={handleChangeInput}
          defaultValue=""
          buttonText="Search"
          placeholder="Search for character, comic name, or author"
        />

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
              <div key={`${comic.id}`} style={style1}>
                <h3>{comic.title}</h3>
                <img
                  src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                  alt="thumbnail"
                  style={style}
                />
                <div>
                  {(comic?.creators?.items ?? []).map(({ name }) => (
                    <span key={`${comic.id}*${name}`}>{name}</span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => routes.DETAILS.redirect(history, comic.id)}
                >
                  Details
                </button>
              </div>
            ))}
        </div>
      </LoadingTernary>
    </>
  );
};

export default List;
