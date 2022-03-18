import { formatDuration } from "../utils";
import { StyledTrackList } from "../styles";

const RecentlyPlayedList = ({ recentlyPlayeds }) => (
  <>
    {recentlyPlayeds && recentlyPlayeds.length ? (
      <StyledTrackList>
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
