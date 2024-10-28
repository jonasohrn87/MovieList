import React, { useEffect } from "react";
import "../App.css";

const UpcomingMovies = () => {
    useEffect(() => {
        if (document.getElementById('twitch-embed-script')) {
            return;
        }

        const script = document.createElement("script");
        script.src = "https://embed.twitch.tv/embed/v1.js";
        script.id = "twitch-embed-script";
        script.async = true;

        let embed = null;

        script.addEventListener('load', () => {
            if (!document.getElementById('twitch-embed').children.length) {
                embed = new Twitch.Embed("twitch-embed", {
                    width: "100%",
                    height: 600,
                    channel: "netmovie",
                    // channel: "themoviechannel03",
                    // channel: "hyperlivemovies",
                    // channel: "classictroyus",
                    layout: "video",
                    parent: ["localhost"],
                    muted: true
                });
            }
        });

        document.body.appendChild(script);

        return () => {
            const scriptElement = document.getElementById('twitch-embed-script');
            if (scriptElement) {
                document.body.removeChild(scriptElement);
            }
            const embedElement = document.getElementById('twitch-embed');
            if (embedElement) {
                embedElement.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="liveCommunityChat-container">
            <h2>Kommande filmer...</h2>
            <div id="twitch-embed"></div>
        </div>
    );
};

export default UpcomingMovies;