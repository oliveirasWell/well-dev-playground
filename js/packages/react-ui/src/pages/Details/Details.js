import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useComicById } from '../../hooks/useComicById';
import { LoadingTernary } from '../../components/LoadingTernary';
import { routes } from '../../routes/routes';

const style = { maxWidth: '100px' };

const Details = () => {
  const { id } = useParams();
  const history = useHistory();

  const { result: comic, error, loading } = useComicById({
    id,
  });

  useEffect(() => {
    routes.NOT_FOUND.redirect(history);
  }, [error, history]);

  return (
    <LoadingTernary loading={loading}>
      <h1>{comic?.title}</h1>
      <div>{id}</div>
      <img
        src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
        alt="thumbnail"
        style={style}
      />
      <div>{comic?.description}</div>
      <div>{comic?.format}</div>

      <div>
        <h6> Creators </h6>
        {(comic?.creators?.items ?? []).map(({ name }) => (
          <div key={`${comic.id}*${name}`}>{name}</div>
        ))}
      </div>

      <div>
        <h6> Characters </h6>
        {(comic?.characters?.items ?? []).map(({ name }) => (
          <div key={`${comic.id}*${name}`}>{name}</div>
        ))}
      </div>

      <div>
        <h6> Images </h6>
        {(comic?.images ?? []).map(({ path, extension }, index) => (
          <img
            key={`${comic.id}--image-${index}`}
            src={`${path}.${extension}`}
            alt="thumbnail"
            style={style}
          />
        ))}
      </div>
    </LoadingTernary>
  );
};

export default Details;
