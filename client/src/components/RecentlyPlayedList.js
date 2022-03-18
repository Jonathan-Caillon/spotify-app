import { formatDuration } from "../utils";
import { StyledTrackList } from "../styles";

const RecentlyPlayedList = ({ recentlyPlayeds }) => (
  <>
    {recentlyPlayeds && recentlyPlayeds.length ? (
      <StyledTrackList>
        <li className="track__item">
          <div className="track__item__num">#</div>
          <div className="track__item__title-group">Title</div>
          <div className="track__item__album overflow-ellipsis">Album</div>
          <div className="track__item__duration">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z" />
            </svg>
          </div>
        </li>
        <hr></hr>
        {recentlyPlayeds.map((track, i) => (
          <li className="track__item" key={i}>
            <div className="track__item__num">{i + 1}</div>
            <div className="track__item__title-group">
              {track.track.album.images.length && track.track.album.images[2] && (
                <div className="track__item__img">
                  <img
                    src={track.track.album.images[2].url}
                    alt={track.track.name}
                  />
                </div>
              )}
              <div className="track__item__name-artist">
                <div className="track__item__name overflow-ellipsis">
                  {track.track.name}
                </div>
                <div className="track__item__artist overflow-ellipsis">
                  {track.track.artists.map((artist, i) => (
                    <span key={i}>
                      {artist.name}
                      {i !== track.track.artists.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="track__item__album overflow-ellipsis">
              {track.track.album.name}
            </div>
            <div className="track__item__duration">
              {formatDuration(track.track.duration_ms)}
            </div>
          </li>
        ))}
      </StyledTrackList>
    ) : (
      <p className="empty-notice">No tracks available</p>
    )}
  </>
);

export default RecentlyPlayedList;
