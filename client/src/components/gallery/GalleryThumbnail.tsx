import {Album} from '../../interfaces';
import {Link} from 'react-router-dom';
import React from 'react';
import {Thumbnail} from '../common';

/**
 * Component that renders an album thumbnail with overlayed album information
 * @param album Album data
 * @returns GalleryThumbnail component
 */
export const GalleryThumbnail: React.VFC<{album: Album}> = ({album}) => {
  const albumDate = album.date.substring(0, 10);
  // Check for a valid thumbnail, otherwise fallback to first image
  const thumbnail =
    album.thumbnail && album.images.includes(album.thumbnail) ?
      album.thumbnail :
      album.images[0];

  return (
    <div className="card scale-on-hover">
      <Link
        key={`${album.date}-${album.slug}`}
        to={`/album/${albumDate}/${album.slug}`}
      >
        <Thumbnail className="card-img" fileName={thumbnail} alt={album.name} />
        <div
          className={`card-img-overlay d-inline-flex
            flex-column justify-content-end p-0`}
        >
          <div
            className="bg-dark text-white rounded-bottom p-2"
            style={{opacity: 0.8}}
          >
            <h2 className="card-title h5">{album.name}</h2>
            <p className="card-text">{album.date.substring(0, 10)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
