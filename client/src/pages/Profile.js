import { useState, useEffect } from "react";
import { catchErrors } from "../utils";
import {
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getTopArtists,
  getTopTracks,
  getRecentlyPlayed,
} from "../spotify";
import { StyledHeader } from "../styles";
import {
  SectionWrapper,
  ArtistsGrid,
  TrackList,
  PlaylistsGrid,
  Loader,
} from "../components";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);

      const userTopArtist = await getTopArtists();
      setTopArtists(userTopArtist.data);

      const userTopTracks = await getTopTracks();
      setTopTracks(userTopTracks.data);

      const userRecentlyPlayed = await getRecentlyPlayed();
      setRecentlyPlayed(userRecentlyPlayed.data);
    };

    catchErrors(fetchData());
  }, []);
  console.log(recentlyPlayed);
  return (
    <>
      {profile ? (
        <>
          <StyledHeader type="user">
            <div className="header__inner">
              {profile.images.length !== 0 && profile.images[0].url ? (
                <img
                  className="header__img"
                  src={profile.images[0].url}
                  alt="Avatar"
                />
              ) : (
                <div className="header__no_img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                  </svg>
                </div>
              )}
              <div>
                <h1 className="header__name">{profile.display_name}</h1>
                <p className="header__meta">
                  {playlists && (
                    <span>
                      {playlists.total} Playlist
                      {playlists.total !== 1 ? "s" : ""}
                    </span>
                  )}
                  <span>
                    {profile.followers.total} Follower
                    {profile.followers.total !== 1 ? "s" : ""}
                  </span>
                </p>
              </div>
            </div>
          </StyledHeader>

          {topArtists && topTracks && playlists ? (
            <main>
              <SectionWrapper
                title="Top artists this month"
                seeAllLink="/top-artists"
              >
                <ArtistsGrid artists={topArtists.items.slice(0, 6)} />
              </SectionWrapper>

              <SectionWrapper
                title="Top tracks this month"
                seeAllLink="/top-tracks"
              >
                <TrackList tracks={topTracks.items.slice(0, 10)} />
              </SectionWrapper>

              <SectionWrapper title="Playlists" seeAllLink="/playlists">
                <PlaylistsGrid playlists={playlists.items.slice(0, 6)} />
              </SectionWrapper>
            </main>
          ) : (
            <Loader />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Profile;
