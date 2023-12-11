/* eslint-disable react/prop-types */
import "../styles/Comics.scss";

export default function Comics({ data, onClick }) {
  return (
    <div className="comics">
      {data.map((comic) => {
        const detailsUrl = comic.urls.find(
          (element) => element["type"] === "detail"
        ).url;

        return (
          <a
            key={comic.id}
            className="comicCard"
            style={{
              background: `url(${comic.thumbnail.path}.${comic.thumbnail.extension}) no-repeat center`,
              backgroundSize: "cover",
            }}
            onClick={() => onClick(comic.id)}
            href={detailsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className="caption">{comic.title}</div>
            <div className="caption bottom">View Comic Details</div>
          </a>
        );
      })}
    </div>
  );
}