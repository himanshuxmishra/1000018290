import React from "react";

const UrlResult = ({ data }) => {
  return (
    <div className="url-result">
      <p><strong>Original:</strong> {data.originalUrl}</p>
      <p>
        <strong>Shortened:</strong>{" "}
        <a href={data.shortUrl} target="_blank" rel="noopener noreferrer">
          {data.shortUrl}
        </a>
      </p>
      <p><strong>Expiry:</strong> {data.expiry}</p>
    </div>
  );
};

export default UrlResult;
