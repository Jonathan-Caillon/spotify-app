import { useState, useEffect } from "react";
import { getRecentlyPlayed } from "../spotify";
import { catchErrors } from "../utils";
import { SectionWrapper, RecentlyPlayedList, Loader } from "../components";

const RecentlyPlayed = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getRecentlyPlayed();
      setRecentlyPlayed(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <main>
      <SectionWrapper title="Recently Played" breadcrumb={true}>
        {recentlyPlayed && recentlyPlayed.items ? (
          <RecentlyPlayedList recentlyPlayeds={recentlyPlayed.items} />
        ) : (
          <Loader />
        )}
      </SectionWrapper>
    </main>
  );
};

export default RecentlyPlayed;
