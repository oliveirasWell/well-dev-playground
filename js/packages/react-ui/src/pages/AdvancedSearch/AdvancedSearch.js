import React, { useState } from 'react';
import { useCharactersPaginate } from '../../hooks/useCharactersPaginate';
import { LoadingTernary } from '../../components/LoadingTernary';
import { GenericInput } from '../../components/GenericInput';

const style1 = { backgroundColor: 'lightGrey' };

const AdvancedSearch = () => {
  const [nameStartsWith, setNameStartsWith] = useState(undefined);
  const [searchNameStartsWith, setSearchNameStartsWith] = useState(undefined);

  const handleClickInput = () => {
    setSearchNameStartsWith(nameStartsWith);
  };

  const handleChangeInput = event => {
    setNameStartsWith(event.target.value);
  };

  const {
    results: characters,
    page,
    total,
    loading,
    getNext,
    getPrevious,
  } = useCharactersPaginate({ nameStartsWith: searchNameStartsWith });

  return (
    <>
      <h1>Advanced Search</h1>
      <>
        <GenericInput
          handleClickInput={handleClickInput}
          handleChangeInput={handleChangeInput}
          defaultValue={nameStartsWith}
          buttonText="Search!"
        />
        <div id="item-header">
          <div>{`Total ${total}`}</div>
          {characters && (
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
              (characters || []).map(character => (
                <div key={character.id} style={style1}>
                  <h3>{character.name}</h3>
                </div>
              ))}
          </div>
        </LoadingTernary>
      </>
    </>
  );
};

export { AdvancedSearch };
export default AdvancedSearch;
